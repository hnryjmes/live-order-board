import SummaryItem from "../src/SummaryItem";
import * as t from "./helpers/testHelpers";

describe("SummaryItem", () => {
  it("stores the total quantity", () => {
    expect(t.summaryItem1.quantity).toEqual(t.summaryQuantity1);
  });

  it("stores the price", () => {
    expect(t.summaryItem1.price).toEqual(t.summaryPrice1);
  });

  it("stores the order type", () => {
    expect(t.summaryItem1.orderType).toEqual(t.summaryOrderType1);
  });
});
