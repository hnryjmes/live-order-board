import OrderBoard from "../src/OrderBoard";
import * as t from "./helpers/testHelpers";

describe("OrderBoard", () => {
  describe(".register", () => {
    it("registers a new order", () => {
      OrderBoard.register(t.orderA);
      expect(OrderBoard.orders).toContain(t.orderA);
    });

    it("registers and stores multiple new orders", () => {
      OrderBoard.register(t.orderB);
      expect(OrderBoard.orders).toContain(t.orderB);
    });
  });

  describe(".cancel", () => {
    it("cancels an existing order", () => {
      OrderBoard.cancel(t.orderA);
      expect(OrderBoard.orders).not.toContain(t.orderA);
    });
  });

  describe(".cancelAll", () => {
    it("cancels all orders", () => {
      OrderBoard.cancelAll();
      expect(OrderBoard.orders).toEqual([]);
    });
  });

  describe(".summarize", () => {
    it("returns the summary for SELL orders", () => {
      OrderBoard.cancelAll();

      OrderBoard.register(t.orderA);
      OrderBoard.register(t.orderB);
      OrderBoard.register(t.orderC);
      OrderBoard.register(t.orderD);

      expect(OrderBoard.summarize()).toEqual({
        BUY: [],
        SELL: [
          t.summaryItem1,
          t.summaryItem2,
          t.summaryItem3,
        ],
      });
    });

    it("returns the summary for BUY orders", () => {
      OrderBoard.cancelAll();

      OrderBoard.register(t.orderE);
      OrderBoard.register(t.orderF);
      OrderBoard.register(t.orderG);
      OrderBoard.register(t.orderH);

      expect(OrderBoard.summarize()).toEqual({
        BUY: [
          t.summaryItem6,
          t.summaryItem5,
          t.summaryItem4,
        ],
        SELL: [],
      });
    });

    it("returns the summary for SELL and BUY orders", () => {
      OrderBoard.cancelAll();

      OrderBoard.register(t.orderA);
      OrderBoard.register(t.orderB);
      OrderBoard.register(t.orderC);
      OrderBoard.register(t.orderD);

      OrderBoard.register(t.orderE);
      OrderBoard.register(t.orderF);
      OrderBoard.register(t.orderG);
      OrderBoard.register(t.orderH);

      expect(OrderBoard.summarize()).toEqual({
        BUY: [
          t.summaryItem6,
          t.summaryItem5,
          t.summaryItem4,
        ],
        SELL: [
          t.summaryItem1,
          t.summaryItem2,
          t.summaryItem3,
        ],
      });
    });
  });
});
