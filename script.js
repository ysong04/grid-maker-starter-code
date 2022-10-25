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
    // call the addR() function to create a row, which also creates a column for the first time() [note: refer to if(row == 1) col++;]
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
    cols++; // increment the number of columns
}

// Remove a row
function removeR() {
    // if there's no row to delete, alert the user to add a row
    if(rows == 0) {
        alert("Please add a row");
    }

    // if there's a row to delete, delete a row and decrement the number of rows
    else {
        let table_ref = document.getElementById("grid")
        table_ref.deleteRow(-1)
        rows--;

        // if row 0 is deleted, there are is column as well
        if(rows == 0) {
            cols == 0;
        }
    }

// Remove a column
function removeC() {
    // if there's no column to delete, alert the user to add a column
    if(cols == 0) {
        alert("Please add a column")
    }

    else {
        let all_rows = document.querySelectorAll("tr"); // reference to the rows of the table

        // delete the last cell of each row
        for(let i = 0; i < rows; i++) {
            all_rows[i].deleteCell(-1)
        }
        cols --; // decrement the number of columns

        // if the last column is deleted, there're no rows as well
        if(cols == 0) {
            rows == 0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let row = document.getElementsByTagName("td"); //get array of all cells
    for (let i = 0; i < row.length; i++){
        if(!row[i].style.backgroundColor){ //if the cell has no color then we set the color to the colorselected
            row[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
