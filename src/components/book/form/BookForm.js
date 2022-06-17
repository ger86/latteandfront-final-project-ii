import {useState} from 'react';
import useCategories from 'hooks/useCategories';
import BookFormView from './BookFormView';

export default function BookForm({requestState, onSubmit}) {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(null);
  const [image, setImage] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoriesRequestState, categories] = useCategories();

  function handleTitleChanged(event) {
    setTitle(event.target.value);
  }

  function handleCategoryNameChanged(event) {
    setCategoryName(event.target.value);
  }

  function handleCategorySelected(event) {
    setSelectedCategoryId(event.target.value);
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
    onSubmit({
      title,
      image,
      selectedCategoryId,
      categoryName
    });
  }

  const imageUrl = image === null ? null : URL.createObjectURL(image);

  return (
    <BookFormView
      title={title}
      titleError={titleError}
      onTitleChanged={handleTitleChanged}
      onImageSelected={handleImageSelected}
      imageUrl={imageUrl}
      handleSubmit={handleSubmit}
      requestState={requestState}
      categories={categories}
      categoriesRequestState={categoriesRequestState}
      selectedCategoryId={selectedCategoryId}
      onCategorySelected={handleCategorySelected}
      onCategoryNameChanged={handleCategoryNameChanged}
      categoryName={categoryName}
    />
  );
}
