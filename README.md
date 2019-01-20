# live-order-board

A simple implementation of the SilverBars tech test in TypeScript. 

Task: build a Live Order Board for SilverBars Marketplace to display to users how much market demand there is for silver bars.

### Usage

First, clone the repository to your local machine, then navigate to the new directory created.

```sh
$ git clone https://github.com/hnryjmes/live-order-board.git
$ cd live-order-board
```

To use the app or run a manual feature test, it is recommended to use the ts-node package included in the download using npm to start a REPL.

```sh
$ npm run ts-node

> live-order-board@1.0.0 ts-node /<your directory>/live-order-board
> ts-node

> 
```

### Tests

### Design

The Live Order Board is implemented using three classes, `Order`, `OrderBoard`, and `SummaryItem`. Interfaces are used to define the acceptable inputs when creating a new `Order` object. For example, trying to create a new `Order` object with no arguments will raise a TypeScript compiler error. A new `Order` object can only be created when the arguments passed are precisely 5 objects with types corresponding to the four required fields (`UserId`, `Quantity`, `Price`, `OrderType`) and one  unique order identifier (`OrderId`). Due to TypeScript accepting duck types, input will be accepted with the same structure and properties as the defined interfaces, i.e. the interfaces are not objects that must be instantiated, but merely are guides to valid input. See 'Usage' section below for an example.

Why the unique order identifier (`OrderId`)? For this problem, specifically in order to implement the 'cancel a registered order' functionality, orders must be uniquely identifiable. In a production app, e.g. one using some kind of relational database to store order data, each order might have a unique identifier provided by the database, such as the `SERIAL PRIMARY KEY` auto-incrementing column in PostgreSQL. As in the problem statement it was made clear that no database was required, an assumption in my solution was that each order would have a unique identifier known at the time of order creation. 

### Method



### User Stories

```
As a user
I want to register an order
So I can keep track of who is buying and selling silver bars

As a user
I want to cancel an order
So I can keep my list up to date

As a user
I want to get a summary of live orders
So I can make quick decisions about the demand for silver bars

As a user
I want to see the price of 'SELL' orders ordered lowest first
So I can prioritize the information I see about future sales

As a user
I want to see the price of 'BUY' orders ordered highest first
So I can prioritize the information I see about future purchases
```
