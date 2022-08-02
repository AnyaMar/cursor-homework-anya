import './styles/styles.css';
import photo from './aseets/photo.png';

const rootElement = document.getElementById('root');
const innerDiv = document.createElement('img');
innerDiv.setAttribute('src', photo);

rootElement.append(innerDiv);

import { discount } from './functions/hm1.js';
console.log('hm1 ',discount);

import { pairs } from './functions/hm4.js';
console.log('hm4 ',pairs);

import { getRandomNumber } from './functions/hm5.js';
console.log('hm5 ',getRandomNumber(5, 10));

import { getSubjects } from './functions/hm6.js';
console.log('hm6 ',getSubjects(0));

import { getMyTaxes } from './functions/hm7.js';
import { ukraine } from './functions/hm7.js';

console.log(`hm7 - getMyTaxes: ${getMyTaxes.call(ukraine, 10000)}`);


import { Student } from './functions/hm8.js';
import { student1 } from './functions/hm8.js';
console.log('hm8 ', student1.getInfo());

import { color } from './functions/hm9.js';
console.log('hm9 ',color());

import { getRandomChinese } from './functions/hm11.js';
console.log('hm11 ',getRandomChinese(5));

