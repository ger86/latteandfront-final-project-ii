import {useState} from 'react';
import {generatePath, useNavigate, useParams} from 'react-router';
import {BOOKS, BOOK_DETAIL} from 'config/router/paths';
import {useAuthContext} from 'contexts/authContext';
import useBook from 'hooks/useBook';
import apiClient from 'utils/apiClient';
import BookDeleteView from './BookDeleteView';

export default function BookDelete() {
  const {id} = useParams();
  const [requestState, book] = useBook(id);
  const navigate = useNavigate();
  const {authTokens} = useAuthContext();
  const [deleteRequestState, setDeleteRequestState] = useState({
    isLoading: false,
    isSuccesss: false,
    isError: false
  });

  function handleCancelled() {
    navigate(generatePath(BOOK_DETAIL, {id}));
  }

  async function handleConfirmed(event) {
    event.preventDefault();
    try {
      setDeleteRequestState({
        isLoading: true,
        isSuccesss: false,
        isError: false
      });
      await apiClient.delete(generatePath('/books/:id', {id}), {
        Authorization: `Bearer ${authTokens.token}`
      });
      navigate(BOOKS);
    } catch (error) {
      setDeleteRequestState({
        isLoading: false,
        isSuccesss: false,
        isError: true
      });
    }
  }

  return (
    <BookDeleteView
      requestState={requestState}
      book={book}
      onCancel={handleCancelled}
      onConfirm={handleConfirmed}
      deleteRequestState={deleteRequestState}
    />
  );
}
