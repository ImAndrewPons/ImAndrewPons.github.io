const cursor = document.querySelector("#circle-container #circle");
const buttons = document.querySelectorAll("button");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = (e.clientX - 12) + "px";
  cursor.style.top = (e.clientY - 12) + "px";
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

document.addEventListener("mouseover", () => {
  cursor.style.display = "block";
});

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    cursor.firstElementChild.style.transform = "scale(0)";
  });
  button.addEventListener("mouseleave", () => {
    cursor.firstElementChild.style.transform = "scale(1)";
  });
});
function animate() {
  x += (mouseX - x) * 0.05;
  y += (mouseY - y) * 0.05;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  requestAnimationFrame(animate);
}
