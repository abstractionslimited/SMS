import { getConfigs } from '../../infrastructure/config.js';

// export function createPeriods(params) {
//   var i = 0;
//   var periods = getConfigs().periods;
//   for (const period of periods) {
//     let container = document.createElement('div');
//     let periodElement = document.createElement('div');
//     let contentElement = document.createElement('div');

//     container.setAttribute('class', 'routine-schedule');
//     container.classList.add('hidden');
//     container.style.transitionDelay = i * 0.025 + 's';
//     container.style.backgroundColor = 'red';

//     periodElement.setAttribute('class', 'period-element');
//     contentElement.setAttribute('class', 'period-content');

//     var start = period.start.split(':');
//     var startAMP = start[0] >= 12 ? 'PM' : 'AM';
//     var startHour = start[0] >= 13 ? parseInt(start[0]) - 12 : start[0];
//     var startMinutes = start[1];

//     var end = period.end.split(':');
//     var endAMP = end[0] >= 12 ? 'PM' : 'AM';
//     var endHour = end[0] >= 13 ? parseInt(end[0]) - 12 : end[0];
//     var endMinutes = end[1];

//     startHour = String(startHour).padStart(2, 0);
//     startMinutes = String(startHour).padStart(2, 0);

//     endHour = String(endHour).padStart(2, 0);
//     endMinutes = String(endMinutes).padStart(2, 0);

//     periodElement.innerHTML = `${startHour}: ${startMinutes} ${startAMP} - ${endHour}:${endMinutes} ${endAMP}`;
//     contentElement.innerHTML = '<div></div><div></div>';

//     container.innerHTML += periodElement.outerHTML;
//     container.innerHTML += contentElement.outerHTML;

//     document.getElementById('timetable').appendChild(container);
//     i++;
//   }
//   console.log('rendered periods...');
// }

export function createPeriods(dayNumber) {
  var periods = getConfigs().periods;
  var timetable = getConfigs().timetable;
  var weekdays = getConfigs().weekdays;
  console.log(timetable);
  var table = document.getElementsByTagName('table')[0];
  const tblBody = document.createElement('tbody');

  for (let i = 0; i < periods.length; i++) {
    var row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(weekdays[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);

    }
    tblBody.appendChild(row);
  }
  table.appendChild(tblBody);

}


function allocateSubjectsToSlots(params) {
  var tr = document.querySelectorAll('.period');
  console.log(tr);
  for (const el of tr) {
    var tdSub = document.createElement('td');
    tdSub.classList.add('cs335');
    tdSub.classList.add('blue');
    tdSub.setAttribute('data-tooltip', 'Software Engineering &amp; Software Process');
    tdSub.innerText = 'CS335 [JH1]';
    el.append(tdSub);
    console.log(el);
  }
}