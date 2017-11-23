import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

  @Input()
    rating: number = 0;

  @Input()
  readonly: boolean = false;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: Array<boolean>;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  setStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;

      this.ratingChange.emit(this.rating);
    }
  }

}
