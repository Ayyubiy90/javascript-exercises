const convertToCelsius = function (fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
};

const convertToFahrenheit = function (celesius) {
  return (celesius * 9) / 5 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
