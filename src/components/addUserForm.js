import "../styles/navbar.css";

function AddUserForm(props) {
  return (
    <div class="container">
      <form>
        <div class="container">
            <h1 class="titleCreate">CREAR CUENTA</h1>
        </div>
      <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Nombre
          </label>
          <input type="text" class="form-control" id="exampleInputText" />
        </div>

        <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Apellidos
          </label>
          <input type="text" class="form-control" id="exampleInputText" />
        </div>

        <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Nombre de usuario
          </label>
          <input type="text" class="form-control" id="exampleInputText" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Contraseña
          </label>
          <input type="text" class="form-control" id="exampleInputText" />
        </div>

        <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Confirmar contraseña
          </label>
          <input type="text" class="form-control" id="exampleInputText" />
        </div>

        <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Fecha de nacimiento
          </label>
          <input type="date" class="form-control" id="exampleInputText" />
        </div>

        <div class="mb-3">
          <label for="exampleInputText" class="form-label">
            Altura (en cm)
          </label>
          <input type="number" class="form-control" id="exampleInputText" />
        </div>

        <div class="mb-3">
        <label for="exampleInputText" class="form-label">
            Sexo
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Elige como te identificas</option>
            <option value="zurdo">Hombre</option>
            <option value="diestro">Mujer</option>
            <option value="ambidiestro">Prefiero no especificarlo</option>
          </select>
        </div>

        <div class="mb-3">
        <label for="exampleInputText" class="form-label">
            Guardia
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Elige tu mano buena</option>
            <option value="zurdo">Zurdo</option>
            <option value="diestro">Diestro</option>
            <option value="ambas">Ambas</option>
          </select>
        </div>

        <div class="mb-3">
        <label for="exampleInputText" class="form-label">
            Franja de peso
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Elige tu categoría de peso</option>
            <option value="48">48 kg Minimosca</option>
            <option value="51">51 kg Mosca</option>
            <option value="54">54 kg Gallo</option>
            <option value="57">57 kg Pluma</option>
            <option value="60">60 kg Ligero</option>
            <option value="64">64 kg Superligero</option>
            <option value="69">69 kg Welter</option>
            <option value="75">75 kg Mediano</option>
            <option value="81">81 kg Semipesado</option>
            <option value="91">91 kg Pesado</option>
            <option value="100">+91 kg Superpesado</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          Crear cuenta
        </button>
        <button type="submit" class="btn btn-danger marginsOnButtons">
          Volver al menú principal
        </button>
      </form>
      <br></br>
    </div>
  );
}

export default AddUserForm;
