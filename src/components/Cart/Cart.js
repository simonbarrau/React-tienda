import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { collection, getFirestore, addDoc } from "firebase/firestore"
import moment from "moment/moment"

const Cart = () => {
    const {cart,  removeProduct} = useContext(CartContext)
    console.log('cart', cart);

    const createOrder= () => {
      const db= getFirestore()
      const order= {
        buyer:{
          name:'mateo',
          phone:'67210247',
          email:'mateo@gmail.com'
        },
        items:cart,
        total: cart.reduce((valorPasado, valorActual) =>valorPasado + (valorActual.price * valorActual.cantidad) ,0),
        date: moment().format(),
      }

      const query = collection(db, 'orders')
      addDoc(query, order)
      .then(({id}) => {
        console.log({id});
        alert('felicidades por tu compra');
      })
      .catch(() => alert('tu compra no fue completada'))
    }


  return (
    <div className='card'>
        <h1>  Cart  </h1>
        {cart.length === 0 ? ( <>
        <h2>  No hay productos en tu carrito </h2> <Link to="/"> Volver</Link> </> ) : cart.map((item) => (
                    <div key={item.id}> 
                            <h2>  {item.tittle}  </h2>
                            <h2> Cantidad: {item.cantidad}  </h2>
                            <br/>
                            <img src={item.image} alt={item.tittle} class="card-img-topp"></img>
                            <h2> price:${item.price} </h2>
                            <h2> Precio Total:${item.price * item.cantidad} </h2>
                            <button onClick={() => removeProduct(item.id)}>Remove Item</button>
                            <br/> 
                 </div>))}

                 <div style={{margin:'20px'}}>
                  <button onClick={createOrder}> Create Order</button>
                 </div>
      
                 
                            
    </div>
  )
}

export default Cart