import {useMemo, useState} from 'react';
import debounce from 'lodash.debounce';
import useCategories from 'hooks/useCategories';
import useFetch from 'hooks/useFetch';
import BooksView from './BooksView';

export default function Books() {
  const [page, setPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [searchText, setSearchText] = useState('');

  const urlSearchParams = new URLSearchParams({
    page
  });
  if (searchText.length > 0) {
    urlSearchParams.append('searchText', searchText);
  }

  const [booksRequestState, paginatedBooks] = useFetch(`/books?${urlSearchParams.toString()}`);
  const [categoriesRequestState, categories] = useCategories();

  function nextPage() {
    setPage((p) => p + 1);
  }

  function previousPage() {
    setPage((p) => p - 1);
  }

  function handleSearchTextChanged(event) {
    setSearchText(event.target.value);
  }

  const handleSearchTextChangedDebounced = useMemo(
    () => debounce(handleSearchTextChanged, 300),
    []
  );

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
    <div>
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
        searchText={searchText}
        onSearchTextChanged={handleSearchTextChangedDebounced}
      />
    </div>
  );
}
