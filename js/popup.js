document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopup");
  const closePopupButton = document.getElementById("closePopup");
  const popup = document.getElementById("popup");

  openPopupButton.addEventListener("click", function () {
    popup.style.display = "block";
  });

  closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
