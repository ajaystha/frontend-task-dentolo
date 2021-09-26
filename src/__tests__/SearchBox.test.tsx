import { ComponentProps } from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';

import SearchBox from '@components/SearchBox';

type SearchBoxProps = ComponentProps<typeof SearchBox>;

const baseProps: SearchBoxProps = {
  placeholder: 'Search text',
  onSearch: jest.fn(),
};

describe('<SearchBox /> defaults', () => {
  test('renders default placeholder', () => {
    render(<SearchBox onSearch={baseProps.onSearch} />);

    const { getByTestId } = screen;
    const searchInput = getByTestId('search-input');

    expect(searchInput).toHaveAttribute('placeholder', 'Search');
  });
});

describe('<SearchBox />', () => {
  beforeEach(() => {
    render(<SearchBox {...baseProps} />);
  });

  test('correctly displays search title', () => {
    const title = screen.getByRole('heading', { level: 5, name: 'Search' });

    expect(title).toBeInTheDocument();
  });

  test('renders placeholder correctly', () => {
    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toHaveAttribute('placeholder', baseProps.placeholder);
  });

  test('correctly fires onChange event', async () => {
    const searchInput = screen.getByTestId('search-input');
    const target = { value: 'Lorem ipsum' };

    fireEvent.change(searchInput, { target });
    await waitFor(() => {
      expect(baseProps.onSearch).toBeCalledWith('Lorem ipsum');
    });
  });
});
