import "./Trabajos.css";
import bikes from "../../data/Bikes";

const template = () => {
  return `
  <div class="video">
        <video width="100%" height=auto src="../videos/videohumo.mp4" autoplay controls>Tu navegador no admite formato mp4 video</video>
        <div class="enlace">
    
      <a class="watch" target="_blank" href="https://youtube.com/shorts/gxtyY8zi1r0?feature=share">▶︎ watch</a>
     </div>
    </div>
    <h2 class="trabajos">Bikes</h2>
    <ul id="trabajos-container"></ul>
    <a href="#null" id="home-link"><img class="logo" src="./icons/bbloqueletras.png"/></a>
    `;
};

const printBikes = () => {
  const trabajosContainer = document.querySelector("#trabajos-container");
  for (const bike of bikes) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src=${bike.img} alt="${bike.alt}"/>
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
