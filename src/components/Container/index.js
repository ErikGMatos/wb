import styled from 'styled-components';

const Container = styled.main`
  max-width: 933px;
  height: 312px;
  background: #fff;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1);
  padding: 2rem 5rem;
  margin: 0 auto;

  label {
    color: #7f7f90;
  }

  @media only screen and (max-width: 601px) {
    padding: 2rem 1rem;
    height: auto ;
  }
`;
export default Container;
