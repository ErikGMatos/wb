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
        margin-left: 0;
      }

      > div:nth-child(2) {
        flex: 0.25;
      }

      > div:nth-child(3) {
        flex: 0.25;
        margin-right: 0;
      }
    }
    &:nth-child(2) {
      > div:nth-child(1) {
        flex: 0.25;
        margin-left: 0;
      }

      > div:nth-child(2) {
        flex: 0.25;
      }

      > div:nth-child(3) {
        flex: 0.5;
        margin-right: 0;
      }
    }
  }
`;

export const GroupCheckbox = styled.div`
  margin: 1rem 0;
`;

export const AdvancedSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #f3123c;
    font-weight: bold;
    text-transform: capitalize;
  }

  svg {
    color: #f3123c;
    margin-left: -0.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const FilterClear = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: none;
  color: #999;
  margin-right: 4rem;
`;

export const SeeOffers = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: #f3123c;
  color: #fff;
  font-size: 1.6rem;
  padding: 15px 70px;
  border-radius: 3px;
  font-weight: bold;
  text-transform: uppercase;
`;
