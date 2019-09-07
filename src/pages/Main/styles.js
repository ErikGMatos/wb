import styled from 'styled-components';

import Place from '../../assets/icons/icon-location.svg';

export const Form = styled.form``;

export const IconPlace = styled.img.attrs({
  src: Place,
})`
  position: absolute;
  top: 50%;
  left: 0.4rem;
  transform: translateY(-50%);
`;

export const Header = styled.header`
  max-width: 933px;
  margin: 0 auto;
`;

export const GroupSelect = styled.div`
  position: relative;
`;

export const ContainerSelect = styled.div`
  > div {
    display: flex;
    > div {
      margin: 1rem;
    }
    &:nth-child(1) {
      > div:nth-child(1) {
        display: flex;
        flex: 0.5;
        margin-left: 0;

        > div:nth-child(1) {
          flex: 0.7;
          [class$='control'] {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            padding-left: 6rem;
          }

          label {
            left: 3rem;
          }
        }

        > div:nth-child(2) {
          flex: 0.3;
          [class$='control'] {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left-width: 0;
          }
        }
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

  label {
    margin-right: 3em;
  }
`;

export const AdvancedSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #f3123c;
    font-size: 1.6rem;
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
  font-size: 1.6rem;
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
  box-shadow: 0 8px 12px -8px #f3123c;
  transition: background 0.15s ease-in-out;

  &:hover {
    background: #d50b30;
  }
`;

export const ChooseVehicle = styled.div`
  max-width: 933px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChooseType = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    color: #b5b5bf;
  }
  > div:nth-child(${props => props.active + 1}) {
    border-bottom: 3px solid #f3123c;

    svg {
      color: #f3123c;
    }

    h1 {
      color: #f3123c;
      small {
        color: #b5b5bf;
      }
    }
  }
`;

export const Veihcles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 1rem 0;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: border-bottom 0.2s ease-in-out;

  svg {
    margin: 0 1rem 0 2rem;
  }
`;

export const TitleVehicles = styled.h1`
  font-size: 2.8rem;
  font-weight: 100;
  text-transform: uppercase;
  color: #b5b5bf;

  small {
    display: block;
    font-size: 1.2rem;
  }
`;

export const ButtonSellCar = styled.button`
  border: none;
  background: none;
  padding: 1rem 3rem;
  border: 2px solid #e9b10c;
  border-radius: 3px;
  color: #e9b10c;
  font-weight: bold;
  &:first-letter {
    text-transform: capitalize;
  }
`;
