import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function App(props) {
  return html`
    <h1>REACT</h1>
    <ul>
      ${props.cars.map(car => `<li>${car}</li>`)}
    </ul>
    <button onclick="dispatch('ADD', 'Rorche');">Add car</button>
  `;
}

export default connector(App);