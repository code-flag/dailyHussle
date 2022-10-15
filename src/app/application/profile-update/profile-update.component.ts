/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss'],
})
export class ProfileUpdateComponent implements OnInit {
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
