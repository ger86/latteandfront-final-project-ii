import {Link} from 'react-router-dom';
import Container from 'components/ui/Container';
import {BOOKS} from 'config/router/paths';
import Menu from './Menu';
import logo from './logo.png';
import {Header as StyledHeader, Logo} from './styledComponents';

export default function Header() {
  return (
    <Container>
      <StyledHeader>
        <Link to={BOOKS}>
          <Logo src={logo} alt="Librarify" />
        </Link>
        <Menu />
      </StyledHeader>
    </Container>
  );
}
