'use strict';
const cipher = {
  a: 'y',
  b: 'p',
  c: 'l',
  d: 't',
  e: 'a',
  f: 'v',
  g: 'k',
  h: 'r',
  i: 'e',
  j: 'z',
  k: 'g',
  l: 'm',
  m: 's',
  n: 'h',
  o: 'u',
  p: 'b',
  q: 'x',
  r: 'n',
  s: 'c',
  t: 'd',
  u: 'i',
  v: 'j',
  w: 'f',
  x: 'q',
  y: 'o',
  z: 'w',
};

function checkIfUpperCase(char) {
  return char === char.toUpperCase();
}

function albhedify(phrase) {
  return phrase.split('').map(chr => {
    if (cipher[chr.toLowerCase()]) {
     if (checkIfUpperCase(chr)) {
       return cipher[chr.toLowerCase()].toUpperCase();
     }
     return cipher[chr];
    }
    return chr;
  }).join('');
}

module.exports = albhedify;

