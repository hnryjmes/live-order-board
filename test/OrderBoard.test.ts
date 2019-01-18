import OrderBoard from "../src/OrderBoard";
import {
  myOrderA,
  myOrderB,
  myOrderC,
  myOrderD,
  mySummaryItem1,
  mySummaryItem2,
  mySummaryItem3,
} from "./helpers/helpers";

describe("OrderBoard", () => {
  describe(".register", () => {
    it("registers a new order", () => {
      OrderBoard.register(myOrderA);
      expect(OrderBoard.orders).toContain(myOrderA);
    });

    it("registers and stores multiple new orders", () => {
      OrderBoard.register(myOrderB);
      expect(OrderBoard.orders).toContain(myOrderB);
    });
  });

  describe(".cancel", () => {
    it("cancels an existing order", () => {
      OrderBoard.cancel(myOrderA);
      expect(OrderBoard.orders).not.toContain(myOrderA);
    });
  });

  describe(".cancelAll", () => {
    it("cancels all orders", () => {
      OrderBoard.cancelAll();
      expect(OrderBoard.orders).toEqual([]);
    });
  });

  describe(".summarize", () => {
    it("returns the summary of orders", () => {
      OrderBoard.cancelAll();

      OrderBoard.register(myOrderA);
      OrderBoard.register(myOrderB);
      OrderBoard.register(myOrderC);
      OrderBoard.register(myOrderD);

      expect(OrderBoard.summarize()).toEqual([
        mySummaryItem1,
        mySummaryItem2,
        mySummaryItem3,
      ]);
    });
  });
});
