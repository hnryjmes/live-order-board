import Order from "../../src/Order";
import OrderId from "../../src/OrderId";
import OrderType from "../../src/OrderType";
import Price from "../../src/Price";
import Quantity from "../../src/Quantity";
import UserId from "../../src/UserId";

const myUserId: UserId = { userId: 1 };
const myQuantity: Quantity = { quantity: 3.5, unit: "kg" };
const myPrice: Price = { price: 306, currency: "GBP" };
const myOrderType: OrderType = { orderType: "SELL" };
const myOrderId: OrderId = { orderId: 1 };

const myOrder: Order = new Order(myUserId, myQuantity, myPrice, myOrderType, myOrderId);

const myOtherUserId: UserId = { userId: 2 };
const myOtherQuantity: Quantity = { quantity: 1.2, unit: "kg" };
const myOtherPrice: Price = { price: 310, currency: "GBP" };
const myOtherOrderType: OrderType = { orderType: "SELL" };
const myOtherOrderId: OrderId = { orderId: 2 };

const myOtherOrder: Order = new Order(myUserId, myQuantity, myPrice, myOrderType, myOrderId);

export { myOrder, myOtherOrder };
