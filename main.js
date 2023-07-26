import "./style.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Trabajos from "./pages/Trabajos/Trabajos";

Header();
Footer();
Home();

document.querySelector("#home-link2").addEventListener("click", Home);
document.querySelector("#home-link").addEventListener("click", Home);
document.querySelector("#about-link").addEventListener("click", About);
document.querySelector("#gallery-link").addEventListener("click", Trabajos);
