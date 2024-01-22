class DetailQuestionCard {
  constructor() {
    this.question = '';
  }
  answer(p) {}
}

class redSum extends DetailQuestionCard {
  constructor() {
    super();
    this.question = '赤の数の合計は？';
  }
  answer(p) {
    let count = 0;
    for (const s of p.handCard) {
      if (s.includes('AR')) {
        count++;
      }
    }
    return count;
  }
}

class blueSum extends DetailQuestionCard {
  constructor() {
    super();
    this.question = '青の数の合計は？';
  }
  answer(p) {
    let count = 0;
    for (const s of p.handCard) {
      if (s.includes('B')) {
        count++;
      }
    }
    return count;
  }
}
// 他のクラスもここでエクスポート
class AnotherQuestion extends DetailQuestionCard {
  constructor() {
    super();
    // 他のクラスのコンストラクタ処理
  }
  answer(p) {
    // 他のクラスのanswerメソッド処理
  }
}

class threeFromLargest extends DetailQuestionCard {
  constructor() {
    super();
    this.question = '大きいほうから3つの合計は?';
    // 他のクラスのコンストラクタ処理
  }
  answer(p) {
    let sum = 0;
    for (let i = p.handCard.length - 1; i > p.handCard.length - 4; i--) {
      sum += parseInt(p.handCard[i].slice(0, 1));
    }
    return sum;
  }
}
// 他のクラスも同様に追加

export {
  DetailQuestionCard,
  blueSum,
  redSum,
  AnotherQuestion,
  threeFromLargest,
  // 他のクラスもここに追加
};
