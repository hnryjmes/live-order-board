import Order from "../src/Order";
import { myOrder, myOrderId, myOrderType, myPrice, myQuantity, myUserId } from "./helpers/helpers";

describe("Order", () => {
  it("stores the userId", () => {
    expect(myOrder.userId).toBe(myUserId);
  });
  it("stores the quantity", () => {
    expect(myOrder.quantity).toBe(myQuantity);
  });
  it("stores the price", () => {
    expect(myOrder.price).toBe(myPrice);
  });
  it("stores the orderType", () => {
    expect(myOrder.orderType).toBe(myOrderType);
  });
  it("stores the orderId", () => {
    expect(myOrder.orderId).toBe(myOrderId);
  });
});
