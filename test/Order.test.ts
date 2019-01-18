import Order from "../src/Order";

describe("Order", () => {
  it("stores the userId", () => {
    const order = new Order(1, 3.5, 306, "SELL");
    expect(order.userId).toBe(1);
  });
});
