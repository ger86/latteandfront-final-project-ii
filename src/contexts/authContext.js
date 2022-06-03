import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const AUTH_TOKENS_KEY = 'LATTE_AND_FRONT_AUTH_TOKENS_FINAL_PROJECT';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const authTokensInLocalStorage = window.localStorage.getItem(AUTH_TOKENS_KEY);
  const [authTokens, setAuthTokens] = useState(
    authTokensInLocalStorage === null ? null : JSON.parse(authTokensInLocalStorage)
  );

  const login = useCallback(function (authTokens) {
    window.localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(authTokens));
    setAuthTokens(authTokens);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(AUTH_TOKENS_KEY);
    setAuthTokens(null);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      authTokens,
      isLoggedIn: authTokens !== null
    }),
    [authTokens, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
