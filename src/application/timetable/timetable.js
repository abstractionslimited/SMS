import { getConfigs } from '../../domain/config.js';

// USE cases for timetable object:
export var timetable = {
    currently_shown_day_number: 0,

    display_for_day: function (dayNumber) {
        timetable.currently_shown_day_number = dayNumber;

        timetable.routine_el.hide();

        setTimeout(function () {
            timetable.routine_el.fill(dayNumber);
            timetable.routine_el.show();
        }, 450);
    },

    routineElement: {
        fill: function (dayNumber) {
            var routine = document.querySelectorAll('.routine-schedule');
            var timetable = getConfigs().timetable;
            var colors = getConfigs().colors;
            var schedule = timetable[dayNumber].schedule;

            for (let period = 0; period < schedule.length; period++) {
                const subjectRoom = schedule[period].room;
                const subjectName = schedule[period].subject;
                var subjectColor = colors[subjectName];

                let routinePeriod = routine[period].querySelector('.period-content');

                let routinePeriodColor = routinePeriod.style.color;

                if (subjectName) {
                    if (typeof subjectColor != undefined) {
                        routinePeriod.style.color = subjectColor;
                    } else {
                        routinePeriod = '#000';
                    }
                    routinePeriod.querySelectorAll('div')[0].innerText = subjectName;
                    routinePeriod.querySelectorAll('div')[1].innerText = subjectRoom;
                } else {
                    routinePeriod.querySelectorAll('div')[0].innerText = 'Free Period';
                    routinePeriod.querySelectorAll('div')[1].innerText = 'Free Period';
                }
            }
        },

        show: function () {
            // Get elements with matching tags
            let elements = document.querySelectorAll('.routine-schedule');
            for (const element of elements) {
                element.classList.remove('hidden');
            }
        },

        hide: function (params) {
            // Get elements with matching tags
            let elements = document.querySelectorAll('.routine-schedule');
            for (const element of elements) {
                element.classList.remove('hidden');
            }
        }
    },

    showCurrentDay: function () {
        const date = new Date();
        console.log('date ', date);
        const day = date.getDay();
        const dayNumber = day != 0 ? day - 1 : 6;
        var timetableData = getConfigs().timetable;
        var headerButtons = document.querySelectorAll('header>button');

        if (dayNumber >= timetableData.length) {
            headerButtons[0].classList.add('open');
            timetable.showDayView(0);
        } else {
            headerButtons[dayNumber].classList.add('open');
            timetable.showDayView(dayNumber);
        }
    },

    showDayView: function (dayNumber) {
        this.currentlyShowDayNumber = dayNumber;
        this.routineElement.hide();

        setTimeout(function () {
            timetable.routineElement.fill(dayNumber);
            timetable.routineElement.show();
        }, 0);
    },
    display_previous_day: function () {
        var previous_day_number;
        var header_buttons = document.querySelectorAll('header > button');

        if (timetable.currently_shown_day_number != 0) {
            previous_day_number = parseInt(timetable.currently_shown_day_number) - 1;
            header_buttons[previous_day_number].click();
        }
    },

    display_next_day: function () {
        var next_day_number;
        var header_buttons = document.querySelectorAll('header > button');

        if (
            timetable.currently_shown_day_number !=
            config.data.timetable.length - 1
        ) {
            next_day_number = parseInt(timetable.currently_shown_day_number) + 1;
            header_buttons[next_day_number].click();
        }
    },

    routine_el: {
        fill: function (dayNumber) {
            var routine = document.querySelectorAll('.routine-schedule');

            //for (let period = 0; period < config.data.timetable[dayNumber].schedule.length; period++) {
            for (
                let period = 0;
                period < config.data.timetable[dayNumber].schedule.length &&
                period < config.data.periods.length;
                period++
            ) {
                var subject_name =
                    config.data.timetable[dayNumber].schedule[period].subject;
                var subject_room =
                    config.data.timetable[dayNumber].schedule[period].room;
                console.log(config.data.timetable[dayNumber]);

                if (subject_name != '') {
                    if (typeof config.data.colors[subject_name] != 'undefined') {
                        routine[period].querySelector('.schedule-content').style.color =
                            config.data.colors[subject_name];
                    } else {
                        routine[period].querySelector('.schedule-content').style.color =
                            '#000';
                    }

                    routine[period]
                        .querySelector('.schedule-content')
                        .querySelectorAll('div')[0].innerText = subject_name;
                    routine[period]
                        .querySelector('.schedule-content')
                        .querySelectorAll('div')[1].innerText = subject_room;
                } else {
                    routine[period]
                        .querySelector('.schedule-content')
                        .querySelectorAll('div')[0].innerText = '';
                    routine[period]
                        .querySelector('.schedule-content')
                        .querySelectorAll('div')[1].innerText = '';
                }
            }
        },

        show: function () {
            var routine = document.querySelectorAll('.routine-schedule');

            for (el of routine) {
                el.classList.remove('hidden');
            }
        },

        hide: function () {
            var routine = document.querySelectorAll('.routine-schedule');

            for (el of routine) {
                el.classList.add('hidden');
            }
        }
    }
};
