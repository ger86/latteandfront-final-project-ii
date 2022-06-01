import {useState} from 'react';
import classes from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasLoginFailed, setHasLoginFailed] = useState(false);
  const [hasLoginSucceeded, setHasLoginSucceeded] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://librarify.latteandfront.es/api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password
        })
      });
      if (response.ok) {
        setHasLoginSucceeded(true);
        setHasLoginFailed(false);
      } else {
        setHasLoginFailed(true);
        setHasLoginSucceeded(false);
      }
    } catch (error) {
      setHasLoginFailed(true);
      setHasLoginSucceeded(false);
    }
  }

  function handleEmailChanged(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChanged(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formControl}>
          <div>
            <label className={classes.label}>Email</label>
          </div>
          <div>
            <input value={email} onChange={handleEmailChanged} />
          </div>
        </div>
        <div className={classes.formControl}>
          <div>
            <label className={classes.label}>Contraseña</label>
          </div>
          <div>
            <input value={password} onChange={handlePasswordChanged} type="password" />
          </div>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
        <div className={classes.feedback}>
          {hasLoginFailed && (
            <div className={`${classes.alert} ${classes.alertError}`}>
              Las credenciales no son válidas
            </div>
          )}
          {hasLoginSucceeded && (
            <div className={`${classes.alert} ${classes.alertSuccess}`}>
              ¡Bienvenido a Latte and Books!
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
