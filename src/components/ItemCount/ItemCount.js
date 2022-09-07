import { useState } from "react"

const ItemCount = (props) => {
const [initialState, setInitialState] = useState(0);

const suma= () => { initialState <= props.stock -1 ?     setInitialState(initialState + 1) : alert("Alcanzaste el maximo de stock")

   
};

const resta= () => { initialState >= 1 ? setInitialState(initialState -1) : alert("Error 404")
};

  return (
    <div>
      
        Stock:{props.stock}
        <h3> Tengo {initialState} items en mi carro</h3>
        <hr/>
        <button onClick={resta}> - </button>
        <button onClick={suma}> + </button>

    </div>
  )
}

export default ItemCount