import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useFetchCountryInfo } from 'hooks/useFetchCountryInfo';
import { useParams } from 'react-router-dom';

export const Country = () => {
  const { countryId } = useParams();

  const {
    countryInfo: { id, flag, countryName, capital, languages, population },
    error,
    loading,
  } = useFetchCountryInfo(countryId);
  // console.log({ id, flag, countryName, capital, languages, population });
  return (
    <Section>
      <Container>
        {error && <Heading>{error}</Heading>}
        {loading && <Loader />}
        {id && (
          <CountryInfo
            flag={flag}
            id={id}
            country={countryName}
            capital={capital}
            languages={languages}
            population={population}
          />
        )}
      </Container>
    </Section>
  );
};
