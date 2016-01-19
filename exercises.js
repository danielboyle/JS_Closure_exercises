// Question 1
var total = 50;
function incrementBy(num) {
  total += num;
}
console.log(total);
incrementBy(15);
console.log(total);

// Question 2
var total = 50;
function incrementBy(num) {
  var total = 0;
  total += num;
}
console.log(total);
incrementBy(15);
console.log(total);

// Question 3
var total = 50,
    increment = 15;

function incrementBy(increment) {
  total += increment;
}
console.log(total);
incrementBy(increment);
console.log(total);
incrementBy();
console.log(total);

// Question 4
var fruit = 'apple';

function setFruitType() {
  fruit = 'banana';
}
console.log(fruit);
setFruitType();
console.log(fruit);

// Question 5
var groceries = {
  apple: 1.99,
  orange: 1.49,
};

function getTotal(items) {
  var total = 0;

  for (var item in items) {
    total += items[item];
  }

  items.total = total;
}

getTotal(groceries);
console.log(groceries.total);

// Question 6
var temperatures = [83, 99, 72, 77];

function removeLastTemperature(array) {
  return array.pop();
}

removeLastTemperature(temperatures);
console.log(temperatures);

// Question 7
var temperatures = [83, 99, 72, 77];

function average(values) {
  var sum = 0,
      len = values.length;

  for (var i = 0; i < len; i++) {
    sum += values[i];
  }

  return sum / len;
}

console.log(average(temperatures));

// Question 8
function average() {
  var sum = 0,
      len = this.length;

  for (var i = 0; i < len; i++) {
    sum += this[i];
  }

  return sum / len;
}

console.log(average(temperatures));

// Question 9
function average() {
  var sum = 0,
      len = this.length;

  for (var i = 0; i < len; i++) {
    sum += this[i];
  }

  return sum / len;
}

console.log(average.call(temperatures));
console.log(average.apply(temperatures));

// Question 10
var averageTemperature = average.bind(temperatures);
console.log(averageTemperature());

// Question 11
temperatures.push(102);
console.log(averageTemperature());

// Question 12
temperatures.average = average;
console.log(temperatures.average());
