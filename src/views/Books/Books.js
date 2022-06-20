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
  if (selectedCategoryId.length > 0) {
    urlSearchParams.append('categoryId', selectedCategoryId);
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

  return (
    <div>
      <BooksView
        booksRequestState={booksRequestState}
        categoriesRequestState={categoriesRequestState}
        paginatedBooks={paginatedBooks}
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
