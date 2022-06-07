import {useEffect} from 'react';
import {useAuthContext} from 'contexts/authContext';
import apiClient from 'utils/apiClient';

export default function Books() {
  const {authTokens} = useAuthContext();

  useEffect(
    function () {
      async function fetchBooks() {
        const json = await apiClient.get('/books', {
          Authorization: `Bearer ${authTokens.token}`
        });
        console.log(json);
      }
      fetchBooks();
    },
    [authTokens.token]
  );

  return <h1>Books component</h1>;
}
