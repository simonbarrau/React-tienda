import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import ima from '../../img/car1.png';
import { Link } from "react-router-dom";
import './CartWidget.css';



const CartWidget = (condition) => {
  const {totalItems} = useContext(CartContext)

  return (
    <Link to={'/cart'} style={{textDecoration:"none"}}> 
       <div>
        {
          <span >
        <img className='carro' height="40px" src={ima} alt="surf" ></img>
        <div className="total-item">
          
            {totalItems() > 0 ? totalItems() : "" }
            </div>
          </span>
        }
      </div>
     
   </Link>
)};

export default CartWidget;