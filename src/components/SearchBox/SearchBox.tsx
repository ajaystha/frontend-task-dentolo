import { ReactElement, ChangeEvent, useEffect, useState } from 'react';

import useDebounce from '@hooks/useDebounce';

import CloseIcon from '@components/Icons/Close';

import s from './SearchBox.module.css';

interface SearchBoxProps {
  placeholder?: string;
  onSearch: (text: string) => void;
}

function SearchBox(props: SearchBoxProps): ReactElement {
  const { placeholder, onSearch } = props;

  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchText = useDebounce(searchText);

  useEffect(() => {
    onSearch(debouncedSearchText);
  }, [debouncedSearchText]);

  return (
    <>
      <h5>Search</h5>

      <div className={s.InputWrapper}>
        <input
          type="text"
          className="input-primary input-md"
          placeholder={placeholder}
          value={searchText}
          onChange={(ev: ChangeEvent<HTMLInputElement>) => setSearchText(ev.target.value)}
        />

        {searchText && (
          <CloseIcon className={s.IconButtonClose} onClick={() => setSearchText('')} />
        )}
      </div>
    </>
  );
}

export default SearchBox;

SearchBox.defaultProps = {
  placeholder: 'Search',
};
