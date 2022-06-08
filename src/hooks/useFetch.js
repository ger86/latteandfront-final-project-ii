import {useEffect, useState} from 'react';
import {useAuthContext} from 'contexts/authContext';
import apiClient from 'utils/apiClient';

export default function useFetch(path) {
  const {authTokens} = useAuthContext();
  const [requestState, setRequestState] = useState({
    isLoading: false,
    isSuccesss: false,
    isError: false
  });
  const [json, setJson] = useState(null);

  useEffect(
    function () {
      async function fetchBooks() {
        setRequestState({
          isLoading: true,
          isSuccesss: false,
          isError: false
        });
        try {
          const json = await apiClient.get(path, {
            Authorization: `Bearer ${authTokens.token}`
          });
          setRequestState({
            isLoading: false,
            isSuccesss: true,
            isError: false
          });
          setJson(json);
        } catch (error) {
          setRequestState({
            isLoading: false,
            isSuccesss: false,
            isError: true
          });
        }
      }
      fetchBooks();
    },
    [authTokens.token, path]
  );

  return [requestState, json];
}
