class DetailQuestionCard {
  constructor() {
    this.question = '';
  }
  answer(p) {}
}

class RedSum extends DetailQuestionCard {
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

// 他のクラスも同様に追加

export {
  DetailQuestionCard,
  RedSum,
  AnotherQuestion,
  // 他のクラスもここに追加
};
