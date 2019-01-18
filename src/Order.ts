export default class Order {
  public userId: number;
  public quantity: number;
  public price: number;
  public orderType: string;

  constructor(userId: number, quantity: number, price: number, orderType: string) {
    this.userId = userId;
    this.quantity = quantity;
    this.price = price;
    this.orderType = orderType;
  }
}
