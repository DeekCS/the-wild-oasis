import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #bbb;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  );
}

export default App;
