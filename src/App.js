import './App.css';
import Header from "./components/Head"
import Footer from "./components/Footer"

import { Container } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Header />
        <Container>
          Testing Container Component.
        </Container>
      <Footer />
    </div>
  );
}

export default App;
