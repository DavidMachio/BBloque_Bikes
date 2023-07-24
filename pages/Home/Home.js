import "./Home.css";

const template = () => {
  return `
  <div class="divhome">
  <img class="titlehome" src="./icons/bbloqueletras.png"/>
  <img src="https://images.squarespace-cdn.com/content/v1/5c54839be5f7d121ee09355c/1549306985114-30DJEZXX0D670FTGFSSI/_DSC8556-Editar-1_web.png?format=2500w" class="coverhome"/>
  </div>
    `;
};
const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;
