/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  constructor(private menu: MenuController, private router: Router) { }

  /**
   * this contain an array of menu to be dispaly on the side nav
   */
  public menuItem = [
    {
      id: 1,
      iconName: 'dashboard-fill',
      menuText: 'Dashboard'
    },
    {
      id: 2,
      iconName: 'taxi-wifi-line',
      menuText: 'Book a Ride'
    },
    {
      id: 3,
      iconName: 'takeaway-line',
      menuText: 'Send Parcel'
    },
    {
      id: 4,
      iconName: 'user-settings-fill',
      menuText: 'Profile'
    },
    {
      id: 5,
      iconName: 'question-line',
      menuText: 'Help & Support'
    },
  ];

  /**
   * page title
   */

  @Input() pageTitle = '';

  /**
   * Side navigation control functions. 
   */
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log('i worked');
  }

  // openEnd() {
  //   this.menu.open('end');
  // }

  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }

  /**
   * When any of the side nav links is clicks the app should route to the link
   */

  public navigateTo(route: string){
    switch(route){
     case 'Dashboard': setTimeout(
      () => this.router.navigate(['/app/users/router/dashboard']),
      1000
    ); break;
     case 'Book a Ride': setTimeout(
      () => this.router.navigate(['/app/users/router/dashboard']),
      1000
    ); break;
     case 'Send Parcel': setTimeout(
      () => this.router.navigate(['/app/parcel/parcelhome']),
      1000
    ); break;
     case 'Profile': setTimeout(
      () => this.router.navigate(['/app/users/router/profile']),
      1000
    ); break;
     case 'Help & Support': setTimeout(
      () => this.router.navigate(['/app/users/router/help']),
      1000
    ); break;
     default:break;
    }
    
  }
  ngOnInit() { }

}
