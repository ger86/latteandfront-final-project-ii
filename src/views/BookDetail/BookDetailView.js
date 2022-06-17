import {generatePath, Link} from 'react-router-dom';
import {AlertError} from 'components/ui/Alert';
import {Button, DangerButton} from 'components/ui/Button';
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
    <div>
      <h1>{book.title}</h1>
      <FlexContainer withGutter>
        <Button as={Link} to={generatePath(BOOK_EDIT, {id: book.id})}>
          Editar
        </Button>
        <DangerButton as={Link} to={generatePath(BOOK_DELETE, {id: book.id})}>
          Eliminar
        </DangerButton>
      </FlexContainer>
    </div>
  );
}
