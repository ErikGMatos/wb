import React, { memo } from 'react';

import { Container, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
export default memo(Header);
