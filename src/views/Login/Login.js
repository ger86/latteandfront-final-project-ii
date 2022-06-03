import {useState} from 'react';
import {useAuthContext} from 'contexts/authContext';
import apiClient from 'utils/apiClient';
import LoginView from './LoginView';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [requestStatus, setRequestStatus] = useState({
    isLoading: false,
    hasFailed: false,
    hasSucceeded: false
  });
  const {login} = useAuthContext();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setRequestStatus({
        isLoading: true,
        hasFailed: false,
        hasSucceeded: false
      });
      const json = await apiClient.post('/login_check', {
        username: form.email,
        password: form.password
      });
      login(json.data);
      setRequestStatus({
        isLoading: false,
        hasFailed: false,
        hasSucceeded: true
      });
    } catch (error) {
      setRequestStatus({
        isLoading: false,
        hasFailed: true,
        hasSucceeded: false
      });
    }
  }

  function handleInputChanged(event) {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <LoginView
      form={form}
      onInputChanged={handleInputChanged}
      onSubmit={handleSubmit}
      requestStatus={requestStatus}
    />
  );
}
