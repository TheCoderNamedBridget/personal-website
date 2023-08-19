import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Products from './Products';


function App() {
  const products_json = require('./assets/ProductImages/SampleProduct.json');

  return (
    <div className="container">
      <NavBar products_json={products_json}/>
    </div>
  );
}

export default App;
