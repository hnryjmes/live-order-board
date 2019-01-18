import OrderBoard from "../src/OrderBoard";
import { myOrder, myOtherOrder } from "./helpers/helpers";

describe("OrderBoard", () => {
  describe(".register", () => {
    it("registers a new order", () => {
      OrderBoard.register(myOrder);
      expect(OrderBoard.orders).toContain(myOrder);
    });

    it("registers and stores multiple new orders", () => {
      OrderBoard.register(myOtherOrder);
      expect(OrderBoard.orders).toContain(myOtherOrder);
    });
  });

  describe(".cancel", () => {
    it("cancels an existing order", () => {
      OrderBoard.cancel(myOrder);
      expect(OrderBoard.orders).not.toContain(myOrder);
    });
  });
});
