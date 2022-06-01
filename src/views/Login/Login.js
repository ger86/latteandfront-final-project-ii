import {useState} from 'react';
import classes from './Login.module.css';

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
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formControl}>
          <div>
            <label className={classes.label}>Email</label>
          </div>
          <div>
            <input value={form.email} onChange={handleInputChanged} name="email" />
          </div>
        </div>
        <div className={classes.formControl}>
          <div>
            <label className={classes.label}>Contraseña</label>
          </div>
          <div>
            <input
              value={form.password}
              onChange={handleInputChanged}
              name="password"
              type="password"
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={requestStatus.isLoading}>
            Enviar
          </button>
        </div>
        <div className={classes.feedback}>
          {requestStatus.isLoading && (
            <div className={`${classes.alert} ${classes.alertInfo}`}>Iniciando sesión</div>
          )}
          {requestStatus.hasFailed && (
            <div className={`${classes.alert} ${classes.alertError}`}>
              Las credenciales no son válidas
            </div>
          )}
          {requestStatus.hasSucceeded && (
            <div className={`${classes.alert} ${classes.alertSuccess}`}>
              ¡Bienvenido a Latte and Books!
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
