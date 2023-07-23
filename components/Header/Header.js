import "./Header.css";

const template = () => {
  return `
  <img src="./icons/BBlogo.png"/>
    <nav>
      <ul>
        <li>
          <a href="null" class="about">About</a>
        </li>
        <li>
          <a href="null" class="gallery">Gallery</a>
        </li>
        <li>
          <a href="null" class="Contact">Contact</a>
        </li>
      </ul>
    </nav>
    `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};
export default Header;
