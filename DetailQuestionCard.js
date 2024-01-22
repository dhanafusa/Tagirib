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

class ConsecutiveNumbers extends DetailQuestionCard {
  constructor() {
    super();
    this.question = '連番になっているカードはどこ？';
  }

  answer(p) {
    const consecutiveRanges = [];

    let currentConsecutiveRange = [1];

    for (let i = 1; i < p.handCard.length; i++) {
      const currentNumber = parseInt(p.handCard[i].slice(0, -1));
      const prevNumber = parseInt(p.handCard[i - 1].slice(0, -1));

      if (currentNumber - prevNumber === 1) {
        // 連番の場合、i番目も連番に含める
        currentConsecutiveRange.push(i + 1);
      } else {
        // 連番でない場合、現在の連番が2つ以上であれば追加
        if (currentConsecutiveRange.length >= 2) {
          consecutiveRanges.push([...currentConsecutiveRange]);
        }

        // 新しい連番の開始
        currentConsecutiveRange = [i + 1];
      }
    }

    // 最後の範囲が2つ以上で終わる場合
    if (currentConsecutiveRange.length >= 2) {
      consecutiveRanges.push([...currentConsecutiveRange]);
    }

    // 連続する範囲を正確に表示する処理
    const formattedRanges = consecutiveRanges.map((range) => {
      const start = range[0];
      const end = range[range.length - 1];
      const rangeDescription = range.length > 2 ? `から${end}番目まで` : `と${end}番目`;
      return `左から${start}番目${rangeDescription}が連番です`;
    });

    return formattedRanges;
  }
}

export {
  DetailQuestionCard,
  blueSum,
  redSum,
  ConsecutiveNumbers,
  AnotherQuestion,
  threeFromLargest,
  // 他のクラスもここに追加
};
