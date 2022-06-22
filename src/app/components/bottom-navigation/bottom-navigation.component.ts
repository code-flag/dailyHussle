import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonTabButton, IonTabs } from '@ionic/angular';

export interface AppPageTabs {
  link: string;
  name: string;
  icon?: string;
  icon2?: string;
  index: number;
  emptyProfile?: boolean;
  profileIcon?: string;
}

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit {
  @Input() tabone: AppPageTabs;
  @Input() tabtwo: AppPageTabs;
  @Input() tabthree: AppPageTabs;
  @Input() tabfour: AppPageTabs;
  @Input() maintab: AppPageTabs;

  @Input() tabOneIcon = 'mastercard-fill';
  @Input() tabTwoIcon = 'takeaway-line';
  @Input() tabThreeIcon = 'folder-chart-fill';
  @Input() tabFourIcon = 'user-settings-fill';
  @Input() mainTabIcon = '';


  // Page tabs element
  @ViewChild('pageTabs', { static: false }) pageTabs: IonTabs;

  // Page tab elements
  @ViewChild('pageTabOne', { static: false }) pageTabOne: IonTabButton;
  @ViewChild('pageTabTwo', { static: false }) pageTabTwo: IonTabButton;
  @ViewChild('pageTabThree', { static: false }) pageTabThree: IonTabButton;
  @ViewChild('pageTabFour', { static: false }) pageTabFour: IonTabButton;
  @ViewChild('pageTabMain', { static: false }) pageTabMain: IonTabButton;

  constructor() {}

  ngOnInit() {}

  /**
   * Tabs Changed
   *
   * @author - Prince Akpabio <princeakpabio>
   *
   * @description - Track when a tab has been selected
   *
   */

  tabChanged(e: any) {
    // alert("tab changed " + JSON.stringify(e));
    const tabName = this.pageTabs.getSelected();
    const pageTabOne = this.pageTabOne.selected;
    const pageTabTwo = this.pageTabTwo.selected;
    const pageTabThree = this.pageTabThree.selected;
    const pageTabFour = this.pageTabFour.selected;
    const pageTabMain = this.pageTabMain.selected;

    if (pageTabOne) {
    } else {
    }
    if (pageTabTwo) {
    } else {
    }
    if (pageTabThree) {
    } else {
    }
    if (pageTabFour) {
    } else {
    }
    if (pageTabMain) {
    } else {
    }
    const selectedTab = JSON.stringify(this.pageTabs.getSelected());
  }
}
