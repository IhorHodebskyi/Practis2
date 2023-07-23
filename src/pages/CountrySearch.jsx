import { useSearchParams } from 'react-router-dom';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchCountries } from 'hooks/useFetchCountries';

export const CountrySearch = () => {
  const [query] = useSearchParams();
  const { countries, error, loading } = useFetchCountries(
    query.get('query') ?? 'europe',
  );

  return (
    <Section>
      <Container>
        <SearchForm />
        {error && <Heading>{error}</Heading>}
        {countries.length > 0 && <CountryList countries={countries} />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
