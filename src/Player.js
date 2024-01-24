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

export default Player;
