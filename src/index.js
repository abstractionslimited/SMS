import { timetable } from './domain/timetable.js';
import { CreateHeader } from './ui/Header/Header.js';
import { createPeriods } from './ui/Periods/Periods.js';

window.onload = () => {
    const root = document.getElementById('timetable');
    CreateHeader(root);
    createPeriods();
    timetable.showCurrentDay();
    console.log(timetable);
};