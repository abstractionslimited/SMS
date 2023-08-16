// import config from '../domain/config';

// main.js
function bye() {
  console.log('hello');
}

// export { Hello };

// define(function (require) {
//   // const config = require('./config');s
//   const configs = config.getConfigs();

//   var timetable = createTimetable(config, timetable);

//   function createHeaderButtons(params) {
//     var counter = 0;
//     var header = document.getElementsByTagName('header')[0];
//     var timetableData = config.getConfigs().timetable;

//     for (const entry of timetableData) {
//       let newButton = document.createElement('button');
//       newButton.innerText = entry.day;
//       newButton.setAttribute('data-dayNumber', counter);
//       addClickListenerToButton(newButton, timetable);

//       header.append(newButton);
//       counter++;
//     }

//     function addClickListenerToButton(newButton, timetable) {
//       newButton.addEventListener('click', function (e) {
//         var headerButtons = document.querySelectorAll('header > button');

//         for (const button of headerButtons) {
//           button.classList.remove('open');
//         }

//         e.target.classList.add('open');
//         console.log(e.target.getAttribute('data-dayNumber'));
//         const dayNumber = e.target.getAttribute('data-dayNumber');
//         timetable.showDayView(dayNumber);
//       });
//     }
//   }

//   function renderPeriodsContainer(params) {
//     var i = 0;

//     for (const period of configs.periods) {
//       let container = document.createElement('div');
//       let periodElement = document.createElement('div');
//       let contentElement = document.createElement('div');

//       container.setAttribute('class', 'routine-schedule');
//       container.classList.add('hidden');
//       container.style.transitionDelay = i * 0.025 + 's';
//       // container.style.backgroundColor = 'red';

//       periodElement.setAttribute('class', 'period-element');
//       contentElement.setAttribute('class', 'period-content');

//       var start = period.start.split(':');
//       var startAMP = start[0] >= 12 ? 'PM' : 'AM';
//       var startHour = start[0] >= 13 ? parseInt(start[0]) - 12 : start[0];
//       var startMinutes = start[1];

//       var end = period.end.split(':');
//       var endAMP = end[0] >= 12 ? 'PM' : 'AM';
//       var endHour = end[0] >= 13 ? parseInt(end[0]) - 12 : end[0];
//       var endMinutes = end[1];

//       startHour = String(startHour).padStart(2, 0);
//       startMinutes = String(startHour).padStart(2, 0);

//       endHour = String(endHour).padStart(2, 0);
//       endMinutes = String(endMinutes).padStart(2, 0);

//       periodElement.innerHTML = `${startHour}: ${startMinutes} ${startAMP} - ${endHour}:${endMinutes} ${endAMP}`;
//       contentElement.innerHTML = '<div></div><div></div>';

//       container.innerHTML += periodElement.outerHTML;
//       container.innerHTML += contentElement.outerHTML;

//       document.getElementById('timetable').appendChild(container);
//       i++;
//     }
//     console.log('rendered periods...');
//   }

//   (function renderTimetable(params) {
//     console.info('Initializing table Timetable');
//     createHeaderButtons();
//     timetable.showCurrentDay();
//     renderPeriodsContainer();
//     console.info('Timetable built successfully.');
//   })();
// });

// window.onload = function () {
//   console.log('timetable app loaded');
//   // renderTimetable();
// };
// function createTimetable(config, timetable) {
//   return {
//     currentlyShowDayNumber: 0,
//     routineElement: {
//       fill: function (dayNumber) {
//         var routine = document.querySelectorAll('.routine-schedule');
//         var timetable = config.getConfigs().timetable;
//         var colors = config.getConfigs().colors;
//         var schedule = timetable[dayNumber].schedule;

//         for (let period = 0; period < schedule.length; period++) {
//           const subjectRoom = schedule[period].room;
//           const subjectName = schedule[period].subject;
//           var subjectColor = colors[subjectName];

//           routinePeriod = routine[period].querySelector('.period-content');

//           let routinePeriodColor = routinePeriod.style.color;

//           if (subjectName) {
//             if (typeof subjectColor != undefined) {
//               routinePeriod.style.color = subjectColor;
//             } else {
//               routinePeriod = '#000';
//             }
//             routinePeriod.querySelectorAll('div')[0].innerText = subjectName;
//             routinePeriod.querySelectorAll('div')[1].innerText = subjectRoom;
//           } else {
//             routinePeriod.querySelectorAll('div')[0].innerText = 'Free Period';
//             routinePeriod.querySelectorAll('div')[1].innerText = 'Free Period';
//           }
//         }
//       },

//       show: function () {
//         // Get elements with matching tags
//         let elements = document.querySelectorAll('.routine-schedule');
//         for (const element of elements) {
//           element.classList.remove('hidden');
//         }
//       },

//       hide: function (params) {
//         // Get elements with matching tags
//         let elements = document.querySelectorAll('.routine-schedule');
//         for (const element of elements) {
//           element.classList.remove('hidden');
//         }
//       }
//     },
//     showDayView: function (dayNumber) {
//       this.currentlyShowDayNumber = dayNumber;
//       this.routineElement.hide();

//       setTimeout(function () {
//         timetable.routineElement.fill(dayNumber);
//         timetable.routineElement.show();
//       }, 0);
//     },

//     showCurrentDay: function () {
//       const date = new Date();
//       console.log('date ', date);
//       const day = date.getDay();
//       const dayNumber = day != 0 ? day - 1 : 6;
//       var timetableData = config.getConfigs().timetable;
//       var headerButtons = document.querySelectorAll('header>button');

//       if (dayNumber >= timetableData.length) {
//         headerButtons[0].classList.add('open');
//         timetable.showDayView(0);
//       } else {
//         headerButtons[dayNumber].classList.add('open');
//         timetable.showDayView(dayNumber);
//       }
//     }
//   };
// }
