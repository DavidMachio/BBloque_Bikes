import "./Trabajos.css";
import bikes from "../../data/Bikes";

const template = () => {
  return `
    <ul id="trabajos-container"></ul>
    `;
};

const printBikes = () => {
  const trabajosContainer = document.querySelector("#trabajos-container");
  for (const bike of bikes) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src=${bike.img} alt=${bike.name} />
    <h3>${bike.name}</h3>
    <h4>${bike.type}</h4>
    <h5>${bike.colors}</h5>
    `;

    trabajosContainer.appendChild(li);
  }
};

const Trabajos = () => {
  document.querySelector("main").innerHTML = template();
  printBikes();
};

export default Trabajos;
