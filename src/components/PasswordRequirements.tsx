import React from "react";
import { Cancel, CheckCircle } from "@mui/icons-material";
import {
  TextContainer,
  IconContainer,
  Typography,
  RequirementsContainer,
  HiddenMsg,
} from "./index.styled";

interface RequirementsProps {
  requirement: Requirement | Requirement[];
  password: string;
}

interface Requirement {
  id: number;
  text: string;
  matchRegex: RegExp;
  error: string;
}

const PasswordRequirements: React.FC<RequirementsProps> = ({
  requirement,
  password,
}) => {
  const isArray = Array.isArray(requirement);
  const uniqueReq = !isArray && password.match(requirement.matchRegex);

  return (
    <RequirementsContainer data-testid="requirement-id">
      {isArray ? (
        requirement.map((req: Requirement) => (
          <TextContainer
            key={req.id}
            role="status"
            data-testid="text-container"
          >
            <IconContainer
              data-testid="icon-container"
              color={password.match(req.matchRegex) ? "green" : "red"}
            >
              {password.match(req.matchRegex) ? <CheckCircle /> : <Cancel />}
            </IconContainer>
            <Typography color={password.match(req.matchRegex) ? "green" : ""}>
              {req.text}
            </Typography>
            {!password.match(req.matchRegex) && (
              <HiddenMsg aria-live="assertive" data-testid="hidden-msg">
                {req.error}
              </HiddenMsg>
            )}
          </TextContainer>
        ))
      ) : (
        <TextContainer data-testid="text-container">
          <div role="status">
            <IconContainer
              color={uniqueReq ? "green" : "red"}
              data-testid="icon-container"
            >
              {uniqueReq ? <CheckCircle /> : <Cancel />}
            </IconContainer>
            <>
              {!uniqueReq && (
                <HiddenMsg aria-live="assertive" data-testid="hidden-msg">
                  {requirement.error}
                </HiddenMsg>
              )}
            </>
            <Typography color={uniqueReq ? "green" : "black"}>
              {requirement.text}
            </Typography>
          </div>
        </TextContainer>
      )}
    </RequirementsContainer>
  );
};

export default PasswordRequirements;
