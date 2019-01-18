import OrderId from "../../src/interfaces/OrderId";
import OrderType from "../../src/interfaces/OrderType";
import Price from "../../src/interfaces/Price";
import Quantity from "../../src/interfaces/Quantity";
import UserId from "../../src/interfaces/UserId";
import Order from "../../src/Order";
import SummaryItem from "../../src/SummaryItem";

export const myUserIdA: UserId = { userId: 1 };
export const myQuantityA: Quantity = { quantity: 3.5, unit: "kg" };
export const myPriceA: Price = { price: 306, currency: "GBP" };
export const myOrderTypeA: OrderType = { orderType: "SELL" };
export const myOrderIdA: OrderId = { orderId: 1 };

export const myOrderA: Order = new Order(
  myUserIdA,
  myQuantityA,
  myPriceA,
  myOrderTypeA,
  myOrderIdA,
);

export const myUserIdB: UserId = { userId: 2 };
export const myQuantityB: Quantity = { quantity: 1.2, unit: "kg" };
export const myPriceB: Price = { price: 310, currency: "GBP" };
export const myOrderTypeB: OrderType = { orderType: "SELL" };
export const myOrderIdB: OrderId = { orderId: 2 };

export const myOrderB: Order = new Order(
  myUserIdB,
  myQuantityB,
  myPriceB,
  myOrderTypeB,
  myOrderIdB,
);

export const myUserIdC: UserId = { userId: 3 };
export const myQuantityC: Quantity = { quantity: 1.5, unit: "kg" };
export const myPriceC: Price = { price: 307, currency: "GBP" };
export const myOrderTypeC: OrderType = { orderType: "SELL" };
export const myOrderIdC: OrderId = { orderId: 3 };

export const myOrderC: Order = new Order(
  myUserIdC,
  myQuantityC,
  myPriceC,
  myOrderTypeC,
  myOrderIdC,
);

export const myUserIdD: UserId = { userId: 4 };
export const myQuantityD: Quantity = { quantity: 2.0, unit: "kg" };
export const myPriceD: Price = { price: 306, currency: "GBP" };
export const myOrderTypeD: OrderType = { orderType: "SELL" };
export const myOrderIdD: OrderId = { orderId: 4 };

export const myOrderD: Order = new Order(
  myUserIdD,
  myQuantityD,
  myPriceD,
  myOrderTypeD,
  myOrderIdD,
);

export const mySummaryQuantity1: Quantity = { quantity: 5.5, unit: "kg" };
export const mySummaryPrice1: Price = { price: 306, currency: "GBP" };
export const mySummaryOrderType1: OrderType = { orderType: "SELL" };

export const mySummaryItem1: SummaryItem = new SummaryItem(
  mySummaryQuantity1,
  mySummaryPrice1,
  mySummaryOrderType1,
);

export const mySummaryQuantity2: Quantity = { quantity: 1.5, unit: "kg" };
export const mySummaryPrice2: Price = { price: 307, currency: "GBP" };
export const mySummaryOrderType2: OrderType = { orderType: "SELL" };

export const mySummaryItem2: SummaryItem = new SummaryItem(
  mySummaryQuantity2,
  mySummaryPrice2,
  mySummaryOrderType2,
);

export const mySummaryQuantity3: Quantity = { quantity: 1.2, unit: "kg" };
export const mySummaryPrice3: Price = { price: 310, currency: "GBP" };
export const mySummaryOrderType3: OrderType = { orderType: "SELL" };

export const mySummaryItem3: SummaryItem = new SummaryItem(
  mySummaryQuantity3,
  mySummaryPrice3,
  mySummaryOrderType3,
);
