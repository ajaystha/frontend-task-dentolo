import { ComponentProps } from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';

import UsersList from '@views/Users/UsersList';

type UsersListProps = ComponentProps<typeof UsersList>;

const baseProps: UsersListProps = {
  users: [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
  ],
  showLoader: false,
  isFetching: false,
  onSelectUser: jest.fn(),
};

describe('<UsersList />', () => {
  beforeEach(() => {
    render(<UsersList {...baseProps} />);
  });

  test('correctly displays title', () => {
    const title = screen.getByRole('heading', { level: 5, name: 'Results' });

    expect(title).toBeInTheDocument();
  });

  test('displays correct number of users', () => {
    const list = screen.getByRole('list');

    const { getAllByRole } = within(list);
    const items = getAllByRole('button');
    expect(items.length).toBe(2);
  });

  test('correctly lists users', () => {
    const items = screen.getAllByRole('button', { name: 'open user details' });

    expect(items[0]).toHaveTextContent('Leanne Graham');
    expect(items[1]).toHaveTextContent('Ervin Howell');
  });

  test('correctly fires onClick event', () => {
    const btnUser = screen.getAllByRole('button', { name: 'open user details' });

    btnUser.forEach((_, idx) => {
      fireEvent.click(btnUser[idx]);
    });

    expect(baseProps.onSelectUser).toHaveBeenCalledTimes(2);
  });
});
