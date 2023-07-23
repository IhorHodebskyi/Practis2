import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [region, setRegion] = useState(searchParams.get('query') ?? 'europe');

  const handleChange = ({ target: { value } }) => {
    setRegion(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: region });
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        value={region}
        aria-label="select"
        name="region"
        required
        onChange={handleChange}
      >
        <option disabled>Select a region and press enter</option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};
