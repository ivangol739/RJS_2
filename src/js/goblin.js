export default function goblin() {
  const cell = Array.from(document.querySelectorAll(".cell"));
  let i = 0;
  setInterval(() => {
    cell[i].classList.remove("img");
    i = Math.floor(Math.random() * 16);
    cell[i].classList.add("img");
  }, 1000);
}
