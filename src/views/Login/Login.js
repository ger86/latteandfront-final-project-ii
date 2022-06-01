import {useState} from 'react';
import {JWT_KEY} from 'consts/app';
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

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setRequestStatus({
        isLoading: true,
        hasFailed: false,
        hasSucceeded: false
      });
      const response = await fetch('https://librarify.latteandfront.es/api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: form.email,
          password: form.password
        })
      });
      if (response.ok) {
        setRequestStatus({
          isLoading: false,
          hasFailed: false,
          hasSucceeded: true
        });
        const json = await response.json();
        localStorage.setItem(JWT_KEY, JSON.stringify(json.data));
      } else {
        setRequestStatus({
          isLoading: false,
          hasFailed: true,
          hasSucceeded: false
        });
      }
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
