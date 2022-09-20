//import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({initialState, setInitialState}) => {
const stock= 8
//const [initialState, setInitialState] = useState(0);

const suma= () => {       setInitialState(initialState + 1) 

   
};

const resta= () => { initialState >= 1 ? setInitialState(initialState -1) : alert("Error 404")
};



  return (
    <div >
      
        Stock:{stock}
        <hr/>
    
        <div className="stock"> 
        <button onClick={resta}> Delete from cart </button>
        <button onClick={suma}> Add to cart </button>

        
        </div>



    </div>
  )
}

export default ItemCount