import {AlertError} from 'components/ui/Alert';
import Loader from 'components/ui/Loader';

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

  return <h1>{book.title}</h1>;
}
