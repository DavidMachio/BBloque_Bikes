const changeTheme = () => {
  //body
  document.body.classList.toggle("dark");
  //logo
  document.querySelector(".logo").classList.toggle("dark");
  //iconos footer
  const iconos = document.querySelectorAll(".icon");
  for (const icon of iconos) {
    icon.classList.toggle("dark");
  }
  //enlaces
  const enlaces = document.querySelectorAll(".ulheader li");
  for (const enlace of enlaces) {
    enlace.classList.toggle("dark");
  }
  //boton sol
  const themebtn = document.querySelector("#theme-btn");
  document.querySelector("#theme-btn");
  if (document.body.classList.contains("dark")) {
    themebtn.innerHTML = "☀";
  } else {
    themebtn.innerHTML = "☾";
  }
};

export default changeTheme;
