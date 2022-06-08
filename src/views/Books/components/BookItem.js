import React from 'react';
import Card from 'components/ui/Card';

function BookItem({book}) {
  return <Card title={book.title} image={book.image} description={book.description} />;
}

export default BookItem;
