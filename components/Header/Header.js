import "./Header.css";

const template = () => {
  return `
  <a href="#null" id="home-link"><img class="logo" src="./icons/bbloqueletras.png"/></a>
  <button class="abrir" id="abrir"><i class="bi bi-list"></i></button>
  <button id="theme-btn" class"theme-btn">☼</button>
    <nav class="navheader" id="navheader">
      <button class="cerrar" id="cerrar"><i class="bi bi-x"></i></button>
        <ul class="ulheader">
          <li><a href="#null" id="home-link2" class="home">Inicio</a></li>
          <li><a href="#null" id="about-link" class="about">Sobre BBloque</a></li>
          <li><a href="#null" id="gallery-link" class="gallery">Trabajos</a></li>
          <li><a href="#null" id="contact-link" class="Contact">Contacto</a></li>
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
