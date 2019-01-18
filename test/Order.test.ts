import Order from "../src/Order";
import * as test from "./helpers/testHelpers";

describe("Order", () => {
  const myOrderA = new Order(
    test.userIdA,
    test.quantityA,
    test.priceA,
    test.orderTypeA,
    test.orderIdA,
  );

  it("stores the userId", () => {
    expect(myOrderA.userId).toBe(test.userIdA);
  });

  it("stores the quantity", () => {
    expect(myOrderA.quantity).toBe(test.quantityA);
  });

  it("stores the price", () => {
    expect(myOrderA.price).toBe(test.priceA);
  });

  it("stores the orderType", () => {
    expect(myOrderA.orderType).toBe(test.orderTypeA);
  });

  it("stores the orderId", () => {
    expect(myOrderA.orderId).toBe(test.orderIdA);
  });
});
