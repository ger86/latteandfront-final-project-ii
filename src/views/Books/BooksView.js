import {AlertError} from 'components/ui/Alert';
import Box from 'components/ui/Box';
import {Button} from 'components/ui/Button';
import FlexContainer from 'components/ui/FlexContainer';
import Loader from 'components/ui/Loader';
import Input from 'components/ui/form/Input';
import BookItem from './components/BookItem';
import FilterSelector from './components/FilterSelector';
import {BooksWrapper} from './components/styledComponents';

export default function BooksView({
  booksRequestState,
  categoriesRequestState,
  paginatedBooks,
  categories,
  onNextPage,
  onPreviousPage,
  page,
  onCategorySelected,
  selectedCategoryId,
  searchText,
  onSearchTextChanged
}) {
  if (booksRequestState.isLoading || categoriesRequestState.isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (
    booksRequestState.isError ||
    paginatedBooks === null ||
    categoriesRequestState.isError ||
    categories === null
  ) {
    return <AlertError>Se ha producido un error recuperando la lista de libros.</AlertError>;
  }

  return (
    <div>
      <h1>Mi biblioteca</h1>
      <FlexContainer justifyContent="flex-end" marginBottom="1rem" withGutter>
        <div>
          <Input onChange={onSearchTextChanged} placeholder="Buscar..." defaultValue={searchText} />
        </div>
        <FilterSelector
          elements={categories}
          onChange={onCategorySelected}
          value={selectedCategoryId}
        />
      </FlexContainer>
      <BooksWrapper>
        {paginatedBooks.data.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </BooksWrapper>
      <p>Total: {paginatedBooks.total}</p>
      <FlexContainer marginTop="1rem" justifyContent="flex-end">
        <Button onClick={onPreviousPage} disabled={page === 1}>
          Anterior
        </Button>
        <Box marginLeft="1">
          <Button
            onClick={onNextPage}
            disabled={page === Math.ceil(paginatedBooks.total / paginatedBooks.itemsPerPage)}
          >
            Siguiente
          </Button>
        </Box>
      </FlexContainer>
    </div>
  );
}
