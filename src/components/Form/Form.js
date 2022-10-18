import './Form.css'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { collection, addDoc, getFirestore} from "firebase/firestore";
import moment from "moment/moment";
import swal from 'sweetalert';

const Form = () => {
    const {cart,clear} = useContext(CartContext);
  
    
    const db = getFirestore();
    
    
    const [ordering, setOrdering] = useState({
        buyer: {
            name: '',
            phone: '',
            email: ''
        },
        items: cart, 
        total: cart.reduce((valorPasado, valorActual) =>valorPasado + (valorActual.price * valorActual.cantidad) ,0),

        date: moment().format('DD/MM/YYYY, h:mm:ss a')
    })
        
    const createOrder= () => {
     
        const query = collection(db, 'orders')
        addDoc(query, ordering)
        .then(({id}) => {
          console.log({id});
          swal({
            title:`Your purchase has been done succesfully! HEY! Here is your id: ${id}`,
            icon: 'success',
            text:'Now, keep it your way!',
          
           buttons:'Great!'});
        })
        .catch(() => swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Try again later.',
          
        }))

            setTimeout(() => {
                setOrdering({
                    buyer: {
                        name: '',
                        phone: '',
                        email: ''
                    },
                })  
                clear();
            }, 1000);
    }
    
    const formChange = (e) => {
        setOrdering({
            ...ordering,
            buyer: {
                ...ordering.buyer,
                [e.target.name]: e.target.value,
            },
          
        });
    };


  return (
    <>
    
    <div className='bodyForm'>
    <h3 className='keepOn'>
        Keep on! You are one step closer to buy it and start a fresh new life! Go for it!
    </h3>

           
    <div className='form'>
         <form action="">
              <div className='input'>
                <label htmlFor="">Name</label>
                 <input className='form-input' name="name" type="text"  value={ordering.buyer.name} onChange={formChange}/>
                    </div>
                    <br/> 
                    <div className='input'>
                        <label htmlFor="">Phone</label>
                        <input className='form-input'  name="phone" type="number"value={ordering.buyerphone}onChange={formChange}
                        />
                    </div>
                    <br/>

                    <div className='input'>
                        <label htmlFor="">Email</label>
                        <input className='form-input' name="email" type="email" value={ordering.buyer.email} onChange={formChange} />
                    </div>
                    <br/>

                    <div className='orderButon'>
                        <button onClick={createOrder} type='button'>Send Order</button>
                    </div>
      
                </form>
        </div>
        <div className='gifs'>
            <img src="https://media.giphy.com/media/ckAsLajQY6HxYHYRDX/giphy-downsized-large.gif" alt="surf gif" />
            <img src="https://media.giphy.com/media/5kF1QQlD6tKobjO5lw/giphy.gif" alt=" surf gif" />
        </div>
        </div>

    </>
  )
}

export default Form;