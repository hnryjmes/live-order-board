# Live Order Board

A simple implementation of the SilverBars tech test in TypeScript. 

Task: build a Live Order Board for SilverBars Marketplace to display to users how much market demand there is for silver bars.

## Usage

It is assumed that your environment is set up to use git and npm commands.

First, clone the repository to your local machine, then navigate to the new directory created.

```sh
$ git clone https://github.com/hnryjmes/live-order-board.git
$ cd live-order-board
```

To use the app or run a manual feature test, it is recommended to use the ts-node package included in the download to start a REPL, using npm scripts.

```sh
$ npm run ts-node

> live-order-board@1.0.0 ts-node /[your directory]/live-order-board
> ts-node

> 
```

First, import the `Order` and `OrderBoard` classes.

```sh
> import Order from "./src/Order"
{}
> import OrderBoard from "./src/OrderBoard"
undefined
```

If the arguments passed to the Order constructor are invalid, TypeScript will throw an error.

```sh
> const invalidOrder = new Order()
[eval].ts(3,22): error TS2554: Expected 5 arguments, but got 0.

undefined
```

To create a valid Order, the five arguments passed must be as defined in the interfaces, i.e. `UserId`, `Quantity`, `Price`, `OrderType`, `OrderId`. 

```sh
> const validOrder = new Order(
... { userId: 1 },
... { quantity: 3.5, unit: "kg" },
... { price: 306, currency: "GBP" },
... { orderType: "SELL" },
... { orderId: 1 }
... )
undefined
```

To register an order, call the static `register` method on `OrderBoard` and pass in the order.

```sh
> OrderBoard.register(validOrder)
undefined
```

The order can now be viewed in the `orders` array. Additionally, calling the `summarize` method now shows the order in the appropriate section (in this case, `SELL`).

```sh
> OrderBoard.orders
[ Order {
    userId: { userId: 1 },
    quantity: { quantity: 3.5, unit: 'kg' },
    price: { price: 306, currency: 'GBP' },
    orderType: { orderType: 'SELL' },
    orderId: { orderId: 1 } } ]
> OrderBoard.summarize()
{ BUY: [],
  SELL:
   [ SummaryItem { quantity: [Object], price: [Object], orderType: [Object] } ] }
>
```

## Tests

To run tests, use the npm script `npm run test`, which runs the bundled version of Jest.

```sh
$ npm run test

> live-order-board@1.0.0 test /[your directory]/live-order-board
> jest

 PASS  test/Order.test.ts
 PASS  test/OrderBoard.test.ts
 PASS  test/SummaryItem.test.ts

Test Suites: 3 passed, 3 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        0.764s, estimated 1s
Ran all test suites.
```

To run coverage, use the script `npm run coverage`, which runs Jest with the `--coverage` flag.

```sh
$ npm run coverage

> live-order-board@1.0.0 coverage /[your directory]/live-order-board
> jest --coverage

 PASS  test/Order.test.ts
 PASS  test/OrderBoard.test.ts
 PASS  test/SummaryItem.test.ts
-----------------|----------|----------|----------|----------|-------------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |      100 |      100 |      100 |      100 |      |
 src             |      100 |      100 |      100 |      100 |      |
  Order.ts       |      100 |      100 |      100 |      100 |      |
  OrderBoard.ts  |      100 |      100 |      100 |      100 |      |
  SummaryItem.ts |      100 |      100 |      100 |      100 |      |
 test/helpers    |      100 |      100 |      100 |      100 |      |
  testHelpers.ts |      100 |      100 |      100 |      100 |      |
-----------------|----------|----------|----------|----------|-------------------|

Test Suites: 3 passed, 3 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        1.097s
Ran all test suites.
```

## Design

The Live Order Board is implemented using three classes, `Order`, `OrderBoard`, and `SummaryItem`. Interfaces are used to define the acceptable inputs when creating a new `Order` object. For example, trying to create a new `Order` object with no arguments will raise a TypeScript compiler error. A new `Order` object can only be created when the arguments passed are precisely 5 objects with types corresponding to the four required fields in the problem statement (`UserId`, `Quantity`, `Price`, `OrderType`) and one  unique order identifier (`OrderId`). Due to TypeScript accepting duck types, input will be accepted with the same structure and properties as the defined interfaces, i.e. the interfaces are not objects that must be instantiated, but merely are guides to valid input. See 'Usage' section for an example.

Why the unique order identifier (`OrderId`)? For this problem, specifically in order to implement the 'cancel a registered order' functionality, orders must be uniquely identifiable. In a production app, e.g. one using some kind of relational database to store order data, each order might have a unique identifier provided by the database, such as the `SERIAL PRIMARY KEY` auto-incrementing column in PostgreSQL. As in the problem statement it was made clear that no database was required, an assumption in my solution was that each order would have a unique identifier known at the time of order creation. 

I chose to work in TypeScript rather than JavaScript, as the type checking features of TypeScript make the development process easier, plus the TypeScript compiler helpfully points out errors as you write code. I used Visual Studio Code for its native TypeScript support, plus its helpful code completion features. I used TSLint for linting, using the default config provided by `tslint --init`.  For other config e.g. Jest (`jest.config.js`) and the TypeScript compiler (`tsconfig.json`), I referred to the exemplar [TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter) repository provided by Microsoft.

I focused on object-oriented design (OOD) and used test-driven-development (TDD) throughout.

## User Stories

I wrote user stories as part of my development workflow in order to plan what tests I needed to write.

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

## Problem Statement

The problem statement can be viewed [here](./problem-statement.md).
