import { useRef, useState } from "react";
import { FormDataStructure } from "../../types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const form = useRef(null);
  const formInitialData: FormDataStructure = {
    email: "",
    password: "",
    image: "",
  };
  const [formData, setFormData] = useState(formInitialData);

  const isAllFieldsFilled =
    formData.email !== "" && formData.password !== "" && formData.image !== "";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files![0].name
          : event.target.value,
    });
  };

  return (
    <FormStyled className="form" ref={form}>
      <label htmlFor="email">
        Email
        <input
          className="form__input"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Introduce your email"
          required
          autoComplete="off"
          onChange={handleInputChange}
        />
        <span className="form__feedback form__feedback--visible">
          Email is required
        </span>
      </label>

      <label htmlFor="password">
        Password
        <input
          className="form__input"
          id="password"
          type="password"
          name="password"
          placeholder="Introduce your password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <span className="form__feedback form__feedback--visible">
          Password is required
        </span>
      </label>

      <label htmlFor="image">
        Image
        <input
          className="form__input"
          id="image"
          name="image"
          type="file"
          placeholder="Introduce an image"
          required
          onChange={handleInputChange}
        />
        <span className="form__feedback form__feedback--visible">
          Upload an image is required
        </span>
      </label>

      <Button disabled={!isAllFieldsFilled} text="Sign up" />
    </FormStyled>
  );
};

export default Form;
