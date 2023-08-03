define(function (require) {
  const config = require('./config');
  const configs = config.getConfigs();

  var timetable = {
    currentlyShowDayNumber: 0,

    showDayView: function (dayNumber) {
      console.log('Show day view', dayNumber);
    }
  };

  function createHeaderButtons(params) {
    var counter = 0;
    var header = document.getElementsByTagName('header')[0];

    for (const weekday of configs.weekdays) {
      let newButton = document.createElement('button');
      newButton.innerText = weekday;
      newButton.setAttribute('data-dayNumber', counter);

      newButton.addEventListener('click', function (e) {
        var headerButtons = document.querySelectorAll('header > button');

        for (const button of headerButtons) {
          button.classList.remove('open');
        }

        // e.target.classList.add('open');
        timetable.showDayView(e.target.getAttribute('day-dayNumber'));
      });

      header.append(newButton);
      counter++;
    }
  }

  function renderPeriodsContainer(params) {
    var i = 0;

    for (const period of configs.periods) {
      let container = document.createElement('div');
      let periodElement = document.createElement('div');
      let contentElement = document.createElement('div');

      container.setAttribute('class', 'routine-schedule');
      container.classList.add('hidden');
      container.style.transitionDelay = i * 0.025 + 's';

      periodElement.setAttribute('class', 'period-element');
      contentElement.setAttribute('class', 'period-content');

      var start = period.start.split(':');
      var startAMP = start[0] >= 12 ? 'PM' : 'AM';
      var startHour = start[0] >= 13 ? parseInt(start[0]) - 12 : start[0];
      var startMinutes = start[1];

      var end = period.end.split(':');
      var endAMP = end[0] >= 12 ? 'PM' : 'AM';
      var endHour = end[0] >= 13 ? parseInt(end[0]) - 12 : end[0];
      var endMinutes = end[1];

      startHour = String(startHour).padStart(2, 0);
      startMinutes = String(startHour).padStart(2, 0);

      endHour = String(endHour).padStart(2, 0);
      endMinutes = String(endMinutes).padStart(2, 0);

      periodElement.innerHTML = `${startHour}: ${startMinutes} ${startAMP} - ${endHour}:${endMinutes} ${endAMP}`;
      contentElement.innerHTML = '<div></div><div></div>';

      container.innerHTML += periodElement.outerHTML;
      container.innerHTML += contentElement.outerHTML;

      document.getElementById('timetable').appendChild(container);
      i++;
    }
    console.log('rendered periods...');
  }

  (function renderTimetable(params) {
    createHeaderButtons();
    renderPeriodsContainer();
    console.log('timetable rendered..');
  })();
});

window.onload = function () {
  console.log('timetable app loaded');
  // renderTimetable();
};
