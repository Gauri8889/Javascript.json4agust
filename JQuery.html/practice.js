const students = [
    { id: 121, name: 'Sanju', city: Bhopal,  },
    { id: 122, name: 'Anju', city: Indore },
    { id: 123, name: 'Ravi', city: jablpur }
];
function generateTable(data) {
    // Create a table element
    const table = document.createElement('table');
    table.border = '1'; // Optional: adds a border to the table for visibility

    // Create the table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Name', 'city'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement('tbody');

    data.forEach(student => {
        const row = document.createElement('tr');
        Object.values(student).forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
}
const container = document.getElementById('table-container');
const studentTable = generateTable(students);
container.appendChild(studentTable);