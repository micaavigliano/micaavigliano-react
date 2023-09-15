import styled from "styled-components";

export const Section = styled.section`
  padding: 1%;
  text-align: center;
  border: 1px solid purple;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 4%;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 2.5rem;
  margin: 10% 3% 10% 0;
  border: 1px solid black
`

export const Input = styled.input`
  border: none;
  width: 80%;
  height: 100%;
  padding: 4px;
  &::lightgrey {
    color: pink;
  }
`

export const Button = styled.button`
  background-color: transparent;
  width: 20%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RequirementsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4%;
  width: 100%;
`

export const IconContainer = styled.span`
  color: ${(props) => props.color}
`

export const Typography = styled.p`
  line-height: 1.5rem;
  color: ${(props) => props.color}
`

export const HiddenMsg = styled.p`
  overflow: hidden;
  display: none
`;