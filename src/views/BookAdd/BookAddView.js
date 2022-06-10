import {AlertSuccess} from 'components/ui/Alert';
import Box from 'components/ui/Box';
import {PrimaryButton} from 'components/ui/Button';
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
  titleError
}) {
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Título</FormLabel>
        <Input type="text" value={title} onChange={onTitleChanged} name="title" />
        {titleError && <Error mt={1}>{titleError}</Error>}
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
