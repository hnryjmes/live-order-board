import SummaryItem from "../src/SummaryItem";
import { mySummaryItem1,
  mySummaryOrderType1,
  mySummaryPrice1,
  mySummaryQuantity1,
} from "./helpers/helpers";

describe("SummaryItem", () => {
  it("stores the total quantity", () => {
    expect(mySummaryItem1.quantity).toEqual(mySummaryQuantity1);
  });

  it("stores the price", () => {
    expect(mySummaryItem1.price).toEqual(mySummaryPrice1);
  });

  it("stores the order type", () => {
    expect(mySummaryItem1.orderType).toEqual(mySummaryOrderType1);
  });
});
