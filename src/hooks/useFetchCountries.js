import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      const result = await fetchByRegion();
      //   console.log()
      setCountries(result);
    };

    setLoading(true);
    try {
      getCountries();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { countries, error, loading };
};
