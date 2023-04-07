const containers = document.querySelectorAll(".hoverContainer");
const hoverTexts = document.querySelectorAll(".hover-text");

containers.forEach((container, index) => {
  container.addEventListener("mouseenter", () => {
    hoverTexts[index].style.display = "block";
  });

  container.addEventListener("mouseleave", () => {
    hoverTexts[index].style.display = "none";
  });
});
