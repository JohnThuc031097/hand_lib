import html from "./core.js";

const cars = ['BWM', 'Porsche', 'Mercedes'];

const output = html`
  <h1>Cars</h1>
  <ul>
    ${cars.map(car => `<li>${car}</li>`)}
  </ul>  
`;

console.log(output);