import {AlertError} from 'components/ui/Alert';
import {Button, DangerButton} from 'components/ui/Button';
import FlexContainer from 'components/ui/FlexContainer';
import Loader from 'components/ui/Loader';

export default function BookDeleteView({
  book,
  requestState,
  onCancel,
  onConfirm,
  deleteRequestState
}) {
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
      <h1>Borrar: {book.title}</h1>
      <p>Esta acción no se puede deshacer</p>
      <FlexContainer withGutter>
        <Button onClick={onCancel} disabled={deleteRequestState.isLoading}>
          Cancelar
        </Button>
        <DangerButton onClick={onConfirm} disabled={deleteRequestState.isLoading}>
          {deleteRequestState.isLoading ? 'Eliminando' : 'Eliminar'}
        </DangerButton>
      </FlexContainer>
      {deleteRequestState.isError && (
        <AlertError>Se ha producido un error eliminando el libro</AlertError>
      )}
    </div>
  );
}
