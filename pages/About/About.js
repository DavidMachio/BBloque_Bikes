import "./About.css";

const template = () => {
  return `
  <div class="divabout">
  <div class="text">
  <h1>BBloque</h1>
  <p>Mi nombre es Pablo y me dedico apasionadamente a construir bicicletas de acero a mano.
  Mi arte reside en la combinación de la tradición artesanal con la precisión técnica, creando dos ruedas que son obras de arte funcionales, listas para conquistar caminos y senderos.
  </div>
  <img src="./images/pablo1.jpg" class="cover"/>
  </div>
  <div class="divhome">
  <img src="./images/medidas.jpg" class="cover"/>
  <div class="text">
  <h1>Proceso</h1>
  <p>Desde tomar medidas exactas hasta cortar los tubos de acero con precisión, la elección del acabado y el montaje final, cada etapa del proceso de construcción de una bicicleta se fusiona para dar vida a una obra maestra sobre dos ruedas.
  </div>
  </div>
  <div class="divabout">
  <div class="text">
  <h1>Entrega</h1>
  <p>Mi nombre es Pablo y me dedico apasionadamente a construir bicicletas de acero a mano.
  Mi arte reside en la combinación de la tradición artesanal con la precisión técnica, creando dos ruedas que son obras de arte funcionales, listas para conquistar caminos y senderos.
  </div>
  <img src="./images/bikecover.jpg" class="cover"/>
  </div>
    `;
};
const About = () => {
  document.querySelector("main").innerHTML = template();
};

export default About;
