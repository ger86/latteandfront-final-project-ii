import {useParams} from 'react-router-dom';
import useBook from 'hooks/useBook';
import BookDetailView from './BookDetailView';

export default function BookDetail() {
  const {id} = useParams();
  const [requestState, book] = useBook(id);

  return <BookDetailView book={book} requestState={requestState} />;
}
