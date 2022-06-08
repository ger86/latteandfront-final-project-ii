import {useState} from 'react';
import useFetch from 'hooks/useFetch';
import BooksView from './BooksView';

export default function Books() {
  const [page, setPage] = useState(1);
  const [requestState, paginatedBooks] = useFetch(`/books?page=${page}`);

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
