import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {
    const {cart, addToCart, removeProduct} = useContext(CartContext)
    console.log('cart', cart);


  return (
    <div>
        <h1>  Cart  </h1>
            {cart.map((item) => (
                    <div key={item.id}> 
                            <h2>  {item.tittle}  </h2>
                            <h2> Cantidad: {item.cantidad}  </h2>
                            <br/>
                            <img src={item.image} alt={item.tittle} class="card-img-topp"></img>
                            <h2> price:${item.price} </h2>
                            <h2> Precio Total:${item.price * item.cantidad} </h2>
                            <button onClick={() => removeProduct(item.id)}> Remove Item</button>
                            <br/>
                            

                         



                 </div>

            ))}

    </div>
  )
}

export default Cart