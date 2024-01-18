import Player from './Player.js';
import Dealer from './Dealer.js';
import NumberCard from './NumberCard.js';
import { RedSum, AnotherQuestion } from './DetailQuestionCard.js';

let p1 = new Player('.yourCard');
let p2 = new Player('.Card');

let nc = new NumberCard();
let d = new Dealer(nc.card);

d.dealCard(p1, p2);

p1.displayHandCard();
p2.displayHandCard();

let c0 = new RedSum();
console.log(c0.answer(p1));

let c1 = new AnotherQuestion();
console.log(c1.answer(p1));
// 他のクラスも同様にインスタンス化
