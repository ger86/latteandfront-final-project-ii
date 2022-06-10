import {useState} from 'react';
import useFetch from 'hooks/useFetch';
import BooksView from './BooksView';

export default function Books() {
  const [page, setPage] = useState(1);
  const [booksRequestState, paginatedBooks] = useFetch(`/books?page=${page}`);
  const [categoriesRequestState, categories] = useFetch(`/categories`);

  function nextPage() {
    setPage((p) => p + 1);
  }

  function previousPage() {
    setPage((p) => p - 1);
  }

  return (
    <BooksView
      booksRequestState={booksRequestState}
      categoriesRequestState={categoriesRequestState}
      paginatedBooks={paginatedBooks}
      categories={categories}
      onNextPage={nextPage}
      onPreviousPage={previousPage}
      page={page}
    />
  );
}
