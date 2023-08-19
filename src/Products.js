import React from 'react';
import './Table.css';
import './Products.css';
import ProductCard from './ProductCard';
import akamaipic from './assets/Images/Employment/Akamai.jpeg';

function Products(props) {

  const file = require('./assets/ProductImages/SampleProduct.json');
  
  

  var name = props.title.replace("/", "")

  console.log("HERE In PRODUCTS " + name)
  return (
    <div>
      <h1 id="title">Spend Less Money On Candles</h1>
      <table className="table">
        <div>
        {file.find((product) => product.name.match(name)).content.map((attribute) => (
          <ProductCard
          title={props.title}
          pic={akamaipic}
          cost={attribute.price}
          link={attribute.link}
          description={attribute.description}
        />
        ))}
        

        </div>
      
      </table>
    </div>
  );
}

export default Products;
