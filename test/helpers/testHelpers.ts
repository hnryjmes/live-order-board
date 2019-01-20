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

export const userIdE = { userId: 5 };
export const quantityE = { quantity: 3.6, unit: "kg" };
export const priceE = { price: 306, currency: "GBP" };
export const orderTypeE = { orderType: "BUY" };
export const orderIdE = { orderId: 5 };

export const orderE = new Order(
  userIdE,
  quantityE,
  priceE,
  orderTypeE,
  orderIdE,
);

export const userIdF = { userId: 6 };
export const quantityF = { quantity: 1.3, unit: "kg" };
export const priceF = { price: 310, currency: "GBP" };
export const orderTypeF = { orderType: "BUY" };
export const orderIdF = { orderId: 6 };

export const orderF = new Order(
  userIdF,
  quantityF,
  priceF,
  orderTypeF,
  orderIdF,
);

export const userIdG = { userId: 7 };
export const quantityG = { quantity: 1.6, unit: "kg" };
export const priceG = { price: 307, currency: "GBP" };
export const orderTypeG = { orderType: "BUY" };
export const orderIdG = { orderId: 7 };

export const orderG = new Order(
  userIdG,
  quantityG,
  priceG,
  orderTypeG,
  orderIdG,
);

export const userIdH = { userId: 8 };
export const quantityH = { quantity: 2.1, unit: "kg" };
export const priceH = { price: 306, currency: "GBP" };
export const orderTypeH = { orderType: "BUY" };
export const orderIdH = { orderId: 8 };

export const orderH = new Order(
  userIdH,
  quantityH,
  priceH,
  orderTypeH,
  orderIdH,
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

export const summaryQuantity4 = { quantity: 5.7, unit: "kg" };
export const summaryPrice4 = { price: 306, currency: "GBP" };
export const summaryOrderType4 = { orderType: "BUY" };
export const summaryItem4 = new SummaryItem(
  summaryQuantity4,
  summaryPrice4,
  summaryOrderType4,
);

export const summaryQuantity5 = { quantity: 1.6, unit: "kg" };
export const summaryPrice5 = { price: 307, currency: "GBP" };
export const summaryOrderType5 = { orderType: "BUY" };
export const summaryItem5 = new SummaryItem(
  summaryQuantity5,
  summaryPrice5,
  summaryOrderType5,
);

export const summaryQuantity6 = { quantity: 1.3, unit: "kg" };
export const summaryPrice6 = { price: 310, currency: "GBP" };
export const summaryOrderType6 = { orderType: "BUY" };
export const summaryItem6 = new SummaryItem(
  summaryQuantity6,
  summaryPrice6,
  summaryOrderType6,
);
