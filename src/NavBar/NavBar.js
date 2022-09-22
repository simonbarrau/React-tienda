import img from '../img/pic.jpg';
import ima from '../img/car1.png';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar= () => {
    return(
        <>
        
        <nav class="navbar navbar-expand-lg navbar-white">
        <div class="container-fluid"> 
        <Link to={'/'} > 
        <img className='surf' src={img} alt="surf"></img>
        </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <div class="dropdown">
  <button  class="btn btn-secondary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
  CATEGORIES
  </button>
  <ul class="dropdown-menu">
  <Link to={'/category/:categoryId'} style={{textDecoration:"none"}}> 
                <div class="dropdown-item">Surf</div>
                </Link>
                <Link to={'/category/:categoryId'} style={{textDecoration:"none"}}> 
                <div class="dropdown-item">Skate</div>
                </Link>
 
  </ul>
</div>
            
              </li>
              <li class="nav-item">
              <Link to={'/about-us'} style={{textDecoration:"none"}}> 
              <div class="nav-link active">ABOUT US</div>                </Link>
              </li>
              <li class="nav-item">
              <Link to={'/legends'} style={{textDecoration:"none"}}> 
              <div class="nav-link active">LEGENDS</div>                </Link>

              </li>
              <li class="nav-item">
              <Link to={'/carro'} style={{textDecoration:"none"}}> 
              <img className='carro' height="40px" src={ima} alt="surf"></img>
             </Link>
              </li>
             
            
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </>
    );
}

export default NavBar;
