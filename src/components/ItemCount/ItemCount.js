import { useState } from "react";
import "./ItemCount.css";


const ItemCount = (props) => {
const [initialState, setInitialState] = useState(0);

const suma= () => { initialState <= props.stock -1 ?     setInitialState(initialState + 1) : alert("Alcanzaste el maximo de stock")

   
};

const resta= () => { initialState >= 1 ? setInitialState(initialState -1) : alert("Error 404")
};



  return (
    <div >
      
        Stock:{props.stock}
        <hr/>
        <h3>  {initialState} </h3>
        <div className="stock"> 
        <button onClick={resta}> Delete from cart </button>
        <button onClick={suma}> Add to cart </button>

        
        </div>



    </div>
  )
}

export default ItemCount