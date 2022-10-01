import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, addToCart, removeProduct} = useContext(CartContext)
    console.log('cart', cart);


  return (
    <div className='card'>
        <h1>  Cart  </h1>
        {cart.length === 0 ? ( <>
        <h2>  No hay productos en tu carrito </h2> <Link to="/"> Volver</Link> </> ) : ""}
      
                {cart.length > 0 ?   cart.map((item) => (
                    <div key={item.id}> 
                            <h2>  {item.tittle}  </h2>
                            <h2> Cantidad: {item.cantidad}  </h2>
                            <br/>
                            <img src={item.image} alt={item.tittle} class="card-img-topp"></img>
                            <h2> price:${item.price} </h2>
                            <h2> Precio Total:${item.price * item.cantidad} </h2>
                            <button onClick={() => removeProduct(item.id)}> Remove Item</button>
                            <br/>          
                 </div>)): ""}
                            
    </div>
  )
}

export default Cart