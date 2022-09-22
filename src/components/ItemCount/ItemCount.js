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
      
        
        <hr/>
    
        <div className="stock"> 
        <button onClick={resta}> - </button>
        <button onClick={suma}> + </button>

        
        </div>



    </div>
  )
}
export default ItemCount