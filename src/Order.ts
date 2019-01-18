import OrderType from "./OrderType";
import Price from "./Price";
import Quantity from "./Quantity";
import UserId from "./UserId";

export default class Order {
  public userId: UserId;
  public quantity: Quantity;
  public price: Price;
  public orderType: OrderType;

  constructor(userId: UserId, quantity: Quantity, price: Price, orderType: OrderType) {
    this.userId = userId;
    this.quantity = quantity;
    this.price = price;
    this.orderType = orderType;
  }
}
