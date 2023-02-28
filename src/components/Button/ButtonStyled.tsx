import styled from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  font-family: "Saira Stencil One";
  font-weight: 400px;
  font-size: 20px;
  border-radius: 10px;
  background-color: var(--main-color);
  color: var(--background-color);
  width: 100%;
  height: 40px;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 575px) {
    width: 320px;
    height: 57px;
  }
`;

export default ButtonStyled;
