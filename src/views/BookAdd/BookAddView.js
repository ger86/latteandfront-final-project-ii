import {AlertError, AlertSuccess} from 'components/ui/Alert';
import Box from 'components/ui/Box';
import {PrimaryButton} from 'components/ui/Button';
import Loader from 'components/ui/Loader';
import ResponsiveImage from 'components/ui/ResponsiveImage';
import Error from 'components/ui/form/Error';
import FormGroup from 'components/ui/form/FormGroup';
import FormLabel from 'components/ui/form/FormLabel';
import Input from 'components/ui/form/Input';
import {ImageFieldWrapper, ImageFormGroup, ImageWrapper} from './components/styledComponents';

export default function BookFormView({
  handleSubmit,
  title,
  onTitleChanged,
  imageUrl,
  onImageSelected,
  requestState,
  titleError,
  categories,
  categoriesRequestState,
  selectedCategoryId,
  onCategorySelected,
  categoryName,
  onCategoryNameChanged
}) {
  if (categoriesRequestState.isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (categoriesRequestState.isError || categories === null) {
    return <AlertError>Se ha producido un error recuperando la lista de libros.</AlertError>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Título</FormLabel>
        <Input type="text" value={title} onChange={onTitleChanged} name="title" />
        {titleError && <Error mt={1}>{titleError}</Error>}
      </FormGroup>
      <FormGroup>
        <FormLabel>Categoría</FormLabel>
        <select
          value={selectedCategoryId}
          onChange={onCategorySelected}
          disabled={categoryName.length > 0}
        >
          <option value="">-</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <Input
          type="text"
          value={categoryName}
          onChange={onCategoryNameChanged}
          name="categoryName"
          disabled={selectedCategoryId.length > 0}
        />
      </FormGroup>
      <ImageFormGroup>
        {imageUrl && (
          <ImageWrapper>
            {' '}
            <ResponsiveImage src={imageUrl} />
          </ImageWrapper>
        )}
        <ImageFieldWrapper>
          <FormLabel>Imagen</FormLabel>
          <Input type="file" onChange={onImageSelected} name="image" />
        </ImageFieldWrapper>
      </ImageFormGroup>
      <PrimaryButton type="submit" disabled={requestState.isSending}>
        {requestState.isSending ? 'Añadiendo...' : 'Añadir libro'}
      </PrimaryButton>
      {requestState.isError && (
        <Box marginTop={1}>
          <Error mt={1}>
            No se ha podido crear tu libro. Vuelve a intentarlo pasados unos instantes
          </Error>
        </Box>
      )}
      {requestState.isSuccesss && (
        <Box marginTop={1}>
          <AlertSuccess mt={1}>Tu libro se ha añadido correctamente</AlertSuccess>
        </Box>
      )}
    </form>
  );
}
