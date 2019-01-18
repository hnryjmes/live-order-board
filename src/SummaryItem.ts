import OrderType from "./interfaces/OrderType";
import Price from "./interfaces/Price";
import Quantity from "./interfaces/Quantity";
import Order from "./Order";

export default class SummaryItem {
  public quantity: Quantity;
  public price: Price;
  public orderType: OrderType;

  constructor(quantity: Quantity, price: Price, orderType: OrderType) {
    this.quantity = quantity;
    this.price = price;
    this.orderType = orderType;
  }

  public mergeAndAddQuantity(order: Order) {
    this.quantity.quantity += order.quantity.quantity;
    this.quantity.unit = order.quantity.unit;
    this.price = order.price;
    this.orderType = order.orderType;
  }
}
