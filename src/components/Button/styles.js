import styled from 'styled-components';

export const ButtonSellCar = styled.button`
  border: none;
  background: none;
  padding: 1rem 3rem;
  border: 2px solid #e9b10c;
  border-radius: 3px;
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
