import styled from "styled-components";

const FormStyled = styled.form`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  padding: 17px;
  font-weight: 700;
  gap: 48px;

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    padding: 10px;
    font-size: 19px;
    border: none;
  }
`;

export default FormStyled;
