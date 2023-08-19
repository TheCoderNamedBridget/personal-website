import React from 'react';
import './NavBar.css';
import Products from './Products';

const NavBar = (props) => {
  var path = window.location.pathname

  function blobify(name) {
    return name.split(" ").join("").replace("/", "").toLowerCase()
  }

  var readable_path = blobify(path)

  console.log("HERE" + path + " there " + readable_path)

  var str = "/Yellow Sweater"
  var new_str = str.replace(/ /g,"_").replace("/", "").toLowerCase()
  console.log("TESTING" + new_str)

  let hash = new Map()

  function fill_hash() {
    props.products_json.map((product) => {
      console.log("IN Fill " + product.name)
      hash.set(product.name, product.name)
      console.log("FILL " + JSON.stringify(hash))
    })
  }



  fill_hash()
  console.log("OVER HERE " +JSON.stringify(hash) + " " +Object.keys(hash))
  return (
    <>
    <ul className="sidebar">
        {props.products_json.map((product) => (
        <>
          <li><a href={product.name}>{product.name}</a></li>
        </>
        ))}
      </ul>
      <div id={path}/>
        <Products title={path}/>
    </>
      
  );
}

export default NavBar;


