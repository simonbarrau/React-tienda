import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
//import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListsContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import img from './img/pic.jpg';

function App() {
  const stock= 5
  return (
    <div className="App">
            <img className='surf' src={img}  alt="Surf" />

      <NavBar/>
      
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <ItemCount stock={stock}/>
        <ItemListContainer saludo="Hello Surfers!"/>

        

      </header>
    </div>
  );
}

export default App;
