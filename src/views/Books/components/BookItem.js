import {generatePath} from 'react-router';
import {Link} from 'react-router-dom';
import Card from 'components/ui/Card';
import {BOOK_DETAIL} from 'config/router/paths';

function BookItem({book}) {
  return (
    <Card
      title={<Link to={generatePath(BOOK_DETAIL, {id: book.id})}>{book.title}</Link>}
      image={book.image}
      description={book.description}
    />
  );
}

export default BookItem;
