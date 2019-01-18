import OrderId from "./OrderId";
import OrderType from "./OrderType";
import Price from "./Price";
import Quantity from "./Quantity";
import UserId from "./UserId";

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
