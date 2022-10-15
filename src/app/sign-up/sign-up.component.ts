/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public theme: boolean = false;


  constructor(
    private router: Router
  ) { }

  toggleColorTheme() {
    if (this.theme === false) {
      this.theme = true;
    }
    else {
      this.theme = false;
    }
  }

  navigateTo(){
    this.router.navigate(['/login']);
  }
  ngOnInit() { }

}
