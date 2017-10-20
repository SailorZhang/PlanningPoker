import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [
    new Stock(1, "第一只股票", 1.99, 3.5, "这是第一只股票，我在慕课网学习angular实战课程。", ["IT", "互联网"]),
    new Stock(2, "第二只股票", 2.99, 2.5, "这是第二只股票，我在慕课网学习angular实战课程。", ["IT", "金融"]),
    new Stock(3, "第三只股票", 3.99, 3.4, "这是第三只股票，我在慕课网学习angular实战课程。", ["互联网"]),
    new Stock(4, "第四只股票", 4.99, 3, "这是第四只股票，我在慕课网学习angular实战课程。", ["IT"]),
    new Stock(5, "第五只股票", 5.99, 1.5, "这是第五只股票，我在慕课网学习angular实战课程。", ["IT", "互联网", "金融"]),
    new Stock(6, "第六只股票", 6.99, 5, "这是第六只股票，我在慕课网学习angular实战课程。", ["IT"]),
    new Stock(7, "第七只股票", 7.99, 4.6, "这是第七只股票，我在慕课网学习angular实战课程。", ["金融", "互联网"]),
    new Stock(8, "第八只股票", 8.99, 1, "这是第八只股票，我在慕课网学习angular实战课程。", ["互联网"]),
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number) {
    return this.stocks.find(stock => stock.id == id);
  }
}


export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public catogories: Array<string>) {
  }
}
