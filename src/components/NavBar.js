import img from '../img/pic.jpg';

const NavBar= () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
        <a class="nav-link active" aria-current="page" href="./">
        <img className='surf' src={img} alt="surf"></img>
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./">PRODUCTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./">LEGENDS</a>
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
