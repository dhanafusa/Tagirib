class Player {
  constructor(whichCard) {
    console.log(whichCard);
    this.handCard = [];
    this.handCardTable = document.querySelector(whichCard + ' tr');
    console.log(this.handCardTable);
  }
  displayHandCard() {
    for (let card of this.handCard) {
      let insertTag = document.createElement('td');
      insertTag.innerHTML = `<img src="images/${card}.png">`;
      this.handCardTable.appendChild(insertTag);
    }
  }
}

class Dealer {
  constructor(nc) {
    this.nc = nc;
  }
  dealCard(p1, p2) {
    for (let i = 0; i < 5; i++) {
      let p1ran = Math.floor(Math.random() * this.nc.length);
      p1.handCard.push(this.nc[p1ran]);
      this.nc.splice(p1ran, 1);
      let p2ran = Math.floor(Math.random() * this.nc.length);
      p2.handCard.push(this.nc[p2ran]);
      this.nc.splice(p2ran, 1);
    }
    //sort
    p1.handCard.sort();
    p2.handCard.sort();
  }
}

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

let p1 = new Player('.yourCard');
let p2 = new Player('.Card');

let nc = new NumberCard();
let d = new Dealer(nc.card);

d.dealCard(p1, p2);

p1.displayHandCard();
p2.displayHandCard();
