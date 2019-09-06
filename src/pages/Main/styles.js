import styled from 'styled-components';
import logoWebMotors from '../../assets/images/webmotors.svg';

export const Form = styled.form``;

export const Logo = styled.img.attrs({
  src: logoWebMotors,
})`
  margin: 1rem;
`;

export const Header = styled.header`
  max-width: 933px;
  margin: 0 auto;
`;

export const ContainerSelect = styled.div`
  > div {
    display: flex;
    > div {
      margin: 1rem;
    }
    &:nth-child(1) {
      > div:nth-child(1) {
        flex: 0.5;
      }

      > div:nth-child(2) {
        flex: 0.25;
      }

      > div:nth-child(3) {
        flex: 0.25;
      }
    }
    &:nth-child(2) {
      > div:nth-child(1) {
        flex: 0.25;
      }

      > div:nth-child(2) {
        flex: 0.25;
      }

      > div:nth-child(3) {
        flex: 0.5;
      }
    }
  }
`;

export const GroupSelect = styled.div``;
