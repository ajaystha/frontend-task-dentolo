import { ReactElement, useState, useEffect } from 'react';
import useSWR from 'swr';

import { fetcher } from '@api/http';
import { User } from '@shared/types';

import SearchBox from '@components/SearchBox';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import Modal from '@components/Modal';

import s from './Users.module.css';

function Users(): ReactElement {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userSearch, setUserSearch] = useState<string>('');

  const { data, isValidating } = useSWR('/users', fetcher);

  useEffect(() => {
    if (!data) return;

    // get 5 users
    const updatedUsersList = data.slice(0, 5);
    setUsers([...updatedUsersList]);
  }, [data]);

  const modalCloseHandler = () => setSelectedUser(null);

  let filteredUsers = [...users];
  if (userSearch) {
    // filter data when searching
    filteredUsers = users.filter((user) => user.name.toLowerCase().includes(userSearch));
  }

  const showLoader = !data && isValidating;

  return (
    <>
      {selectedUser && (
        <Modal className={s.UserDetailsModal} onClose={modalCloseHandler}>
          <UserDetails user={selectedUser} onCloseModal={modalCloseHandler} />
        </Modal>
      )}

      <div className={`shadow-01dp ${s.UserContainer}`}>
        <SearchBox
          placeholder="Search by name"
          onSearch={(text: string) => setUserSearch(text.toLowerCase())}
        />

        <UsersList
          users={filteredUsers}
          showLoader={showLoader}
          isFetching={isValidating}
          onSelectUser={(usr) => setSelectedUser(usr)}
        />
      </div>
    </>
  );
}

export default Users;
