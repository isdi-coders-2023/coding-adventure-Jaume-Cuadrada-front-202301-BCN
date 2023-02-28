import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          placeholder="Introduce your email"
          required
          autoComplete="off"
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          placeholder="Introduce your password"
          required
        />
      </label>

      <label htmlFor="image">
        Image
        <input
          id="image"
          type="file"
          placeholder="Introduce an image"
          required
        />
      </label>

      <Button text="Sign up" />
    </FormStyled>
  );
};

export default Form;
