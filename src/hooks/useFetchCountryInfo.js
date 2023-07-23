import { useEffect, useState } from 'react';
import { fetchCountry } from 'service/country-service';

export const useFetchCountryInfo = name => {
  const [countryInfo, setCountryInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCountryInfo = async () => {
      setLoading(true);
      try {
        const result = await fetchCountry(name);
        setCountryInfo(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(() => false);
      }
    };

    getCountryInfo();
  }, [name]);

  return { countryInfo, error, loading };
};
