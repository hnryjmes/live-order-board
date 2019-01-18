import OrderId from "../../src/interfaces/OrderId";
import OrderType from "../../src/interfaces/OrderType";
import Price from "../../src/interfaces/Price";
import Quantity from "../../src/interfaces/Quantity";
import UserId from "../../src/interfaces/UserId";
import Order from "../../src/Order";
import SummaryItem from "../../src/SummaryItem";

export const myUserId: UserId = { userId: 1 };
export const myQuantity: Quantity = { quantity: 3.5, unit: "kg" };
export const myPrice: Price = { price: 306, currency: "GBP" };
export const myOrderType: OrderType = { orderType: "SELL" };
export const myOrderId: OrderId = { orderId: 1 };

export const myOrder: Order = new Order(myUserId, myQuantity, myPrice, myOrderType, myOrderId);

export const myOtherUserId: UserId = { userId: 2 };
export const myOtherQuantity: Quantity = { quantity: 1.2, unit: "kg" };
export const myOtherPrice: Price = { price: 310, currency: "GBP" };
export const myOtherOrderType: OrderType = { orderType: "SELL" };
export const myOtherOrderId: OrderId = { orderId: 2 };

export const myOtherOrder: Order = new Order(myUserId, myQuantity, myPrice, myOrderType, myOrderId);

export const mySummaryQuantity: Quantity = { quantity: 5.5, unit: "kg" };
export const mySummaryPrice: Price = { price: 306, currency: "GBP" };
export const mySummaryOrderType: OrderType = { orderType: "SELL" };

export const mySummaryItem: SummaryItem = new SummaryItem(mySummaryQuantity, mySummaryPrice, mySummaryOrderType);
