import "./Footer.css";

const template = () => {
  return `
  
<nav>
  <ul>
    <li>
      <a href="null" target="_blank">
        <img class="icon" src="./icons/facebook.svg"/>
      </a>
    </li>
      <li>
      <a href="https://www.instagram.com/bbloque/" target="_blank">
        <img class="icon" src="./icons/instagram.svg"/>
      </a>
    </li>
    <li>
      <a href="https://youtu.be/KY_Anuf_VmA" target="_blank">
        <img class="icon" src="./icons/youtube.svg"/>
      </a>
    </li>
</ul>
</nav>
`;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};
export default Footer;
