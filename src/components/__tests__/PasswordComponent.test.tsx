import { render, fireEvent } from "@testing-library/react";
import PasswordComponent from "../PasswordComponent";

describe("Form", () => {
  it("it fires preventDefault on the form", () => {
    const { container } = render(<PasswordComponent />);
    const form = container.querySelector("form");

    const submitEvent = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });
    fireEvent(form!, submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
  });

  it("it updates the input value successfully on input change", () => {
    const { getByLabelText } = render(<PasswordComponent />);
    const inputElement = getByLabelText("type your password");

    fireEvent.change(inputElement, { target: { value: "newPassword123$" } });
  });

  it("it updates the password state successfully on input change", () => {
    const { getByTestId, getByPlaceholderText } = render(<PasswordComponent />);

    const passwordInput = getByPlaceholderText(
      "Type your password"
    ) as HTMLInputElement;
    const toggleButton = getByTestId("button-icon");

    expect(passwordInput.type).toBe("password");
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("text");
  });
});
