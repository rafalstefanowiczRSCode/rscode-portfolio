import { ThemeProvider } from "styled-components";

import { Container } from "./components/styled/Container.styled";
import theme from "./theme/theme";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
