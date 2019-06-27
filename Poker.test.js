const Poker = require("./Poker");

describe("does stuff", () => {
  let poker;

  beforeEach(() => {
    poker = new Poker();
  });

  describe("getHighestCard", () => {
    it("gets the highest cards", () => {
      const hand = ["8C", "9S", "3C", "9H", "4S", "7D", "2S", "5D", "3S", "6C"];
      expect(poker.getHighestCard(hand)).toBe(9);
    });

    it("handles face cards", () => {
      const hand = ["8C", "9S", "3C", "9H", "4S", "7D", "2S", "5D", "3S", "6C"];
      expect(poker.getHighestCard(hand)).toBe(9);
    });
  });

  describe("findPair", () => {
    it("finds a single pair", () => {
      const hand = ["8C", "9S", "3C", "9H", "4S", "7D", "2S", "5D", "3S", "6C"];
      expect(poker.findPair(hand)).toBe(9);
    });

    it("finds the highest value pair", () => {
      const hand = ["8C", "9S", "3C", "9H", "KS", "7D", "2S", "KD", "3S", "6C"];
      expect(poker.findPair(hand)).toBe(12);
    });
  });
});
