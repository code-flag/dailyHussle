/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
    this.router.navigate(['/app']);
  }
  ngOnInit() {}

}
