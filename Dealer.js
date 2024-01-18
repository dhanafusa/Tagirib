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

export default Dealer;
