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

    const uniquePricesKeys = Object.keys(ordersByPrice);

    uniquePricesKeys.map((price) => {
      orders.map((order) => {
        if (order.price.price.toString() === price) {
          ordersByPrice[price].push(order);
        }
      });
    });

    uniquePricesKeys.map((price) => {
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
