import "./style.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Trabajos from "./pages/Trabajos/Trabajos";
import changeTheme from "./utils/theme";

Header();
Footer();
Home();

document.querySelector("#about-link").addEventListener("click", () => {
  About();
  const navheader = document.querySelector("#navheader");
  navheader.classList.remove("visible");
});
document.querySelector("#gallery-link").addEventListener("click", () => {
  Trabajos();
  const navheader = document.querySelector("#navheader");
  navheader.classList.remove("visible");
});
document.querySelector("#home-link").addEventListener("click", () => {
  Home();
  const navheader = document.querySelector("#navheader");
  navheader.classList.remove("visible");
});
document.querySelector("#home-link2").addEventListener("click", () => {
  Home();
  const navheader = document.querySelector("#navheader");
  navheader.classList.remove("visible");
});
document.querySelector("#theme-btn").addEventListener("click", () => {
  changeTheme();
  const navheader = document.querySelector("#navheader");
  navheader.classList.remove("visible");
});
