// Arithmatic, Geometric or No pattern
// No Negative Numbers

function mathSequence(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }

  //   console.log(arith);
  //   console.log(geo);

  if (arith.size === 1) {
    return "Arithmetic";
  }
  if (geo.size === 1) {
    return "Geometic";
  }
  return -1;
}

console.log(mathSequence([2, 4, 6, 8]));
// Arithmatic
console.log(mathSequence([3, 9, 27]));
// Geometric
console.log(mathSequence([2, 5, 14, 89]));
