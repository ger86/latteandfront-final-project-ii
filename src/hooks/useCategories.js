import useFetch from './useFetch';

export default function useCategories() {
  return useFetch(`/categories`);
}
