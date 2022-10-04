import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListsContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {CartProvider} from './Context/CartProvider';
import Loader from './components/Loader/Loader';
import Cart from './components/Cart/Cart';

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


