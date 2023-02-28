import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button Component", () => {
  describe("When rendered with 'Sign up' text content", () => {
    test("Then it should show a button with 'Sign up' text on it", () => {
      const expectedContent = "Sign up";

      render(<Button text={expectedContent} />);
      const button = screen.getByRole("button", { name: expectedContent });

      expect(button).toBeInTheDocument();
    });
  });
});
