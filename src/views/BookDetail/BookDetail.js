import {useParams} from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import BookDetailView from './BookDetailView';

export default function BookDetail() {
  const {id} = useParams();
  const [requestState, book] = useFetch(`/books/${id}`);

  return <BookDetailView book={book} requestState={requestState} />;
}
