import {generatePath, Link} from 'react-router-dom';
import {AlertError} from 'components/ui/Alert';
import Box from 'components/ui/Box';
import {Button, DangerButton} from 'components/ui/Button';
import Card from 'components/ui/Card';
import FlexContainer from 'components/ui/FlexContainer';
import Loader from 'components/ui/Loader';
import {BOOK_DELETE, BOOK_EDIT} from 'config/router/paths';

export default function BookDetailView({book, requestState}) {
  if (requestState.isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (requestState.isError || book === null) {
    return <AlertError>Se ha producido un error recuperando el libro</AlertError>;
  }

  return (
    <Card
      image={book.image}
      title={book.title}
      description={book.description}
      footer={
        <div>
          {book.categories.length > 0 && (
            <Box marginBottom="1">
              <ul>
                {book.categories.map((category) => (
                  <li key={category.id}>{category.name}</li>
                ))}
              </ul>
            </Box>
          )}
          {book.readAt && (
            <Box marginBottom="1">
              <strong>Fecha de lectura: </strong>
              {book.readAt}
            </Box>
          )}
          {book.score && (
            <Box marginBottom="1">
              <strong>Puntuación: </strong>: {book.score}
            </Box>
          )}
          <FlexContainer withGutter>
            <Button as={Link} to={generatePath(BOOK_EDIT, {id: book.id})}>
              Editar
            </Button>
            <DangerButton as={Link} to={generatePath(BOOK_DELETE, {id: book.id})}>
              Eliminar
            </DangerButton>
          </FlexContainer>
        </div>
      }
    ></Card>
  );
}
