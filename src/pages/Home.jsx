import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks/useFetchCountries';

export const Home = () => {
  const { countries, error, loading } = useFetchCountries();

  return (
    <Section>
      <Container>
        {error && <Heading>{error}</Heading>}
        {countries.length > 0 && <CountryList countries={countries} />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
