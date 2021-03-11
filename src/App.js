import './App.css';
import Header from "./components/Head"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import ShoppingCartScreen from "./screens/shoppingCartScreen";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"


function App() {
  return (
    <>
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/drink/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={ShoppingCartScreen} />
          
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
