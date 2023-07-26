import "/style.css?t=1690350349369";

import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import About from "/pages/About/About.js";
import Home from "/pages/Home/Home.js";
import Trabajos from "/pages/Trabajos/Trabajos.js";

Header();
Footer();
Home();

document.querySelector("#home-link2").addEventListener("click", Home);
document.querySelector("#home-link").addEventListener("click", Home);
document.querySelector("#about-link").addEventListener("click", About);
document.querySelector("#gallery-link").addEventListener("click", Trabajos);
