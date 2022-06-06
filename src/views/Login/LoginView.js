import Box from 'components/ui/Box';
import {PrimaryButton} from 'components/ui/Button';
import FlexContainer from 'components/ui/FlexContainer';
import Error from 'components/ui/form/Error';
import FormField from 'components/ui/form/FormField';
import {Form} from './styledComponents';

export default function LoginView({form, onInputChanged, onSubmit, requestStatus}) {
  return (
    <FlexContainer justifyContent="center" minHeight="100vh">
      <Form onSubmit={onSubmit}>
        <h3>Iniciar sesión</h3>
        <FormField
          inputType="text"
          name="email"
          id="email"
          label="Email"
          value={form.email}
          onChangeInput={onInputChanged}
        />
        <FormField
          inputType="password"
          name="password"
          id="password"
          label="Contraseña"
          value={form.password}
          onChangeInput={onInputChanged}
        />
        <PrimaryButton type="submit" fullWidth disabled={requestStatus.isLoading}>
          {requestStatus.isLoading ? 'Enviando' : 'Enviar'}
        </PrimaryButton>
        {requestStatus.hasFailed && (
          <Box marginTop={1}>
            <Error>Las credenciales no son válidas</Error>
          </Box>
        )}
      </Form>
    </FlexContainer>
  );
}
