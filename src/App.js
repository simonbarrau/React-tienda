import './App.css';
import NavBar from './Components/NavBar/NavBar';
//import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListsContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import {CartProvider} from './Context/CartProvider';
import Loader from './Components/Loader/Loader';
import CartWidget from './Components/CartWidget/CartWidget';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <CartProvider>
    
   
    <BrowserRouter>
    <Loader />

    <div className="App">
    <NavBar  />
    {/* <ItemCount stock={stock}/> */}
    </div>
    <Routes>

    <Route path='/' element={<ItemListContainer />}/>
    <Route path='category/:category' element={<ItemListContainer />}/>

    <Route path='detail/:id' element={<ItemDetailContainer />}/>
    <Route path='legends' element={<div>SURF LEGENDS</div>}/>
    <Route path='about-us' element={<div>Estoy en About</div>}/>
    <Route path='cart' element={<Cart />}/>




    </Routes>
    </BrowserRouter>
    
    </CartProvider >

  );
}

export default App;


