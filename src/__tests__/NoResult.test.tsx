import { render, screen } from '@testing-library/react';

import NoResult from '@components/NoResult';

describe('<NoResult />', () => {
  test('shows not found message', () => {
    render(<NoResult />);

    const msg = screen.getByText('No result');

    expect(msg).toBeInTheDocument();
  });
});
