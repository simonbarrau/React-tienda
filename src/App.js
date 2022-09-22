import './App.css';
import NavBar from './NavBar/NavBar';
//import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListsContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import {CartProvider} from './Context/CartProvider';

function App() {
  return (
    <CartProvider>

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
    </CartProvider >

  );
}

export default App;


