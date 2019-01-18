import OrderType from "./interfaces/OrderType";
import Price from "./interfaces/Price";
import Quantity from "./interfaces/Quantity";
import Order from "./Order";
import SummaryItem from "./SummaryItem";

export default class OrderBoard {
  public static orders: Order[] = [];

  public static register(orderToRegister: Order) {
    OrderBoard.orders.push(orderToRegister);
  }

  public static cancel(orderToCancel: Order) {
    OrderBoard.orders = OrderBoard.orders.filter((order) => order !== orderToCancel);
  }

  public static cancelAll() {
    OrderBoard.orders = [];
  }

  public static summarize(): SummaryItem[] {
    const orders = OrderBoard.orders.slice();
    const summaryItems: SummaryItem[] = [];

    // Convert orders to summary items without merging
    // OrderBoard.orders.map((order) => {
    //   summaryItems.push(new SummaryItem(order.quantity, order.price, order.orderType));
    // });

    // Loop through orders checking the price
    // If a SummaryItem with that price does not already exist
    // Create a new SummaryItem
    // Else update the existing SummaryItem with a new quantity

    const prices = orders.map((order) => {
      return order.price.price;
    });

    const uniquePrices = prices.filter((price, index) => {
      return prices.indexOf(price) === index;
    });

    const ordersByPrice: any = {};

    uniquePrices.map((price) => {
      ordersByPrice[price] = [];
    });

    Object.keys(ordersByPrice).map((price) => {
      orders.map((order) => {
        if (order.price.price.toString() === price) {
          ordersByPrice[price].push(order);
        }
      });
    });

    Object.keys(ordersByPrice).map((price) => {
      const mySummaryQuantity: Quantity = { quantity: 0, unit: ""};
      const mySummaryPrice: Price = { price: 0, currency: "" };
      const mySummaryOrderType: OrderType = { orderType: "" };
      const mySummaryItem = new SummaryItem(mySummaryQuantity, mySummaryPrice, mySummaryOrderType);

      ordersByPrice[price].map((order: Order) => {
        mySummaryItem.mergeAndAddQuantity(order);
      });

      summaryItems.push(mySummaryItem);
    });

    return summaryItems;
  }
}
