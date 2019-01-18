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
    it("returns the t.summary of orders", () => {
      OrderBoard.cancelAll();

      OrderBoard.register(t.orderA);
      OrderBoard.register(t.orderB);
      OrderBoard.register(t.orderC);
      OrderBoard.register(t.orderD);

      expect(OrderBoard.summarize()).toEqual([
        t.summaryItem1,
        t.summaryItem2,
        t.summaryItem3,
      ]);
    });
  });
});
