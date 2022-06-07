export default function BooksView({requestState, books}) {
  if (requestState.isLoading) {
    return <div>Cargando...</div>;
  }

  if (requestState.isError || books === null) {
    return <div>Se ha producido un error recuperando la lista de libros.</div>;
  }

  return (
    <div>
      <h1>Mi biblioteca</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
