import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListsContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CartWidget/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemCount/>
        <ItemListContainer saludo="Hello Surfers!"/>

        

      </header>
    </div>
  );
}

export default App;
