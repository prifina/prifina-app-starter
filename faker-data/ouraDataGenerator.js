var faker = require("faker");

for (var i = 0; i < 30; i++) {
  var date = faker.date.past();
  var date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);
  var record1 = {
    summary_date:
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
    day_start: date.toISOString(),
    day_end: date_end.toISOString(),
    score: getFakeNumber(0, 100),
    score_stay_active: getFakeNumber(0, 100),
    score_move_every_hour: getFakeNumber(0, 100),
    score_meet_daily_targets: getFakeNumber(0, 100),
    score_training_frequency: getFakeNumber(0, 100),
    score_training_volume: getFakeNumber(0, 100),
    score_recovery_time: getFakeNumber(0, 100),
    daily_movement: getFakeNumber(0, 10000),
    non_wear: getFakeNumber(0, 1440),
    rest: getFakeNumber(0, 1440),
    inactive: getFakeNumber(0, 1440),
    inactivity_alerts: getFakeNumber(0, 24),
    steps: getFakeNumber(0, 20000),
    cal_total: getFakeNumber(0, 7000),
    cal_active: getFakeNumber(0, 7000),
    met_min_inactive: getFakeNumber(0, 1440),
    met_min_low: getFakeNumber(0, 1440),
    met_min_medium_plus: getFakeNumber(0, 1440),
  };

  var json = JSON.stringify(record1);
  console.log(json);

  function getFakeNumber(a, b) {
    return faker.datatype.number({ min: a, max: b });
  }
}
