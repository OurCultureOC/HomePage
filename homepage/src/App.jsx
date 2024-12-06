import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import First from "./pages/First";
import Second from "./pages/Second";

function App() {
  return (
    <Maindiv>
      <Header />
      <First />
      <Second />
    </Maindiv>
  );
}

export default App;

const Maindiv = styled.div`
  font-family: 'jua';
`
