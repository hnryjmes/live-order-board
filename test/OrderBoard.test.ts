import Order from "../src/Order";
import OrderBoard from "../src/OrderBoard";
import OrderType from "../src/OrderType";
import Price from "../src/Price";
import Quantity from "../src/Quantity";
import UserId from "../src/UserId";

describe("OrderBoard", () => {
  describe(".register", () => {
    const myUserId: UserId = { userId: 1 };
    const myQuantity: Quantity = { quantity: 3.5 };
    const myPrice: Price = { price: 306 };
    const myOrderType: OrderType = { orderType: "SELL" };
    const myOrder: Order = new Order(myUserId, myQuantity, myPrice, myOrderType);

    it("registers a new order", () => {
      OrderBoard.register(myOrder);
      expect(OrderBoard.orders).toContain(myOrder);
    });
  });
});