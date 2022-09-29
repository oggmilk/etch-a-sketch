function createGrid(numberOfSquares){
  for (let i = 0; i < numberOfSquares; i++) {
    const container = document.querySelector("#container");
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let i = 0; i < numberOfSquares; i++) {
      const col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
    } //creates an x by x grid
  }
  const square = document.querySelectorAll(".col");
  square.forEach(event => {
    event.addEventListener("mouseover", () =>{
      event.classList.add("filled");
    })}); //mouse-over adds fill in class to cols

}

function newGrid(){
  let numberOfSquares = prompt("enter:");
  const removeRow = document.querySelectorAll(".row");
  removeRow.forEach(row => {
    row.remove();
  });
  createGrid(numberOfSquares);
} //erases old grid and creates new grid sized off user input

createGrid(16); //default grid