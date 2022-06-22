/* eslint-disable id-blacklist */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
})
export class RatingStarComponent implements OnInit {
  constructor() {}
  public ratingNumber: number = 0;

  /** @var starRating : this is use to pass the rating value to the parent component */
  @Output() starRating: EventEmitter<number> = new EventEmitter();

  /**
   * @var {string} star1
   * @var {string} star2
   * @var {string} star3
   * @var {string} star4
   * @var {string} star5
   * : This are the varable that control the star icon type for each stars
   * */

  /** Uncomment this variable to use angular mat-icon  and chnage star-line value to star_border while star-fill should be change to just star*/
  // public star1: string = "star_border";
  // public star2: string = "star_border";
  // public star3: string = "star_border";
  // public star4: string = "star_border";
  // public star5: string = "star_border";

  /** This variable is set to use remix icon */
  public star1: string = 'star-line';
  public star2: string = 'star-line';
  public star3: string = 'star-line';
  public star4: string = 'star-line';
  public star5: string = 'star-line';


  /**
   * @method {void} getRating :  This method gets the rating star position and initiate the changes
   * @param number is used to determine the specific star postion
   */
  getRating(number: number) {
    // set the rating number
    this.ratingNumber = number;
    //emit the star rating number to the parent component
    this.starRating.emit(this.ratingNumber);
    // switch is used to set the rating color chnages as its clicked
    switch (number) {
      case 1:
        this.star1 = 'star-fill';
        this.star2 = 'star-line';
        this.star3 = 'star-line';
        this.star4 = 'star-line';
        this.star5 = 'star-line';
        break;
      case 2:
        this.star1 = 'star-fill';
        this.star2 = 'star-fill';
        this.star3 = 'star-line';
        this.star4 = 'star-line';
        this.star5 = 'star-line';
        break;
      case 3:
        this.star1 = 'star-fill';
        this.star2 = 'star-fill';
        this.star3 = 'star-fill';
        this.star4 = 'star-line';
        this.star5 = 'star-line';
        break;
      case 4:
        this.star1 = 'star-fill';
        this.star2 = 'star-fill';
        this.star3 = 'star-fill';
        this.star4 = 'star-fill';
        this.star5 = 'star-line';
        break;
      case 5:
        this.star1 = 'star-fill';
        this.star2 = 'star-fill';
        this.star3 = 'star-fill';
        this.star4 = 'star-fill';
        this.star5 = 'star-fill';
        break;
      default:
        this.star1 = 'star-line';
        this.star2 = 'star-line';
        this.star3 = 'star-line';
        this.star4 = 'star-line';
        this.star5 = 'star-line';
        break;
    }
  }
  ngOnInit() {}
}
