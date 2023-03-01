import styled from "styled-components";

const FormStyled = styled.form`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  padding: 17px;
  font-weight: 700;
  gap: 48px;

  @media (min-width: 575px) {
    padding: 50px;
  }

  .form {
    &__input {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      padding: 10px;
      margin: 8px 0 8px 0;
      font-size: 19px;
      border: none;
    }
    &__feedback {
      color: var(--warning-color);
      opacity: 0;
      &--visible {
        opacity: 1;
      }
    }
  }
`;

export default FormStyled;
