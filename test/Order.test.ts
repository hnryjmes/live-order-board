import Order from "../src/Order";
import OrderType from "../src/OrderType";
import Price from "../src/Price";
import Quantity from "../src/Quantity";
import UserId from "../src/UserId";

describe("Order", () => {
  const myUserId: UserId = { userId: 1 };
  const myQuantity: Quantity = { quantity: 3.5 };
  const myPrice: Price = { price: 306 };
  const myOrderType: OrderType = { orderType: "SELL" };
  const order: Order = new Order(myUserId, myQuantity, myPrice, myOrderType);

  it("stores the userId", () => {
    expect(order.userId).toBe(myUserId);
  });
  it("stores the quantity", () => {
    expect(order.quantity).toBe(myQuantity);
  });
  it("stores the price", () => {
    expect(order.price).toBe(myPrice);
  });
  it("stores the orderType", () => {
    expect(order.orderType).toBe(myOrderType);
  });
});
