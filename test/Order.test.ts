import Order from "../src/Order";

describe("Order", () => {
  let order: Order;

  beforeEach(() => {
    order = new Order(1, 3.5, 306, "SELL");
  });

  it("stores the userId", () => {
    expect(order.userId).toBe(1);
  });
  it("stores the quantity", () => {
    expect(order.quantity).toBe(3.5);
  });
  it("stores the price", () => {
    expect(order.price).toBe(306);
  });
  it("stores the orderType", () => {
    expect(order.orderType).toBe("SELL");
  });
});
