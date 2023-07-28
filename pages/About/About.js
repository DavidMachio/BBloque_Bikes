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
  <p>Comienza con la selección y medición cuidadosa de los tubos de acero. Posteriormente, son cortados de manera precisa siguiendo el diseño que se ha escogido previamente, asegurando así la base para una bicicleta única.

  Luego, se lleva a cabo el proceso de soldado de los tubos. Aquí, la habilidad del artesano juega un papel crucial para garantizar la integridad y seguridad del cuadro. La selección del diseño es un paso crucial, ya que determina la funcionalidad, el estilo y la personalidad de la bicicleta, considerando factores como el tipo de ciclismo para el cual será utilizada.
</p>
  </div>
  </div>
  <div class="divabout">
  <div class="textabout">
  <h1 class="h1about">Entrega</h1>
  <p>Finalmente, el montaje de la bicicleta se lleva a cabo con cuidado y precisión, incorporando componentes como el sistema de frenado, la transmisión y los componentes de la dirección, asegurando que cada detalle esté ajustado correctamente para garantizar un rendimiento óptimo. El resultado final es una bicicleta en acero hecha a mano, una obra de arte funcional que refleja la pasión y dedicación de los artesanos involucrados en su construcción.</p>
  </div>
  <img src="https://res.cloudinary.com/dc5wp3crs/image/upload/v1690484067/bikecover_mxtedi.jpg" alt="Bicleta montada" class="coverabout"/>
  </div>
    `;
};
const About = () => {
  document.querySelector("main").innerHTML = template();
};

export default About;
