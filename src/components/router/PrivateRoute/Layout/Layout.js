import React from 'react';
import Container from 'components/ui/Container';
import Header from './Header';

export default function MainLayout({children}) {
  return (
    <main>
      <Header />
      <Container>{children}</Container>
    </main>
  );
}
