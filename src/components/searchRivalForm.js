import "../styles/searchRival.css";

function SearchRivalForm(props) {
  return (
    <div className="container borderForm">
      <form>
        <div class="mb-3">
          <div>
            <h1> Buscar combate por fecha, hora y peso</h1>
          </div>
          <label for="exampleInputDate" class="form-label">
            Fecha
          </label>
          <input type="date" class="form-control" id="exampleInputDate" />
        </div>
        <div class="mb-3">
          <label for="exampleInputTime" class="form-label">
            Hora inicial
          </label>
          <input type="time" class="form-control" id="exampleInputTime" />
        </div>
        <div class="mb-3">
          <label for="exampleInputTime" class="form-label">
            Hora final
          </label>
          <input type="time" class="form-control" id="exampleInputTime" />
        </div>
        <div>
        <label for="exampleInputTime" class="form-label">
            Peso
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Elige tu categoría de peso (este campo puede estar vacío)</option>
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
        <br></br>
      </form>
    </div>
  );
}

export default SearchRivalForm;
