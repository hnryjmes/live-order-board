import Order from "./Order";

export default class OrderBoard {
  public static orders: Order[] = [];

  public static register(orderToRegister: Order) {
    OrderBoard.orders.push(orderToRegister);
  }

  public static cancel(orderToCancel: Order) {
    OrderBoard.orders = OrderBoard.orders.filter((order) => order !== orderToCancel);
  }
}
