// CREATE AN ARRAY OF EMPLOYEES
var employees = [
    { id: 11111111, name: "ZAK", department: "Engineering", extension: 1111, email: "zak@vectacorp.com" },
    { id: 22222222, name: "JESSICA", department: "Executive", extension: 2222, email: "jessica@vectacorp.com" },
    { id: 33333333, name: "MARK", department: "Marketing", extension: 3333, email: "mark@vectacorp.com" },
    { id: 44444444, name: "FRED", department: "Administrative", extension: 4444, email: "fred@vectacorp.com" },
    { id: 55555555, name: "SALLY", department: "Sales", extension: 5555, email: "sally@vectacorp.com" }
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
var form = document.getElementById('addForm');
var empTable = document.getElementById('empTable');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// Building the Grid
// In the M8 Assignment you used the table’s DOM methods insertRow(), insertCell(), and deleteRow() to manipulate the row structure for the table. In this assignment you will take a different approach. In this assignment, you’ll see the table includes a <tbody> tag. Use this tag as a ‘hook’ and rely on the innerHTML property to programmatically construct the row and cell structure for the table using a template literal string.
// Considerations:
// This will be its own function. It will be called when the page loads, when an employee is added, and when an employee is deleted.
// Use a for / of loop here to loop through the array and build each row in code.
// Use the appendChild() method to append the constructed row to the <tbody> tag.
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    var id = parseInt(document.getElementById('id').value);
    var name = document.getElementById('name').value;
    var department = document.getElementById('department').value;
    var extension = parseInt(document.getElementById('extension').value);
    var email = document.getElementById('email').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    var newEmployee = { id: id, name: name, department: department, extension: extension, email: email };
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (confirm("Are you sure you want to delete this employee?")) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        var rowIndex = e.target.parentNode.parentNode.rowIndex;
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex - 1, 1); // SUBTRACT 1 FROM THE INDEX TO ACCOUNT FOR THE HEADER ROW
        // BUILD THE GRID
        buildGrid();
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    var oldTbody = empTable.getElementsByTagName('tbody')[0];
    empTable.removeChild(oldTbody);
    // REBUILD THE TBODY FROM SCRATCH
    var tbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (var emp of employees) {
        // CREATE THE ROW
        var row = document.createElement('tr');
        // CREATE THE CELLS
        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.extension}</td>
            <td><a href="mailto:${emp.email}">${emp.email}</a></td>
            <td><button class="btn btn-danger btn-sm">Delete</button></td>
        `;
        // APPEND THE ROW TO THE TBODY
        tbody.appendChild(row);
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    document.getElementById('empCount').textContent = employees.length;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};