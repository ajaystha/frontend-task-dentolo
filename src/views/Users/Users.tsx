import { ReactElement, useState, useEffect } from 'react';
import useSWR from 'swr';

import { fetcher } from '@api/http';
import { User } from '@shared/types';

import SearchBox from '@components/SearchBox';
import UsersList from './UsersList';

import s from './Users.module.css';

function Users(): ReactElement {
  const [users, setUsers] = useState<User[]>([]);
  const [userSearch, setUserSearch] = useState<string>('');

  const { data, isValidating } = useSWR('/users', fetcher);

  useEffect(() => {
    if (!data) return;

    const u = data.slice(0, 5);

    setUsers([...u]);
  }, [data]);

  let filteredUsers = [...users];
  if (userSearch) {
    // filter data when searching
    filteredUsers = users.filter((user) => user.name.toLowerCase().includes(userSearch));
  }

  const showLoader = isValidating && !data;

  return (
    <div className={`shadow-01dp ${s.UserContainer}`}>
      <SearchBox
        placeholder="Search by name"
        onSearch={(text: string) => setUserSearch(text.toLowerCase())}
      />

      <UsersList users={filteredUsers} showLoader={showLoader} isFetching={isValidating} />
    </div>
  );
}

export default Users;
