import OrderId from "./interfaces/OrderId";
import OrderType from "./interfaces/OrderType";
import Price from "./interfaces/Price";
import Quantity from "./interfaces/Quantity";
import UserId from "./interfaces/UserId";

export default class Order {
  public readonly userId: UserId;
  public readonly quantity: Quantity;
  public readonly price: Price;
  public readonly orderType: OrderType;
  public readonly orderId: OrderId;

  constructor(userId: UserId, quantity: Quantity, price: Price, orderType: OrderType, orderId: OrderId) {
    this.userId = userId;
    this.quantity = quantity;
    this.price = price;
    this.orderType = orderType;
    this.orderId = orderId;
  }
}
