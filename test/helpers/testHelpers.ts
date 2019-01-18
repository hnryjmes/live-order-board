import Order from "../../src/Order";
import SummaryItem from "../../src/SummaryItem";

export const userIdA = { userId: 1 };
export const quantityA = { quantity: 3.5, unit: "kg" };
export const priceA = { price: 306, currency: "GBP" };
export const orderTypeA = { orderType: "SELL" };
export const orderIdA = { orderId: 1 };
export const orderA = new Order(
  userIdA,
  quantityA,
  priceA,
  orderTypeA,
  orderIdA,
);

export const userIdB = { userId: 2 };
export const quantityB = { quantity: 1.2, unit: "kg" };
export const priceB = { price: 310, currency: "GBP" };
export const orderTypeB = { orderType: "SELL" };
export const orderIdB = { orderId: 2 };
export const orderB = new Order(
  userIdB,
  quantityB,
  priceB,
  orderTypeB,
  orderIdB,
);

export const userIdC = { userId: 3 };
export const quantityC = { quantity: 1.5, unit: "kg" };
export const priceC = { price: 307, currency: "GBP" };
export const orderTypeC = { orderType: "SELL" };
export const orderIdC = { orderId: 3 };

export const orderC = new Order(
  userIdC,
  quantityC,
  priceC,
  orderTypeC,
  orderIdC,
);

export const userIdD = { userId: 4 };
export const quantityD = { quantity: 2.0, unit: "kg" };
export const priceD = { price: 306, currency: "GBP" };
export const orderTypeD = { orderType: "SELL" };
export const orderIdD = { orderId: 4 };

export const orderD = new Order(
  userIdD,
  quantityD,
  priceD,
  orderTypeD,
  orderIdD,
);

export const summaryQuantity1 = { quantity: 5.5, unit: "kg" };
export const summaryPrice1 = { price: 306, currency: "GBP" };
export const summaryOrderType1 = { orderType: "SELL" };
export const summaryItem1 = new SummaryItem(
  summaryQuantity1,
  summaryPrice1,
  summaryOrderType1,
);

export const summaryQuantity2 = { quantity: 1.5, unit: "kg" };
export const summaryPrice2 = { price: 307, currency: "GBP" };
export const summaryOrderType2 = { orderType: "SELL" };
export const summaryItem2 = new SummaryItem(
  summaryQuantity2,
  summaryPrice2,
  summaryOrderType2,
);

export const summaryQuantity3 = { quantity: 1.2, unit: "kg" };
export const summaryPrice3 = { price: 310, currency: "GBP" };
export const summaryOrderType3 = { orderType: "SELL" };
export const summaryItem3 = new SummaryItem(
  summaryQuantity3,
  summaryPrice3,
  summaryOrderType3,
);
