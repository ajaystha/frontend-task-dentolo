import { ComponentProps } from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';

import UserDetails from '@views/Users/UserDetails';

type UserDetailsProps = ComponentProps<typeof UserDetails>;

const baseProps: UserDetailsProps = {
  user: {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  onCloseModal: jest.fn(),
};

describe('<UserDetails />', () => {
  beforeEach(() => {
    render(<UserDetails {...baseProps} />);
  });

  test('correctly displays title', () => {
    const title = screen.getByRole('heading', { level: 5, name: 'User Details' });

    expect(title).toBeInTheDocument();
  });

  test('displays correct number of user details', () => {
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(4);
  });

  test("displays user's details correctly", () => {
    const name = screen.getByTestId('test-name');
    const username = screen.getByTestId('test-username');
    const email = screen.getByTestId('test-email');
    const website = screen.getByTestId('test-website');

    expect(name).toHaveTextContent('Name: Leanne Graham');
    expect(username).toHaveTextContent('Username: Bret');
    expect(email).toHaveTextContent('Email: Sincere@april.biz');
    expect(website).toHaveTextContent('Website: hildegard.org');
  });

  test('correctly fires onClick event', () => {
    const btnClose = screen.getByRole('button', { name: 'Close' });

    fireEvent.click(btnClose);
    expect(baseProps.onCloseModal).toHaveBeenCalledTimes(1);
  });
});
