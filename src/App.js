import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
//import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListsContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  const stock= 5
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
    <ItemCount stock={stock}/>
    </div>
    <Routes>
    <Route path='/products' element={<ItemListContainer />}/>
    <Route path='detail/:id' element={<ItemDetailContainer />}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
