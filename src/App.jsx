import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/pages/Products/Products';
import Cart from './components/pages/Cart/Cart';
import EachProduct from './components/pages/ProductDescription/EachProduct';

function App() {
  return (
    <>

      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:id" component={EachProduct} />
          </Switch>
        </div>

      </Router>
    </>

  );
}

export default App;
