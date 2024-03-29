import { useEffect, useState } from 'react';

var UseLogin = (uri) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(uri, {
      headers: {},
    })
      .then((response) => {
        var a = response.json();
        return a;
      })
      .then((d) => {
        setData(d);
      })
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { data, error, loading };
};

export default UseLogin;
