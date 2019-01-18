import SummaryItem from "../src/SummaryItem";
import { mySummaryItem, mySummaryQuantity } from "./helpers/helpers";

describe("SummaryItem", () => {
  it("stores the total quantity", () => {
    expect(mySummaryItem.quantity).toEqual(mySummaryQuantity);
  });
});
