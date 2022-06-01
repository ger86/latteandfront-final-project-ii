import classes from './Login.module.css';

export default function LoginView({form, onInputChanged, onSubmit, requestStatus}) {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={onSubmit}>
        <div className={classes.formControl}>
          <div>
            <label className={classes.label}>Email</label>
          </div>
          <div>
            <input value={form.email} onChange={onInputChanged} name="email" />
          </div>
        </div>
        <div className={classes.formControl}>
          <div>
            <label className={classes.label}>Contraseña</label>
          </div>
          <div>
            <input
              value={form.password}
              onChange={onInputChanged}
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
