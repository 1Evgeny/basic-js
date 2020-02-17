module.exports = function getSeason(date) {
  const arrays = new Map([
    [0, 'winter'],
    [1, 'winter'],
    [2, 'spring'],
    [3, 'spring'],
    [4, 'spring'],
    [5, 'summer'],
    [6, 'summer'],
    [7, 'summer'],
    [8, 'autumn'],
    [9, 'autumn'],
    [10, 'autumn'],
    [11, 'winter'],
  ]);

  if(date === undefined) {
    return ('Unable to determine the time of year!');
  }

  let month = date.getUTCMonth();

    for (var key of arrays.keys()) {
      if (month === key) {
        return arrays.get(month);
        break;
      }
    }
};
