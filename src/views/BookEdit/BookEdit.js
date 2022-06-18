import {useState} from 'react';
import {generatePath, useParams} from 'react-router';
import BookForm from 'components/book/form/BookForm';
import {AlertError} from 'components/ui/Alert';
import Loader from 'components/ui/Loader';
import {useAuthContext} from 'contexts/authContext';
import useBook from 'hooks/useBook';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';

export default function BookEdit() {
  const {id} = useParams();
  const [requestState, book] = useBook(id);
  const {authTokens} = useAuthContext();
  const [putRequestState, setPutRequestState] = useState({
    isLoading: false,
    isSuccesss: false,
    isError: false
  });

  async function handleSubmit(values) {
    try {
      const base64Image = await blobToBase64(values.image);
      setPutRequestState({
        isLoading: true,
        isSuccesss: false,
        isError: false
      });
      let categories = [];
      if (values.selectedCategoryId !== '') {
        categories.push({
          id: values.selectedCategoryId
        });
      }
      if (values.categoryName !== '') {
        categories.push({
          name: values.categoryName
        });
      }
      const data = {
        title: values.title,
        description: values.description,
        readAt: values.readAt,
        score: values.score,
        base64Image,
        categories
      };
      await apiClient.put(generatePath('/books/:id', {id}), data, {
        Authorization: `Bearer ${authTokens.token}`
      });
      setPutRequestState({
        isLoading: false,
        isSuccesss: true,
        isError: false
      });
    } catch (error) {
      setPutRequestState({
        isLoading: false,
        isSuccesss: false,
        isError: true
      });
    }
  }

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

  return <BookForm requestState={putRequestState} onSubmit={handleSubmit} book={book} />;
}
