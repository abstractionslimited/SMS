function generateTable(params) {


    let mountains = [
        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
        { name: "Monte Amiata", height: 1738, place: "Siena" }
    ];

    let timetableData = [
        {
            Period: '08:00',
            Monday: 'Physics',
            Tuesday: 'Computer Science',
            Wednesday: 'Geography',
            Thursday: 'AgriScience',
            Friday: 'Mathematics'
        },

        {
            Period: '09:00',
            Monday: 'Life skills',
            Tuesday: 'Business Studies',
            Wednesday: 'Accounting',
            Thursday: 'Economics',
            Friday: 'Statistics'
        }, {
            Period: '10:00',
            Monday: 'Life skills',
            Tuesday: 'Business Studies',
            Wednesday: 'Accounting',
            Thursday: 'Economics',
            Friday: 'Statistics'
        },
        {
            Period: '11:00',
            Monday: 'Life skills',
            Tuesday: 'Business Studies',
            Wednesday: 'Accounting',
            Thursday: 'Economics',
            Friday: 'Statistics'
        },
        {
            Period: '12:00',
            Monday: 'Life skills',
            Tuesday: 'Business Studies',
            Wednesday: 'Accounting',
            Thursday: 'Economics',
            Friday: 'Statistics'
        },
        {
            Period: '13:00',
            Monday: 'Life skills',
            Tuesday: 'Business Studies',
            Wednesday: 'Accounting',
            Thursday: 'Economics',
            Friday: 'Statistics'
        }

    ];

    const data = Object.keys(timetableData[0]);


    let table = document.querySelector('table');
    buildTableBody(table, timetableData);
    generateTableHead(table, data);
}

function generateTableHead(table, data) {
    var thead = table.createTHead();
    var row = thead.insertRow();
    for (const key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
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