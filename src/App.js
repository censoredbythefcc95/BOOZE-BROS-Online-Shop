import './App.css';
import Header from "./components/Head"
import Footer from "./components/Footer"

import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          This is the Boozebros shop.
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
