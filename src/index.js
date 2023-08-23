import { timetableData } from './infrastructure/data.js';
import { generateTableHead } from './ui/Header/Header.js';

function generateTable(params) {
    const data = Object.keys(timetableData[0]);
    let table = document.querySelector('table');
    buildTableBody(table, timetableData);
    generateTableHead(table, data);
}

function buildTableBody(table, data) {
    for (const element of data) {
        let row = table.insertRow();
        for (const key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
window.onload = generateTable;