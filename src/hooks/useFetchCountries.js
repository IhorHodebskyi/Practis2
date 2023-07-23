import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const useFetchCountries = id => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      try {
        const result = await fetchByRegion(id);
        setCountries(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(() => false);
      }
    };

    getCountries();
  }, [id]);

  return { countries, error, loading };
};
