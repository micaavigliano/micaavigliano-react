import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordRequirements from "./PasswordRequirements";
import { requirementsArray, testRequirement } from "../helpers/requirements";
import { Section, Form, InputContainer, Input, Button } from "./index.styled";

const PasswordComponent = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [password, setPassword] = useState<string | null>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Section>
      <h1>Password Component</h1>
      <Form onSubmit={handleSubmit} id="form-id">
        <InputContainer>
          <Input
            type={seePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
            autoComplete="off"
            aria-label="type your password"
          />
          <Button
            data-testid="button-icon"
            onClick={() => {
              setSeePassword(!seePassword);
            }}
          >
            {seePassword ? <VisibilityOff /> : <Visibility />}
          </Button>
        </InputContainer>
        <PasswordRequirements
          requirement={requirementsArray}
          password={password!}
        />
      </Form>
    </Section>
  );
};

export default PasswordComponent;
