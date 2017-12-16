const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appenKitten(name) {
  arr = [...kittens];
  arr.push(name);
  return arr;
}

function prependKitten(name) {
  arr = [...kittens];
  arr.unshift(kittens);
  return arr;
}

function removeLastKitten() {
  arr = [...kittens];
  arr.pop();
  return arr;
}

function removeFirstKitten() {
  arr = [...kittens];
  arr.shift();
  return arr;
}