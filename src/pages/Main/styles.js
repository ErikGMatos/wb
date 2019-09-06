import styled from 'styled-components';
import logoWebMotors from '../../assets/images/webmotors.svg';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img.attrs({
  src: logoWebMotors,
})`
  margin: 1rem;
`;
