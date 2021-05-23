var faker = require("faker");

var requested_timestamp_pure = faker.date.past();
var requested_timestamp = formatDate(requested_timestamp_pure.toISOString());

var pickup_timestamp_pure = new Date(requested_timestamp_pure.getTime());
pickup_timestamp_pure.setMinutes(
  requested_timestamp_pure.getMinutes() + getFakeNumber(1, 5)
);
var pickup_timestamp = formatDate(pickup_timestamp_pure.toISOString());
var dropoff_timestamp_pure = new Date(pickup_timestamp_pure.getTime());
dropoff_timestamp_pure.setMinutes(
  requested_timestamp_pure.getMinutes() + getFakeNumber(1, 5)
);
var dropoff_timestamp = formatDate(dropoff_timestamp_pure.toISOString());
var pickup_address = faker.address.nearbyGPSCoordinate(
  [39.7837304, -100.4458825],
  1000,
  false
);
var requested_lat = pickup_address[0];
var requested_lng = pickup_address[1];
var destination_address = faker.address.nearbyGPSCoordinate(
  [requested_lat, requested_lng],
  30,
  false
);

write();

async function write() {
  var pickup_address_text = await getAddress(requested_lat, requested_lng); //'pickup_address_text';
  var destination_address_text = await getAddress(
    destination_address[0],
    destination_address[1]
  ); //'destination_address_text'; //

  var dropoff_lat = destination_address[0];
  var dropoff_long = destination_address[1];

  var record = {
    status: "finished",
    requested_timestamp: requested_timestamp,
    requested_lat: requested_lat,
    requested_lng: requested_lng,
    pickup_timestamp: pickup_timestamp,
    pickup_address: pickup_address_text,
    pickup_lat: requested_lat,
    pickup_lng: requested_lng,
    destination_address: destination_address_text,
    dropoff_timestamp: dropoff_timestamp,
    dropoff_lat: dropoff_lat,
    dropoff_long: dropoff_long,
  };

  var json = JSON.stringify(record);
  console.log(json);
}

function getFakeNumber(a, b) {
  return faker.datatype.number({ min: a, max: b }); // Function returns the product of a and b
}

function formatDate(a) {
  return a.replace("T", " ").substring(0, a.length - 5) + " UTC"; // Function returns the product of a and b
}

async function getAddress(a, b) {
  var count = 0;
  //console.log("https://nominatim.openstreetmap.org/reverse?format=json&lat=" + a + "&lon=" + b +"&zoom=18&addressdetails=1");
  await fetch(
    "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
      a +
      "&lon=" +
      b +
      "&zoom=18&addressdetails=1"
  ).then(async (response) => {
    Object.values(await response.json()).forEach((key) => {
      count++;
      if (count == 7) {
        console.log(key);
      }
    });
  });
}
