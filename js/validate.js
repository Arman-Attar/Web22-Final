function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var latcheck = 0, longcheck = 0, state = 0;
  var form = document.getElementById('add');
  var lat = form.Latitude.value;
  var long = form.Longitude.value;
  if (isNaN(lat) == false && lat >= -90 && lat <= 90){
    latcheck = 1;
    state++;
    var error = document.getElementById('lat');
    var message = "*";
    error.innerHTML = message;
  }
  if (isNaN(long) == false && long >= -180 && long <= 180){
    longcheck = 1;
    state++;
    var error = document.getElementById('long');
    var message = "*";
    error.innerHTML = message;
  }
  if (latcheck == 0){
    var error = document.getElementById('lat');
    var message = "* must be a valid Latitude (-90 to 90)";
    error.innerHTML = message;
}
if (longcheck == 0){
  var error = document.getElementById('long');
  var message = "* must be a valid Longitude (-180 to 180)";
  error.innerHTML = message;
}
if (state == 2){
  return true;
}
else{
  return false;
}
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
