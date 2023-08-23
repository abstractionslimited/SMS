export function generateTableHead(table, data) {
    var thead = table.createTHead();
    var row = thead.insertRow();
    for (const key of data) {
        let th = document.createElement("th");
        th.classList.add('days');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}