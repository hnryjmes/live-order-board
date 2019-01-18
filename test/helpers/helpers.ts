import OrderId from "../../src/interfaces/OrderId";
import OrderType from "../../src/interfaces/OrderType";
import Price from "../../src/interfaces/Price";
import Quantity from "../../src/interfaces/Quantity";
import UserId from "../../src/interfaces/UserId";
import Order from "../../src/Order";

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

export { myUserId, myQuantity, myPrice, myOrderType, myOrderId, myOrder, myOtherOrder };
