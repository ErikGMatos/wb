import styled from 'styled-components';

export const ButtonSellCar = styled.button`
  border: none;
  background: none;
  padding: 1rem 3rem;
  border: 0.2rem solid #e9b10c;
  border-radius: 0.3rem;
  color: #e9b10c;
  font-weight: bold;
  transition: background, color 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:first-letter {
    text-transform: capitalize;
  }

  &:hover {
    background: #e9b10c;
    color: #fff;
  }

  @media only screen and (max-width: 601px) {
    order: -1;
    align-self: flex-end;
    border-radius: 40px;
    padding: 0.6rem 1.6rem;
    font-size: 1.1rem;
    background: #e9b10c;
    color: #fff;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const SeeOffers = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: #f3123c;
  color: #fff;
  font-size: 1.6rem;
  padding: 1.5rem 7rem;
  border-radius: 0.3rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 0.8rem 1.2rem -0.8rem #f3123c;
  transition: background 0.15s ease-in-out;

  &:hover {
    background: #d50b30;
  }

  @media only screen and (max-width: 601px) {
    font-size: 1.3rem;
    padding: 1.5rem 3rem;
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

  @media only screen and (max-width: 601px) {
    font-size: 1.4rem;
    margin-right: 2rem;
  }
`;
