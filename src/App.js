import AuthContextProvider, {useAuthContext} from 'contexts/authContext';
import Login from 'views/Login/Login';

/**
 * This component is only for testing the auth context is working.
 * It consummes the auth context and show its value.
 * It will be removed in the next commit
 */
function Foo() {
  const {authTokens, isLoggedIn, logout} = useAuthContext();
  return (
    <div>
      <ul>
        <li>JWT: {authTokens ? authTokens.token : 'No JWT token'}</li>
        <li>JWT: {authTokens ? authTokens.refresh_token : 'No refresh token'}</li>
        <li>Is logged in: {isLoggedIn ? 'Yes' : 'No'}</li>
      </ul>
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </div>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <div>
        <h1>💛 Let's get the party started</h1>
        <Login />
        <Foo />
      </div>
    </AuthContextProvider>
  );
}
