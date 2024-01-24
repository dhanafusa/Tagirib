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
    let startIndex = [];
    let endIndex = [];
    let text = '';

    for (let i = 0; i < p.handCard.length - 1; i++) {
      if (parseInt(p.handCard[i].slice(0, 1)) + 1 === parseInt(p.handCard[i + 1].slice(0, 1))) {
        startIndex.push(i);
        let j;

        for (j = i + 1; j < p.handCard.length - 1; j++) {
          if (parseInt(p.handCard[j].slice(0, 1)) + 1 !== parseInt(p.handCard[j + 1].slice(0, 1))) {
            endIndex.push(j);
            break;
          }
        }

        if (j === p.handCard.length - 1) {
          endIndex.push(j);
        }

        i = j - 1;
      }
    }

    for (let i = 0; i < startIndex.length; i++) {
      text += `左から${startIndex[i] + 1}番目から${endIndex[i] + 1}番目`;
      if (i < startIndex.length - 1) {
        text += 'と、';
      }
    }

    if (text.length === 0) {
      return '連番はありません';
    }

    return `${text}が連番です`;
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
