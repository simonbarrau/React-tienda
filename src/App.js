import './App.css';
import NavBar from './NavBar/NavBar';
//import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListsContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import ItemDetails from './Components/itemDetail/ItemDetails';
import { CartContext } from './Context/CartContext/CartContext';

function App() {
  const stock= 5
  return (
    <CartContext.Provider value={[]}>

    <BrowserRouter>
    <div className="App">
    <NavBar />
    {/* <ItemCount stock={stock}/> */}
    </div>
    <Routes>

    <Route path='/' element={<ItemListContainer />}/>
    <Route path='category/:id' element={<ItemListContainer />}/>
    <Route path='detail/:id' element={<ItemDetailContainer />}/>


    </Routes>
    </BrowserRouter>
    </CartContext.Provider >

  );
}

export default App;
