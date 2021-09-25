import { ReactElement } from 'react';

import { User } from '@shared/types';

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
        <ul className="green-blue-list">
          {users.map((usr) => (
            <li
              key={usr.id}
              className={`green-blue-list-item ${s.IsButton}`}
              onClick={() => onSelectUser(usr)}
            >
              <span className="listing">{usr.name}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default UsersList;
