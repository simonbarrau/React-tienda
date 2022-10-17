import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { collection, getFirestore, addDoc } from "firebase/firestore"
import moment from "moment/moment"
import './Cart.css'
import swal from 'sweetalert'

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
        swal({
          title:`Felicidades por tu compra, tu id de compra es: ${id}`,
          icon: 'success',
          text:'Ahora, hazlo a tu manera!',
        
         buttons:'Aceptar'});
      })
      .catch(() => swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal!',
        
      }))
    }


  return (<>
      <div className="destination"> 

      <h1 className="ttitle">  Carrito de compras  </h1>
    <div className='carsh'>

        {cart.length === 0 ? ( <>
        <h2 className="noProduct">  No hay productos en tu carrito </h2> <Link to="/"> Volver</Link>  </> ) : cart.map((item ) => (
                    <div key={item.id}>
                            <h2 className="title">  {item.tittle}  </h2>
                            <h2 className="title"> Cantidad: {item.cantidad}  </h2>
                            <br/>
                            <img src={item.image} alt={item.tittle} class="card"></img>
                            <h2 className="title"> price:${item.price} </h2>
                            <h2 className="title"> Precio Total:${item.price * item.cantidad} </h2>
                 <div style={{margin:'20px', display:'grid', gridTemplateColumns:'333px 333px 333px'}}>
                            <button className="title" onClick={() => removeProduct(item.id)}>Remove Item</button>
                            <br/> 
                  <button className="title" onClick={createOrder}> Create Order</button>
                 </div>
                 </div>))                  
      }

      
                 
                            
    </div>
    <footer>   App Created by       <strong>Simon Barrau </strong> 
 
 </footer> 
    </div>
    </>
  )
}

export default Cart