import Player from './Player.js';
import Dealer from './Dealer.js';
import NumberCard from './NumberCard.js';
import { redSum, blueSum, AnotherQuestion, ConsecutiveNumbers, threeFromLargest } from './DetailQuestionCard.js';

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

// 連番の表示をするコード
if (consecutivePairs.length > 0) {
  const messages = consecutivePairs.map((pair) => {
    const leftIndex = pair[0] + 1;
    const rightIndex = pair[1] + 1;
    return `左から${leftIndex}番目と${rightIndex}番目`;
  });

  const resultMessage = `${messages.join('、')}が連番です。`;
  console.log(resultMessage);
} else {
  console.log('連番はありません。');
}

// 他のクラスも同様にインスタンス化
