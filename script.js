import Player from './src/Player.js';
import Dealer from './src/Dealer.js';
import NumberCard from './src/NumberCard.js';
import { redSum, blueSum, AnotherQuestion, ConsecutiveNumbers, threeFromLargest } from './src/DetailQuestionCard.js';

let p1 = new Player('.yourCard');
let p2 = new Player('.Card');

let nc = new NumberCard();
let d = new Dealer(nc.card);

d.dealCard(p1, p2);

p1.displayHandCard();
p2.displayHandCard();

let c3 = new redSum();
console.log(c3.answer(p1));

let c2 = new blueSum();
console.log(c2.answer(p1));

let c1 = new threeFromLargest();
console.log(c1.answer(p1));

// ConsecutiveNumbersを使用して連番のペアを取得する例
const c0 = new ConsecutiveNumbers();
const consecutivePairs = c0.answer(p1);
console.log(consecutivePairs);
