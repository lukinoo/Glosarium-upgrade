const hoverContainer = document.querySelector(".hoverContainer");
const hoverText = document.querySelector(".hover-text");

hoverContainer.addEventListener("mouseenter", () => {
  hoverText.style.display = "block";
});

hoverContainer.addEventListener("mouseleave", () => {
  hoverText.style.display = "none";
});
