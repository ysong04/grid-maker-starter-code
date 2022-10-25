// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;



// Add a row
function addR() {
    if (numRows === 0 && numCols === 0) {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");
        let addCell = document.createElement("td");

        table.appendChild(addRow);

        const row = document.querySelector("tr");

        addCell.addEventListener("click", Color);//Additional function Color added to increase readablillity
        row.appendChild(addCell);

        numRows++;
        numCols++;

    } else {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");

        table.appendChild(addRow);

        const row = document.querySelectorAll("tr");

        for (let i = 0; i < numCols; i++) {

            let cell = document.createElement("td");
            cell.addEventListener("click", Color);//Additional function Color added to increase readablillity
            row[numRows].appendChild(cell);

        }

        numRows++;

    }
}

// Add a column
function addC() {
    if (numRows === 0 && numCols === 0) {

        const table = document.querySelector("#grid");

        let addRow = document.createElement("tr");
        let addCell = document.createElement("td");

        table.appendChild(addRow);

        const row = document.querySelector("tr");

        addCell.addEventListener("click", Color);//Additional function Color added to increase readablillity
        row.appendChild(addCell);

        numCols++;
        numRows++;

    } else {

        const row = document.querySelectorAll("tr");

        for (let i = 0; i < numRows; i++) {

            let cell = document.createElement("td");
            cell.addEventListener("click", Color);//Additional function Color added to increase readablillity
            row[i].appendChild(cell);

        }

        numCols++;

    }
}

// Remove a row
function removeR() {

    if (numRows === 0) return;

    const table = document.querySelector("#grid");

    table.removeChild(table.lastChild);

    numRows--;

    if (numRows === 0) {

        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild);
        }
        numCols = 0;
    }
}

// Remove a column
function removeC() {

    if (numCols === 0) return;

    const table = document.querySelector("#grid");
    const rows = document.querySelectorAll("tr");

    for (let i = 0; i < numRows; i++) {
        rows[i].removeChild(rows[i].lastChild);
    }

    numCols--;

    if (numCols === 0) {

        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild);
        }

        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}


// Extra Function
// Added to make program more efficient and readable
function Color() {
    //Using this for the addEventListener
    this.style.backgroundColor = colorSelected;
}

// Fill all uncolored cells
function fillU(){
    //We want to access every cell
    let cells = document.querySelectorAll("td");
        //We want to access every uncolored cell
        // console.log("cells:",cells);
        cells.forEach(
            function(node){
                if (node.style.backgroundColor == ""){
                    node.style.backgroundColor = colorSelected;
                }
            }
        )
}

// Fill all cells
function fillAll(){
    let cells = document.querySelectorAll("td");

    //No need for condition, because we are filling ALL cells.

    //This accesses every individual cell
    cells.forEach(
        function(node){
            node.style.backgroundColor = colorSelected;
        }
    )
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll("td");
    
    //Setting the background color of every node (cell) to blank, which is white.
    cells.forEach((node) => node.style.backgroundColor = "");
}
