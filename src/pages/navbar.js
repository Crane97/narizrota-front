import "../styles/navbar.css";

function Navbar(props) {

  
  function handleCreateAccount (event) {
    window.location = "/create";
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid displayFlexing">
          <a class="navbar-brand displayFlexing" href="#">
            <img
              src="https://img.freepik.com/premium-vector/boxing-gloves-icon-vector-illustration_319667-280.jpg?w=2000"
              alt=""
              width="50"
              height="45"
              class="d-inline-block align-text-top"
            />
                <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Contrincantes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </a>
          <button type="button" class="btn btn-dark" onClick={handleCreateAccount}>Crear cuenta</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
