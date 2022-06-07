import {useEffect, useState} from 'react';
import {useAuthContext} from 'contexts/authContext';
import apiClient from 'utils/apiClient';
import BooksView from './BooksView';

export default function Books() {
  const {authTokens} = useAuthContext();
  const [paginatedBooks, setPaginatedBooks] = useState(null);
  const [requestState, setRequestState] = useState({
    isLoading: false,
    isSuccesss: false,
    isError: false
  });
  const [page, setPage] = useState(1);

  useEffect(
    function () {
      async function fetchBooks() {
        setRequestState({
          isLoading: true,
          isSuccesss: false,
          isError: false
        });
        try {
          const json = await apiClient.get(`/books?page=${page}`, {
            Authorization: `Bearer ${authTokens.token}`
          });
          setRequestState({
            isLoading: false,
            isSuccesss: true,
            isError: false
          });
          setPaginatedBooks(json);
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
    [authTokens.token, page]
  );

  function nextPage() {
    setPage((p) => p + 1);
  }

  function previousPage() {
    setPage((p) => p - 1);
  }

  return (
    <BooksView
      requestState={requestState}
      paginatedBooks={paginatedBooks}
      onNextPage={nextPage}
      onPreviousPage={previousPage}
      page={page}
    />
  );
}
