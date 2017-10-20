import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public stock: Stock;

  constructor(public routeInfo: ActivatedRoute, public stockService: StockService, public router: Router) {

  }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params["id"];
    this.stock = this.stockService.getStock(stockId);
  }

  cancel() {
    this.router.navigateByUrl("stock");
  }

  save() {
    this.router.navigateByUrl("stock");
  }

}
