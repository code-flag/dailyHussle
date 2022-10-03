import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {


  public actionTouch = false;
  public headerTitle: string;
  /** tab control: true for tab 1 and false for tab 2 */
  public activeTab = true;
  constructor() { }

  ngOnInit() {}

  actionLinkTouch(event, eventTitle = '') {
    if (event === 'close') {
      this.actionTouch = false;
    }
    if (event === 'open') {
      this.actionTouch = true;
      this.headerTitle = eventTitle;
    }
  }

  toggleTab(tab: string = 'tab1') {
    if (tab === 'tab1') {
      this.activeTab = true;
    }
    if (tab === 'tab2') {
      this.activeTab = false;
    }
  }


}
