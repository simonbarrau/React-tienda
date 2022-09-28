import img from '../img/california.jpg';
import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../Components/CartWidget/CartWidget';

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
  <button class="nav-link active"  data-bs-toggle="dropdown" aria-expanded="false">
  CATEGORIES
  </button>
  <ul class="dropdown-menu">
                <Link to={'/category/:categoryId'} style={{textDecoration:"none"}}> 
                <div class="nav-link active">Surf</div>
                </Link>

                <Link to={'/category/:categoryId'} style={{textDecoration:"none"}}> 
                <div class="nav-link active">Skate</div>
                </Link>
 
  </ul>
</div>
            
              </li>
              <li class="nav-item">
              <Link to={'/about-us'} style={{textDecoration:"none"}}> <div class="nav-link active">ABOUT US</div> </Link>
              </li>
              <li class="nav-item">
              <Link to={'/legends'} style={{textDecoration:"none"}}> <div class="nav-link active">LEGENDS</div>  </Link>
              

              </li>
             
             
            
            </ul>
            <form class="d-flex" role="search">
            <CartWidget/>

            </form>
          </div>
        </div>
      </nav>
      </>
    );
}

export default NavBar;
