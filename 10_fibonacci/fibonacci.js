const fibonacci = function (n) {
  // Convert input to number if it's a string
  n = Number(n);
  if (isNaN(n) || n % 1 !== 0 || n <= 0) {
    return "OOPS";
  }

  let a = 0,
    b = 1,
    next;
  for (let i = 1; i < n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
