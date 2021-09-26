import { ReactElement } from 'react';
import { motion } from 'framer-motion';

import { User } from '@shared/types';
import { listVariant, listItemVariant } from '@shared/motions';

import NoResult from '@components/NoResult';
import UsersListLoader from './UsersListLoader';

import s from './Users.module.css';

interface UsersListProps {
  users: User[];
  showLoader: boolean;
  isFetching: boolean;
  onSelectUser: (usr: User) => void;
}

function UsersList(props: UsersListProps): ReactElement {
  const { users, showLoader, isFetching, onSelectUser } = props;

  const isEmptyContent = !isFetching && !users.length;

  return (
    <>
      <h5>Results</h5>

      {showLoader && <UsersListLoader />}

      {!showLoader && isEmptyContent ? (
        <NoResult />
      ) : (
        <motion.ul
          className="green-blue-list"
          variants={listVariant}
          initial="hidden"
          animate="visible"
        >
          {users.map((usr) => (
            <motion.li
              key={usr.id}
              role="button"
              aria-label="open user details"
              className={`green-blue-list-item ${s.IsButton}`}
              onClick={() => onSelectUser(usr)}
              variants={listItemVariant}
            >
              <span className="listing">{usr.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
}

export default UsersList;
