import './App.css';
import NavBar from './NavBar/NavBar';
//import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListsContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { CartContext } from './Context/CartContext';

function App() {
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


