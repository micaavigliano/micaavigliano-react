import { render, getByRole } from "@testing-library/react";
import PasswordRequirements from "../PasswordRequirements";
import { requirementsArray, testRequirement } from "../../helpers/requirements";

describe("Form", () => {
  it("it renders the passwordRequirement component successfully", () => {
    const { getByTestId } = render(
      <PasswordRequirements requirement={testRequirement} password="Mica123!" />
    );

    const container = getByTestId("requirement-id");

    expect(container).toBeInTheDocument();
  });

  it("it renders the icons successfully", () => {
    const uniqueReq = false;
    const { getByTestId } = render(
      <PasswordRequirements
        requirement={testRequirement}
        password="Mica1234!"
      />
    );

    const container = getByTestId("icon-container");

    expect(container).toBeInTheDocument();

    if (uniqueReq) {
      const checkCircleIcon = getByTestId("CancelIcon");
      expect(checkCircleIcon).toBeInTheDocument();
    } else {
      const cancelIcon = getByTestId("CheckCircleIcon");
      expect(cancelIcon).toBeInTheDocument();
    }
  });
});
