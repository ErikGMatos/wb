import styled from 'styled-components';

import logoWebMotors from '../../assets/images/webmotors.svg';

export const Container = styled.header`
  max-width: 933px;
  margin: 0 auto;
`;

export const Logo = styled.img.attrs({
  src: logoWebMotors,
})`
  margin: 1rem;
`;
