import { GoBackBtn } from 'components';
import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';
import { useLocation } from 'react-router-dom';

export const CountryInfo = ({
  flag,
  capital,
  country,
  id,
  languages = [],
  population,
}) => {
  const location = useLocation();

  console.log(location);
  return (
    // <h2>CountryInfo</h2>
    <>
      <GoBackBtn path={location.state.from ?? '/'}>Back</GoBackBtn>
      <CountryWrapper>
        <Flag>
          <Image src={flag} alt={country} />
        </Flag>
        <CountryDescription>
          <CountryCapital>
            Capital:
            {capital.map(city => (
              <Accent key={city}>
                <br />
                {city}
              </Accent>
            ))}
          </CountryCapital>

          <CountryTitle>{country}</CountryTitle>

          <CountryDetail>
            Population:
            <Accent>
              <br />
              {population}
            </Accent>
          </CountryDetail>

          <CountryDetail>
            Languages:
            {languages.map(language => (
              <Accent key={language}>
                <br />
                {language}
              </Accent>
            ))}
          </CountryDetail>
        </CountryDescription>
      </CountryWrapper>
    </>
  );
};
