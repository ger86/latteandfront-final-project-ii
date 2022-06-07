import FlexContainer from 'components/ui/FlexContainer';

export default function BooksView({
  requestState,
  paginatedBooks,
  onNextPage,
  onPreviousPage,
  page
}) {
  if (requestState.isLoading) {
    return <div>Cargando...</div>;
  }

  if (requestState.isError || paginatedBooks === null) {
    return <div>Se ha producido un error recuperando la lista de libros.</div>;
  }

  return (
    <div>
      <h1>Mi biblioteca</h1>
      <ul>
        {paginatedBooks.data.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
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
