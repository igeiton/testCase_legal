const arrow = document.querySelector(".expand_arrow");
const body = document.querySelector(".card__body__text");
const footer = document.querySelector(".card__footer");

arrow.addEventListener("click", () => {
  let timeout;
  const toggleShadow = () => footer.classList.toggle("shadow");

  if (arrow.classList.contains("expanded")) {
    body.style.maxHeight = "125px";
    toggleShadow();
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    timeout = setTimeout(toggleShadow, 300);
  }

  arrow.classList.toggle("expanded");

  return () => clearTimeout(timeout);
});
