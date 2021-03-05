import './App.css';
import Header from "./components/Head"
import Footer from "./components/Footer"

import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          This is the Boozebros
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
