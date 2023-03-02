import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a form component", () => {
  describe("When rendered with 'Email', 'Password' and 'Image' texts on it", () => {
    test("Then it should show 'Email' texts on screen", () => {
      const expectedContent = "Email";

      render(<Form />);

      const result = screen.getByText(expectedContent);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show 'Password' texts on screen", () => {
      const expectedContent = "Password";

      render(<Form />);

      const result = screen.getByText(expectedContent);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show 'Image' texts on screen", () => {
      const expectedContent = "Image";

      render(<Form />);

      const result = screen.getByText(expectedContent);

      expect(result).toBeInTheDocument();
    });
  });
  describe("When rendered with a button component", () => {
    test("Then it should show a button with 'Sign up' text on it", () => {
      const expectedContent = "Sign up";

      render(<Form />);
      const button = screen.getByRole("button", { name: expectedContent });

      expect(button).toBeInTheDocument();
    });
  });
});
