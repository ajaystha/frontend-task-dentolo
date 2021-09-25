import { ReactElement } from 'react';

import { User } from '@shared/types';

import ListItem from './ListItem';
import NoResult from '@components/NoResult';
import UsersListLoader from './UsersListLoader';

interface UsersListProps {
  users: User[];
  showLoader: boolean;
  isFetching: boolean;
}

function UsersList(props: UsersListProps): ReactElement {
  const { users, showLoader, isFetching } = props;

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
            <ListItem key={usr.id}>
              <span className="listing">{usr.name}</span>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
}

export default UsersList;
