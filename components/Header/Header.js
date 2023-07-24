import "./Header.css";

const template = () => {
  return `
  <img class="logo" src="./icons/bbloqueletras.png"/>
  <button class="abrir" id="abrir"><i class="bi bi-list"></i></button>
    <nav class="navheader" id="navheader">
      <button class="cerrar" id="cerrar"><i class="bi bi-x"></i></button>
        <ul class="ulheader">
          <li><a href="null" class="home">Inicio</a></li>
          <li><a href="null" class="about">Sobre BBloque</a></li>
          <li><a href="null" class="gallery">Trabajos</a></li>
          <li><a href="null" class="Contact">Contacto</a></li>
        </ul>
    </nav>
    `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
  const navheader = document.querySelector("#navheader");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");

  abrir.addEventListener("click", () => {
    navheader.classList.add("visible");
  });
  cerrar.addEventListener("click", () => {
    navheader.classList.remove("visible");
  });
};
export default Header;
