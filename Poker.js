const fs = require("fs");

class Poker {
  constructor() {
    this.faceCards = { T: 10, J: 11, Q: 12, K: 13, A: 14 };
  }
  readFile() {
    var data = fs.readFileSync("./files/hands.txt", "utf8");
    this.determineWinnerPerHand(data.split("\n"));
  }

  determineWinnerPerHand(hands) {
    hands.map(h => this.determineWinner(h));
  }

  determineWinner(h) {
    let cards = h.split(" ");
    let p1 = cards.slice(0, 5);
    let p2 = cards.slice(5);
    let r1 = this.getResult(p1);
    let r2 = this.getResult(p2);
    console.log(r1, r2);
    if (r1 > r2) {
      console.log("Player 1 wins!");
      return "Player 1 wins!";
    } else {
      console.log("Player 2 wins!");
      return "Player 2 wins!";
    }
  }

  getResult(hand) {
    return this.getHighestCard(hand);
  }

  findPair(hand) {
    let rankArr = [];
    let pairVal = null;
    hand.map(c => {
      let rank = c.split("")[0];
      if (Object.keys(this.faceCards).includes(rank)) {
        rank = this.faceCards[rank];
      } else {
        rank = parseInt(rank);
      }
      rankArr.push(rank);
    });

    rankArr.sort();
    console.log(rankArr);

    for (let i = 1; i < rankArr.length; i++) {
      if (rankArr[i] === rankArr[i - 1]) {
        pairVal = rankArr[i];
      }
    }

    return pairVal;
  }

  getHighestCard(hand) {
    let count = 0;
    hand.map(c => {
      let rank = c.split("")[0];
      if (Object.keys(this.faceCards).includes(rank)) {
        rank = this.faceCards[rank];
      } else {
        rank = parseInt(rank);
      }
      if (rank > count) {
        count = rank;
      }
    });
    return count;
  }
}

module.exports = Poker;
