import Order from "../src/Order";
import { myOrderA,
  myOrderIdA,
  myOrderTypeA,
  myPriceA,
  myQuantityA,
  myUserIdA,
} from "./helpers/helpers";

describe("Order", () => {
  it("stores the userId", () => {
    expect(myOrderA.userId).toBe(myUserIdA);
  });
  it("stores the quantity", () => {
    expect(myOrderA.quantity).toBe(myQuantityA);
  });
  it("stores the price", () => {
    expect(myOrderA.price).toBe(myPriceA);
  });
  it("stores the orderType", () => {
    expect(myOrderA.orderType).toBe(myOrderTypeA);
  });
  it("stores the orderId", () => {
    expect(myOrderA.orderId).toBe(myOrderIdA);
  });
});
