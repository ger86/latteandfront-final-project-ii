import {Navigate, Outlet} from 'react-router-dom';
import {LOGIN} from 'config/router/paths';
import {useAuthContext} from 'contexts/authContext';
import Layout from './Layout';

export default function PrivateRoute() {
  const {isLoggedIn} = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
