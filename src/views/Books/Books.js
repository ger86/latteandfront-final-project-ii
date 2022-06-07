import {useEffect, useState} from 'react';
import {useAuthContext} from 'contexts/authContext';
import apiClient from 'utils/apiClient';
import BooksView from './BooksView';

export default function Books() {
  const {authTokens} = useAuthContext();
  const [books, setBooks] = useState(null);
  const [requestState, setRequestState] = useState({
    isLoading: false,
    isSuccesss: false,
    isError: false
  });

  useEffect(
    function () {
      async function fetchBooks() {
        setRequestState({
          isLoading: true,
          isSuccesss: false,
          isError: false
        });
        try {
          const json = await apiClient.get('/books', {
            Authorization: `Bearer ${authTokens.token}`
          });
          setRequestState({
            isLoading: false,
            isSuccesss: true,
            isError: false
          });
          setBooks(json.data);
        } catch (error) {
          setRequestState({
            isLoading: false,
            isSuccesss: false,
            isError: true
          });
        }
      }
      fetchBooks();
    },
    [authTokens.token]
  );

  return <BooksView requestState={requestState} books={books} />;
}
