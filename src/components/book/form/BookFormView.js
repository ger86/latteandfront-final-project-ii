import {AlertError, AlertSuccess} from 'components/ui/Alert';
import Box from 'components/ui/Box';
import {PrimaryButton} from 'components/ui/Button';
import Loader from 'components/ui/Loader';
import ResponsiveImage from 'components/ui/ResponsiveImage';
import Error from 'components/ui/form/Error';
import FormGroup from 'components/ui/form/FormGroup';
import FormLabel from 'components/ui/form/FormLabel';
import Input from 'components/ui/form/Input';
import Select from 'components/ui/form/Select';
import StarsInput from 'components/ui/form/StarsInput';
import TextArea from 'components/ui/form/TextArea';
import {ImageFieldWrapper, ImageFormGroup, ImageWrapper} from './styledComponents';

export default function BookFormView({
  handleSubmit,
  form,
  onScoreChanged,
  onInputChanged,
  onCategoriesSelectChanged,
  imageUrl,
  onImageSelected,
  requestState,
  titleError,
  scoreError,
  categories,
  categoriesRequestState,
  isEditing
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
        <Input type="text" value={form.title} onChange={onInputChanged} name="title" />
        {titleError && <Error mt={1}>{titleError}</Error>}
      </FormGroup>
      <FormGroup>
        <FormLabel>Descripción</FormLabel>
        <TextArea value={form.description} onChange={onInputChanged} name="description" rows={6} />
        {titleError && <Error mt={1}>{titleError}</Error>}
      </FormGroup>
      <FormGroup>
        <FormLabel>Categoría</FormLabel>
        <Box marginBottom="1">
          <Select
            name="categoriesIds"
            value={form.categoriesIds}
            onChange={onCategoriesSelectChanged}
            multiple
            width="100%"
          >
            <option value="">-</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </Box>
        <FormLabel>Nueva categoría</FormLabel>
        <Input
          type="text"
          value={form.categoryName}
          onChange={onInputChanged}
          name="categoryName"
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
      <FormGroup>
        <FormLabel>Puntuación</FormLabel>
        <StarsInput value={form.score} onChange={onScoreChanged} />
        {scoreError && <Error mt={1}>{scoreError}</Error>}
      </FormGroup>
      <FormGroup>
        <FormLabel>Fecha de lectura</FormLabel>
        <Input type="date" value={form.readAt} onChange={onInputChanged} name="readAt" />
      </FormGroup>
      <PrimaryButton type="submit" disabled={requestState.isSending}>
        {requestState.isSending
          ? isEditing
            ? 'Editando...'
            : 'Añadiendo'
          : isEditing
          ? 'Editar libro'
          : 'Añadir libro'}
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
