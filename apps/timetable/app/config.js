define(function () {
  return {
    getConfigs: function () {
      return {
        weekdays: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        periods: [
          { start: '07:50', end: '08:35' },
          { start: '08:40', end: '09:25' },
          { start: '09:40', end: '10:25' },
          { start: '10:30', end: '11:15' },
          { start: '11:30', end: '12:15' },
          { start: '12:15', end: '13:00' },
          { start: '13:15', end: '14:00' },
          { start: '14:00', end: '14:45' },
          { start: '14:45', end: '15:30' },
          { start: '15:30', end: '16:15' }
        ]
      };
    }
  };
});
