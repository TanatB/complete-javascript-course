// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const xyz = "23";

const calcAge = (birthYear) => 2037 - birthYear;

// Q1
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - What is the temp amplitude? Answer: Diff between highest & lowest temp
// - How to compute the max and min temp?
// - What's the sensor error? And what to do when it occur?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`max & min: ${max}, ${min}`);
  return max - min;
};

const amplitude = calcTempAmplitude([3, 7, 4, 11]);
console.log(`amplitude: ${amplitude}`);

//Q2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! just merge 2 arrays

// 2) Breaking up the problems
// - Merge 2 arrays

// 3) Do more researches

// 4) write pseudo code

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`max & min: ${max}, ${min}`);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// 63. Fix bugs & Debugging
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) Fix the bug
    // value: Number(prompt("Degrees Celsius")),
    value: 10,
  };

  // B Inspect the value
  console.log(measurement);
  console.table(measurement);

  // Fomatting the log
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());

// 64. Coding Challenge #1
function printForecast(data) {
  let str = "...";
  for (let i = 0; i < data.length; i++) {
    str += `${data[i]}c in ${i + 1} days...`;
  }
  console.log(str);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
