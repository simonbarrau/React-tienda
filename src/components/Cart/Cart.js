import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
    const {cart,  removeProduct} = useContext(CartContext)
    console.log('cart', cart);

    
    

  return (<>
      <div> 

      <h1 className="ttitle">  CART  </h1>
    <div className='carsh'>

        {cart.length === 0 ? ( <>
        <h2 className="noProduct">  Your cart is empty </h2> <Link to="/"> Go back</Link>  </> ) : cart.map((item ) => (
                    <div key={item.id}>
                            <h2 className="title">  {item.tittle}  </h2>
                            <h2 className="title"> Quantity:{item.cantidad}  </h2>
                            <br/>
                            <img src={item.image} alt={item.tittle} class="card-img-topp"></img>
                            <h2 className="title"> price:${item.price} </h2>

                            <h2 className="title"> Total price:${item.price * item.cantidad + ((item.price * item.cantidad) * 0.21)}</h2>
                            
                 <div style={{margin:'20px', display:'grid', gridTemplateColumns:'50% 50% '}}>
                           
                     <button className="boton" onClick={() => removeProduct(item.id)}>Remove Item</button>
                            <Link to={"/form"}> 
                            <button className="boton" > Finish Buying</button>
                            </Link> 

                            <br/> 
                 </div>
                 </div>))                  
      }

      
                 
                            
    </div>
    </div>
   
    </>
  )
}

export default Cart