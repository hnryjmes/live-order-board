import Order from "../src/Order";

describe("Order", () => {
  it("stores the userId", () => {
    const order = new Order(1, 3.5, 306, "SELL");
    expect(order.userId).toBe(1);
  });
  it("stores the quantity", () => {
    const order = new Order(1, 3.5, 306, "SELL");
    expect(order.quantity).toBe(3.5);
  });
  it("stores the price", () => {
    const order = new Order(1, 3.5, 306, "SELL");
    expect(order.price).toBe(306);
  });
  it("stores the orderType", () => {
    const order = new Order(1, 3.5, 306, "SELL");
    expect(order.orderType).toBe("SELL");
  });
});
