import Order from "../src/Order";
import OrderBoard from "../src/OrderBoard";
import OrderId from "../src/OrderId";
import OrderType from "../src/OrderType";
import Price from "../src/Price";
import Quantity from "../src/Quantity";
import UserId from "../src/UserId";

describe("OrderBoard", () => {
  const myUserId: UserId = { userId: 1 };
  const myQuantity: Quantity = { quantity: 3.5, unit: "kg" };
  const myPrice: Price = { price: 306, currency: "GBP" };
  const myOrderType: OrderType = { orderType: "SELL" };
  const myOrderId: OrderId = { orderId: 1 };
  const myOrder: Order = new Order(myUserId, myQuantity, myPrice, myOrderType, myOrderId);

  describe(".register", () => {
    it("registers a new order", () => {
      OrderBoard.register(myOrder);
      expect(OrderBoard.orders).toContain(myOrder);
    });
  });

  describe(".cancel", () => {
    it("cancels an existing order", () => {
      OrderBoard.cancel(myOrder);
      expect(OrderBoard.orders).not.toContain(myOrder);
    });
  });
});
