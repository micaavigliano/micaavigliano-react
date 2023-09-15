import { GlobalStyles, Container } from "./globalStyles";
import PasswordComponent from "./components/PasswordComponent";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <PasswordComponent />
      </Container>
    </>
  );
}

export default App;
