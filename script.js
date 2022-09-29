let n = 5;

for (let i = 0; i < n; i++) {
  const container = document.querySelector("#container");
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  for (let i = 0; i < n; i++) {
    const col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col);
  } //creates an n by n grid
}

const square = document.querySelectorAll(".col");
square.forEach(event => {
  event.addEventListener("mouseover", () =>{
    event.classList.add("filled");
  })}); //mouse-over adds fill in class to cols