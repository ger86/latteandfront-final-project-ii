import {useState} from 'react';
import useCategories from 'hooks/useCategories';
import BookFormView from './BookFormView';

export default function BookForm({requestState, onSubmit, book = null}) {
  const [form, setForm] = useState({
    title: book?.title ?? '',
    image: null,
    categoriesIds: book === null ? [] : book.categories.map((category) => category.id),
    categoryName: '',
    description: book?.description ?? '',
    score: book?.score ?? '',
    readAt: book?.readAt ?? ''
  });
  const [titleError, setTitleError] = useState(null);
  const [scoreError, setScoreError] = useState(null);
  const [categoriesRequestState, categories] = useCategories();

  function handleInputChanged(event) {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value
    }));
  }

  function handleCategoriesSelectChanged(event) {
    setForm((currentForm) => ({
      ...currentForm,
      categoriesIds: [...event.target.selectedOptions].map((option) => option.value)
    }));
  }

  function handleScoreChanged(value) {
    setForm((currentForm) => ({
      ...currentForm,
      score: value
    }));
  }

  function handleImageSelected(event) {
    setForm((currentForm) => ({
      ...currentForm,
      image: event.target.files[0]
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (form.title.length < 3) {
      setTitleError('El título tiene que tener al menos 3 caracteres');
      return;
    }
    if (form.score !== '' && (form.score < 1 || form.score > 5)) {
      setScoreError('La puntuación tiene que ser un valor entre 1 y 5');
      return;
    }
    onSubmit(form);
  }

  let imageUrl = null;
  if (form.image !== null) {
    imageUrl = URL.createObjectURL(form.image);
  } else if (book !== null) {
    imageUrl = book.image;
  }

  return (
    <BookFormView
      titleError={titleError}
      scoreError={scoreError}
      onInputChanged={handleInputChanged}
      onScoreChanged={handleScoreChanged}
      onCategoriesSelectChanged={handleCategoriesSelectChanged}
      onImageSelected={handleImageSelected}
      imageUrl={imageUrl}
      handleSubmit={handleSubmit}
      requestState={requestState}
      categories={categories}
      categoriesRequestState={categoriesRequestState}
      form={form}
      isEditing={Boolean(book)}
    />
  );
}
