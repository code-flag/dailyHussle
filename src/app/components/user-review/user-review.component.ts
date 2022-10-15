import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss'],
})
export class UserReviewComponent implements OnInit {

  public ratingStars = 4;
  public index = 0;
  public starNumber: any = [];
  // review date
  public rDate: any = new Date().toISOString();

  constructor() { }

  ngOnInit() {
    for (this.index = 1; this.index <= this.ratingStars; this.index++) {
      this.starNumber.push(this.index);
    }
  }

}
