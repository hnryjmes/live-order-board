import Order from "./Order";

export default class OrderBoard {
  public static orders: Order[] = [];

  public static register(order: Order) {
    OrderBoard.orders.push(order);
  }
}
