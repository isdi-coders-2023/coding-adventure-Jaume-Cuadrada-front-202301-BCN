import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled className="form">
      <label htmlFor="email">
        <span className="form__titles">Email</span>
        <input
          className="form__input"
          id="email"
          type="email"
          placeholder="Introduce your email"
          required
          autoComplete="off"
        />
        <span className="form__feedback form__feedback--visible">
          Email is required
        </span>
      </label>

      <label htmlFor="password">
        <span className="form__titles">Password</span>
        <input
          className="form__input"
          id="password"
          type="password"
          placeholder="Introduce your password"
          required
        />
        <span className="form__feedback form__feedback--visible">
          Password is required
        </span>
      </label>

      <label htmlFor="image">
        <span className="form-titles">Image</span>
        <input
          className="form__input"
          id="image"
          type="file"
          placeholder="Introduce an image"
          required
        />
        <span className="form__feedback form__feedback--visible">
          Upload an image is required
        </span>
      </label>

      <Button text="Sign up" />
    </FormStyled>
  );
};

export default Form;
