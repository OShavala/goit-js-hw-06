const SizeEl = document.querySelector("#font-size-control");
const ValueEl = document.querySelector("#text");

SizeEl.addEventListener("input", () => {
ValueEl.style.fontSize =`${SizeEl.value}px`;
});