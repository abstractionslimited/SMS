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

        e.target.classList.add('open');
        timetable.showDayView(e.target.getAttribute('day-dayNumber'));
      });

      header.append(newButton);
      counter++;
    }
  }

  createHeaderButtons();
  console.log('timetable rendered ..');
});

window.onload = function () {
  console.log('timetable app loaded');
  // renderTimetable();
};
