import { render } from "@testing-library/react";
import PasswordRequirements from "../PasswordRequirements";
import { requirementsArray, testRequirement } from "../../helpers/requirements";
import exp from "constants";

describe("Form", () => {
  it("renders the passwordRequirement component successfully", () => {
    const { getByTestId } = render(
      <PasswordRequirements
        requirement={requirementsArray}
        password="Mica123!"
      />
    );

    const container = getByTestId("requirement-id");

    expect(container).toBeInTheDocument();
  });

  it("renders the multiple requirements successfully", () => {
    const password = "???????!";
    const { queryAllByTestId } = render(
      <PasswordRequirements
        requirement={requirementsArray}
        password={password}
      />
    );

    const container = queryAllByTestId("text-container");

    container.forEach((element) => {
      expect(element).toBeInTheDocument();
    });

    requirementsArray.forEach((regex) => {
      if (password.match(regex.matchRegex)) {
        const checkCircleIcon = queryAllByTestId("CancelIcon");
        checkCircleIcon.forEach((check) => {
          expect(check).toBeInTheDocument();
        });
      } else {
        const cancelIcon = queryAllByTestId("CheckCircleIcon");
        cancelIcon.forEach((cancel) => {
          expect(cancel).toBeInTheDocument();
        });
      }
    });
  });

  it("renders a single requirement successfully", () => {
    const { getByTestId } = render(
      <PasswordRequirements
        requirement={testRequirement}
        password="Mica1234!"
      />
    );
    const container = getByTestId("text-container");
    expect(container).toBeInTheDocument();
  });

  it("renders a hidden message if a requirement is not address. This hidden message is only acknowledge for those assistive techonologies' users", () => {
    const password = "Mica!";
    const { getByTestId } = render(
      <PasswordRequirements requirement={testRequirement} password={password} />
    );

    if (!password.match(testRequirement.matchRegex)) {
      const message = getByTestId("hidden-msg");
      expect(message).toBeInTheDocument();
      expect(message).toHaveAttribute("aria-live");
      expect(message).toHaveTextContent(testRequirement.error);
    }
  });
});
