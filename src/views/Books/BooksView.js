import {AlertError} from 'components/ui/Alert';
import FlexContainer from 'components/ui/FlexContainer';
import Loader from 'components/ui/Loader';
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
  selectedCategoryId
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
      <FilterSelector
        elements={categories}
        onChange={onCategorySelected}
        value={selectedCategoryId}
      />
      <BooksWrapper>
        {paginatedBooks.data.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </BooksWrapper>
      <p>Total: {paginatedBooks.total}</p>
      <FlexContainer>
        <button onClick={onPreviousPage} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={onNextPage} disabled={page === paginatedBooks.total}>
          Siguiente
        </button>
      </FlexContainer>
    </div>
  );
}
