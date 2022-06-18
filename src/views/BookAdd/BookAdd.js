import {useState} from 'react';
import BookForm from 'components/book/form/BookForm';
import {useAuthContext} from 'contexts/authContext';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';

export default function BookAdd() {
  const {authTokens} = useAuthContext();
  const [requestState, setRequestState] = useState({
    isLoading: false,
    isSuccesss: false,
    isError: false
  });

  async function handleSubmit(values) {
    try {
      const base64Image = await blobToBase64(values.image);
      setRequestState({
        isLoading: true,
        isSuccesss: false,
        isError: false
      });
      let categories = values.categoriesIds.map((categoryId) => ({
        id: categoryId
      }));
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

  return <BookForm requestState={requestState} onSubmit={handleSubmit} />;
}
