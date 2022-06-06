import {BOOKS, CATEGORIES, LOGOUT, BOOK_ADD} from 'config/router/paths';
import {Navigation, StyledNavLink} from './styledComponents';

function Menu() {
  return (
    <Navigation>
      <ul>
        <li>
          <StyledNavLink to={BOOKS}>Libros</StyledNavLink>
          <StyledNavLink to={CATEGORIES}>Categorías</StyledNavLink>
          <StyledNavLink to={BOOK_ADD}>Añadir libro</StyledNavLink>
          <StyledNavLink to={LOGOUT}>Cerrar sesión</StyledNavLink>
        </li>
      </ul>
    </Navigation>
  );
}

export default Menu;
