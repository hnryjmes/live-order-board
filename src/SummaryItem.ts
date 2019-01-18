import OrderType from "./interfaces/OrderType";
import Price from "./interfaces/Price";
import Quantity from "./interfaces/Quantity";
import Order from "./Order";

export default class SummaryItem {
  public readonly quantity: Quantity;
  public readonly price: Price;
  public readonly orderType: OrderType;

  constructor(quantity: Quantity, price: Price, orderType: OrderType) {
    this.quantity = quantity;
    this.price = price;
    this.orderType = orderType;
  }
}
