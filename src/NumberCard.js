class NumberCard {
  constructor() {
    this.card = [];
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        this.card.push('5G');
        this.card.push('5G');
      } else {
        this.card.push(i + 'AR');
        this.card.push(i + 'B');
      }
    }
  }
}

export default NumberCard;
