/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-trailing-spaces */

/* eslint-disable-next-line @angular-eslint/template/eqeqeq */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public category: Array<any> = [
    { id: 1, name: 'Brick-layer', icon: 'stack-line' }, 
    { id: 2, name: 'Laundry', icon: 'knife-fill' },
    { id: 3, name: 'Plumber', icon: 'knife-fill' },
    { id: 4, name: 'Brick-layer', icon: 'knife-fill' }, 
    { id: 5, name: 'Laundry', icon: 'knife-fill' },
    { id: 6, name: 'Plumber', icon: 'knife-fill' },
    { id: 7, name: 'Brick-layer', icon: 'knife-fill' }, 
    { id: 8, name: 'Laundry', icon: 'knife-fill' },
    { id: 9, name: 'Plumber', icon: 'knife-fill' },
    { id: 10, name: 'Anything', icon: 'knife-fill' }
  ];

  public activeCat: number = 1;

  theme: boolean = false;
  constructor() { }

  toggleColorTheme() {
    if (this.theme === false) {
      this.theme = true;
    }
    else {
      this.theme = false;
    }
  }
  ngOnInit() { }

}
