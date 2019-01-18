import SummaryItem from "../src/SummaryItem";
import { mySummaryItem, mySummaryOrderType, mySummaryPrice, mySummaryQuantity } from "./helpers/helpers";

describe("SummaryItem", () => {
  it("stores the total quantity", () => {
    expect(mySummaryItem.quantity).toEqual(mySummaryQuantity);
  });

  it("stores the price", () => {
    expect(mySummaryItem.price).toEqual(mySummaryPrice);
  });

  it("stores the order type", () => {
    expect(mySummaryItem.orderType).toEqual(mySummaryOrderType);
  });
});
