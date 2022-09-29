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
  let numberOfSquares = prompt("Please enter a value between 1 & 100:");
  
  if(numberOfSquares > 100 || numberOfSquares < 1 || isNaN(numberOfSquares)){
    let numberOfSquares = prompt("Number between 1 & 100 not inputted. Please try again:");
  }else{
    const removeRow = document.querySelectorAll(".row");
    removeRow.forEach(row => {
      row.remove();
    });
    createGrid(numberOfSquares);
}
} //erases old grid and creates new grid sized off user input

createGrid(16); //default grid