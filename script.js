// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table_ref = document.getElementById("grid") // reference to the table 

    let new_row = table_ref.insertRow(-1) // add a new row at the end of the table 

    new_row.insertCell(0); // insert a cell in the row at the index 0 
    rows++; // increment the number of rows 
    
    if (rows == 1) cols ++; // each row that is being added for the first time is equivalent of a column 
    
    // if col > 1, add a row to each column that eixsts 
    if (cols > 1) { 
        for(let i = 0; i < cols - 1; i++) {
            new_row.insertCell(0)
        }
    }
}

// Add a column
function addC() {

    // if there's no row, which means no cell, 
    // call the addR() function to create a row, which also creates a column for the first time() *refer to if(row == 1) col++; 
    if(rows == 0) {
        addR();
    }
    else { 
        let all_rows = document.querySelectorAll("tr"); // get all the rows
    }
    
    for (let i = 0; i < rows < i++) {
        let new_col = document.createElement("td");// create new column and call it new_col
        all_rows[i].appendChild(new_col); // insert a new_col to each row 
    }
    cols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}