import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Products from './components/pages/Products/Products';
import Cart from './components/pages/Cart/Cart';
import EachProduct from './components/pages/ProductDescription/EachProduct';
import * as shoppingActions from './redux/shopping/shopping-actions';

function App() {
  const dispatch = useDispatch();

  // Using useEffect here will at App component is not re-render on every route change

  // Fetching Data from from api and storing in redux store
  useEffect(async () => {
    const res = await fetch('https://fakestoreapi.com/products/');
    const products = await res.json();

    dispatch(shoppingActions.loadProducts(products));
    console.log('UseEffect ran');
  }, []);

  return (

    <>

      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product" component={EachProduct} />
          </Switch>
        </div>

      </Router>
    </>

  );
}

export default App;
