var faker = require("faker");
var names = [
  "Walking",
  "Running",
  "Outdoor biking",
  "Elliptical",
  "Sport",
  "Aerobic workout",
];

for (var i = 0; i < 30; i++) {
  var record1 = {
    activities: {
      activityId: getFakeNumber(0, 100000),
      activityParentId: getFakeNumber(0, 100000),
      calories: getFakeNumber(0, 7000),
      description: getFakeNumber(0, 15) + "mph",
      distance: getFakeNumber(0, 15) + ":" + getFakeNumber(0, 99),
      duration: getFakeNumber(0, 43200000),
      hasStartTime: getFlag(),
      isFavorite: getFlag(),
      name: names[getFakeNumber(0, names.length - 1)],
      startTime: getFakeNumber(0, 23) + ":" + getFakeNumber(0, 59),
      steps: getFakeNumber(0, 20000),
    },

    goals: {
      caloriesOut: getFakeNumber(0, 7000),
      distance: getFakeNumber(0, 15) + ":" + getFakeNumber(0, 99),
      steps: getFakeNumber(0, 20000),
    },

    summary: {
      activityCalories: getFakeNumber(0, 7000),
      caloriesBMR: getFakeNumber(0, 3000),
      caloriesOut: getFakeNumber(0, 7000),
      fairlyActiveMinutes: getFakeNumber(0, 1440),
      marginalCalories: getFakeNumber(0, 7000),
      sedentaryMinutes: getFakeNumber(0, 1440),
      veryActiveMinutes: getFakeNumber(0, 1440),
    },
  };

  var json = JSON.stringify(record1);
  console.log(json);

  function getFakeNumber(a, b) {
    return faker.datatype.number({ min: a, max: b });
  }

  function getFlag() {
    var flag = faker.datatype.number({ min: 1, max: 2 });
    if (flag == 1) return true;
    else return false;
  }
}
