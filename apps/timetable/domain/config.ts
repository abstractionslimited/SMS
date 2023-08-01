var config = {
  weekDays: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  classTimetable: [
    {
      day: 'Monday',
      Schedules: [
        new Schedule('Life Science', 'Mr Kupelo', 'B1'),
        new Schedule('Geography', 'Mr Kupelo', 'B1')
      ]
    }
  ],
  periods: [
    new Period('08:00', '08:45'),
    new Period('08:45', '09:30'),
    new Period('09:30', '10:15'),
    new Period('10:15', '11:00'),
    new Period('11:00', '11:45'),
    new Period('11:45', '12:30')
  ],
  subjectColors: [
    new SubjectColor('Life Science', '#ff0000'),
    new SubjectColor('Geography', '#0000ff'),
    new SubjectColor('Mathematics', '#00ff00'),
    new SubjectColor('English', '#ffff00'),
    new SubjectColor('Afrikaans', '#00ffff'),
    new SubjectColor('History', '#ff00ff'),
    new SubjectColor('Economics', '#000000'),
    new SubjectColor('Business Studies', '#ffffff'),
    new SubjectColor('Accounting', '#ff8000'),
    new SubjectColor('Physical Science', '#8000ff'),
    new SubjectColor('Computer Applications Technology', '#0080ff'),
    new SubjectColor('Life Orientation', '#ff0080'),
    new SubjectColor('Tourism', '#80ff00'),
    new SubjectColor('Hospitality Studies', '#00ff80'),
    new SubjectColor('Consumer Studies', '#800000'),
    new SubjectColor('Engineering Graphics and Design', '#008000'),
    new SubjectColor('Civil Technology', '#000080'),
    new SubjectColor('Electrical Technology', '#800080'),
    new SubjectColor('Mechanical Technology', '#008080'),
    new SubjectColor('Agricultural Technology', '#808000'),
    new SubjectColor('Dramatic Arts', '#808080'),
    new SubjectColor('Music', '#ff8080')
  ]
};
