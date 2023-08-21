import { getConfigs } from '../../infrastructure/config.js';
import { timetable } from '../../domain/timetable.js';

export function CreateHeader() {
  var counter = 0;
  var header = document.getElementsByTagName('header')[0];
  var timetableData = getConfigs().timetable;

  for (const entry of timetableData) {
    let newButton = createButtons(entry, counter);
    addClickListenerToButton(newButton, timetable);
    header.append(newButton);
    counter++;
  }


}
function createButtons(entry, counter) {

  let newButton = document.createElement('button');

  newButton.innerText = entry.day;
  newButton.setAttribute('data-dayNumber', counter);

  return newButton;
}


function addClickListenerToButton(newButton, timetable) {
  newButton.addEventListener('click', function (e) {
    var headerButtons = document.querySelectorAll('header > button');

    for (const button of headerButtons) {
      button.classList.remove('open');
    }

    e.target.classList.add('open');
    console.log(e.target.getAttribute('data-dayNumber'));
    const dayNumber = e.target.getAttribute('data-dayNumber');
    timetable.showDayView(dayNumber);
  });
}
