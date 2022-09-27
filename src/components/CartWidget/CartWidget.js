import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import ima from '../../img/car1.png';
import { Link } from "react-router-dom";
import './CartWidget.css';



const CartWidget = (item) => {
  const {totalItems} = useContext(CartContext)

  return (
    <Link to={'/cart'} style={{textDecoration:"none"}}> 
       <div>
        {
          <span className="total-item">
        <img className='carro' height="40px" src={ima} alt="surf" ></img>
            {totalItems() > 0 ? totalItems() : "0"}
          </span>
        }
      </div>
     
   </Link>
)};

export default CartWidget;