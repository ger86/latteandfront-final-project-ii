import {useState} from 'react';
import {useAuthContext} from 'contexts/authContext';
import apiClient from 'utils/apiClient';
import BookAddView from './BookAddView';

export default function BookAdd() {
  const {authTokens} = useAuthContext();
  const [requestState, setRequestState] = useState({
    isLoading: false,
    isSuccesss: false,
    isError: false
  });
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(null);
  const [image, setImage] = useState(null);

  function handleTitleChanged(event) {
    setTitle(event.target.value);
  }

  function handleImageSelected(event) {
    setImage(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (title.length < 3) {
      setTitleError('El título tiene que tener al menos 3 caracteres');
      return;
    }
    try {
      setRequestState({
        isLoading: true,
        isSuccesss: false,
        isError: false
      });
      const data = {
        title
      };
      await apiClient.post('/books', data, {
        Authorization: `Bearer ${authTokens.token}`
      });
      setRequestState({
        isLoading: false,
        isSuccesss: true,
        isError: false
      });
    } catch (error) {
      setRequestState({
        isLoading: false,
        isSuccesss: false,
        isError: true
      });
    }
  }

  console.log(image);

  return (
    <BookAddView
      title={title}
      titleError={titleError}
      onTitleChanged={handleTitleChanged}
      onImageSelected={handleImageSelected}
      handleSubmit={handleSubmit}
      requestState={requestState}
    />
  );
}
