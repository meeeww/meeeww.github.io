const data = [
  {
    title: "ABOUT ME",
    description:
      "Hi there! I'm Omar, a passionate web developer who is currently studying to improve my skills and knowledge in the field of programming. I'm looking for opportunities to expand my knowledge and contribute in a collaborative work environment. I consider myself a proactive and enthusiastic person with a strong desire to learn and grow in the web development industry. I am confident that I can make a great contribution to any project I am involved in, thanks to my dedication and passion for web development.",
    proyecto: "PROJECT",
    formulario: "Leave here your message and i'll get back to you ASAP!",
  },
  {
    title: "SOBRE MI",
    description:
      "¡Hola! Soy Omar, un desarrollador web apasionado que actualmente está estudiando para mejorar mis habilidades y conocimientos en el campo del desarrollo web. Estoy buscando oportunidades para expandir mis conocimientos y contribuir en un ambiente de trabajo colaborativo. Me considero una persona proactiva y entusiasta con muchas ganas de aprender y crecer en la industria del desarrollo web. Estoy seguro de que puedo hacer una gran contribución en cualquier proyecto en el que participe gracias a mi dedicación y pasión por el mismo.",
    proyecto: "PROYECTO",
    formulario: "¡Deja aquí tu mensaje y te respondere lo antes posible!",
  },
];

let idioma = "ingles";

function cambiarIdioma() {
  let proyectos = document.querySelectorAll(".titulo_proyecto");
  let formulario = document.querySelector(".form_titulo");
  let titulo = document.querySelector(".titulo");
  let description = document.querySelector(".description");
  let imagen = document.querySelector(".bandera");
  switch (idioma) {
    case "espanol":
      titulo.innerHTML = data[0]["title"];
      description.innerHTML = data[0]["description"];
      imagen.src = "../resources/Bandera_de_Espana.svg";
      idioma = "ingles";
      for (let index = 0; index < proyectos.length; index++) {
        proyectos[index].innerHTML = data[0]["proyecto"] + " " + (index + 1);
      }
      formulario.innerHTML = data[0]["formulario"];
      break;
    case "ingles":
      titulo.innerHTML = data[1]["title"];
      description.innerHTML = data[1]["description"];
      imagen.src = "../resources/Flag_of_the_United_Kingdom.png";
      idioma = "espanol";
      for (let index = 0; index < proyectos.length; index++) {
        proyectos[index].innerHTML = data[1]["proyecto"] + " " + (index + 1);
      }
      formulario.innerHTML = data[1]["formulario"];
      break;
  }
}

window.addEventListener("scroll", () => {
  const about_me = document.querySelector(".wrapper_text_bg");
  const scrolled = window.pageYOffset;
  const val = scrolled * 0.5;
  const opacidad = val * 0.5;
  about_me.style.opacity = `${opacidad}%`;
});
