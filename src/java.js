window.addEventListener("scroll", () => {
  const about_me = document.querySelector(".wrapper_text_bg");
  const scrolled = window.pageYOffset;
  const val = scrolled * 0.5;
  const opacidad = val * 0.5;
  about_me.style.opacity = `${opacidad}%`;
});
