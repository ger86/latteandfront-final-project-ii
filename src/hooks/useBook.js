import useFetch from './useFetch';

export default function useBook(id) {
  return useFetch(`/books/${id}`);
}
