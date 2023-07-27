import "./About.css";

const template = () => {
  return `
  <div class="divabout">
  <div class="textabout">
  <h1 class="h1about">BBloque</h1>
  <p>Mi nombre es Pablo y me dedico apasionadamente a construir bicicletas de acero a mano.
  Mi arte reside en la combinación de la tradición artesanal con la precisión técnica, creando dos ruedas que son obras de arte funcionales, listas para conquistar caminos y senderos.Mi nombre es Pablo y me dedico apasionadamente a construir bicicletas de acero a mano.
  Mi arte reside en la combinación de la tradición artesanal con la precisión técnica, listas para conquistar caminos y senderos.
  </div>
  <img src="https://res.cloudinary.com/dc5wp3crs/image/upload/v1690484522/FOTO_46_py2j0t.jpg" alt="Pablo soldando una bicicleta" class="coverabout"/>
  </div>
  <div class="divabout center">
  <img src="https://res.cloudinary.com/dc5wp3crs/image/upload/v1690484067/medidas_iwded1.jpg" alt="Plano de una bicicleta" class="coverabout"/>
  <div class="textabout">
  <h1 class="h1about">Proceso</h1>
  <p>Desde tomar medidas exactas hasta cortar los tubos de acero con precisión, la elección del acabado y el montaje final, cada etapa del proceso de construcción de una bicicleta se fusiona para dar vida a una obra maestra sobre dos ruedas.
  </div>
  </div>
  <div class="divabout">
  <div class="textabout">
  <h1 class="h1about">Entrega</h1>
  <p>Mi nombre es Pablo y me dedico apasionadamente a construir bicicletas de acero a mano.
  Mi arte reside en la combinación de la tradición artesanal con la precisión técnica, creando dos ruedas que son obras de arte funcionales, listas para conquistar caminos y senderos.
  </div>
  <img src="https://res.cloudinary.com/dc5wp3crs/image/upload/v1690484067/bikecover_mxtedi.jpg" alt="Bicleta montada" class="coverabout"/>
  </div>
    `;
};
const About = () => {
  document.querySelector("main").innerHTML = template();
};

export default About;
