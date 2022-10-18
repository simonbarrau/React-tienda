
import './ItemDetails.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const ItemDetails = ({product}) => {
  const [initialState, setInitialState] = useState(0);
  const{addToCart}=useContext(CartContext)
 
  
  function onAdd ( product) {
    addToCart(product, initialState)
     }

     
     const handleClick=() => {
    console.log(initialState);
  }



  const resetCount= () => {
    setInitialState(0)
  }



  return ( <> 
    <div className="destination"> 

    <div className='carsh' >

    <div class="cardd" >
      <h2 className="title">  {product.tittle}  </h2>

<img src={product.image} alt={product.tittle} class="card-img-topp"></img>

<p className="descripciones">  {product.description}  </p>
      <div class="cart" >
<p className='leter'>  Category: {product.category} </p>
<p className='leter'>  Price:{product.price} </p>

 </div> 
<h3 onClick={resetCount} className="counter">{initialState}</h3>
 {initialState < 8 &&  <ItemCount initialState={initialState}   setInitialState={setInitialState} price={product.price}/>
 }
 <button onClick={() => onAdd(product)}> Add to cart</button>
 <br/> 


 <Link to={'/'}> 
 <button > Keep on Shoping!</button>
 </Link > 

<Link to={'/cart'}> 
<button onClick={handleClick}> Go To Buy</button>
</Link> 


 </div>
 </div>
<footer>   App Created by       <strong>Simon Barrau </strong> 
 
    </footer> 
    </div> 

    </> 

  );
};

export default ItemDetails