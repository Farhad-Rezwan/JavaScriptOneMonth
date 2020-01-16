const CTALEMENT = document.querySelector(".cta a");

if (CTALEMENT.hasAttribute("target")) {
  console.log(CTALEMENT.getAttribute("target"))
} else {
  CTALEMENT.setAttribute("target", "_blank");
}
console.log(CTALEMENT.attributes);
