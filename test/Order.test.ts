import Order from "../src/Order";
import * as t from "./helpers/testHelpers";

describe("Order", () => {
  const myOrderA = new Order(
    t.userIdA,
    t.quantityA,
    t.priceA,
    t.orderTypeA,
    t.orderIdA,
  );

  it("stores the userId", () => {
    expect(myOrderA.userId).toBe(t.userIdA);
  });

  it("stores the quantity", () => {
    expect(myOrderA.quantity).toBe(t.quantityA);
  });

  it("stores the price", () => {
    expect(myOrderA.price).toBe(t.priceA);
  });

  it("stores the orderType", () => {
    expect(myOrderA.orderType).toBe(t.orderTypeA);
  });

  it("stores the orderId", () => {
    expect(myOrderA.orderId).toBe(t.orderIdA);
  });
});
