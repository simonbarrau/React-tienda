import { useState } from "react"

const ItemCount = () => {
const [initialState, setInitialState] = useState(0);

const suma= () => {
    setInitialState(initialState + 1);
};

const resta= () => {
    setInitialState(initialState - 1);
};

  return (
    <div>
        Contador
        <h3>{initialState}</h3>
        <hr/>
        <button onClick={resta}> - </button>
        <button onClick={suma}> + </button>

    </div>
  )
}

export default ItemCount