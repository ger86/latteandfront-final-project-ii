import {useMemo, useState} from 'react';
import useFetch from 'hooks/useFetch';
import BooksView from './BooksView';

export default function Books() {
  const [page, setPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [booksRequestState, paginatedBooks] = useFetch(`/books?page=${page}`);
  const [categoriesRequestState, categories] = useFetch(`/categories`);

  function nextPage() {
    setPage((p) => p + 1);
  }

  function previousPage() {
    setPage((p) => p - 1);
  }

  function handleCategorySelected(event) {
    setSelectedCategoryId(event.target.value);
  }

  const booksToShow = useMemo(
    function () {
      if (paginatedBooks === null) {
        return null;
      }
      if (selectedCategoryId === '') {
        return paginatedBooks;
      } else {
        return {
          data: paginatedBooks.data.filter(function (book) {
            if (selectedCategoryId === '') {
              return true;
            }
            return book.categories.some((cat) => cat.id === selectedCategoryId);
          }),
          total: paginatedBooks.total,
          itemsPerPage: paginatedBooks.itemsPerPage,
          page: paginatedBooks.page
        };
      }
    },
    [paginatedBooks, selectedCategoryId]
  );

  return (
    <BooksView
      booksRequestState={booksRequestState}
      categoriesRequestState={categoriesRequestState}
      paginatedBooks={booksToShow}
      categories={categories}
      onNextPage={nextPage}
      onPreviousPage={previousPage}
      page={page}
      selectedCategoryId={selectedCategoryId}
      onCategorySelected={handleCategorySelected}
    />
  );
}
