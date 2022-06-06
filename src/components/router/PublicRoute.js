import {Navigate, Outlet} from 'react-router-dom';
import {BOOKS} from 'config/router/paths';
import {useAuthContext} from 'contexts/authContext';

export default function PublicRoute() {
  const {isLoggedIn} = useAuthContext();

  if (isLoggedIn) {
    return <Navigate to={BOOKS} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
