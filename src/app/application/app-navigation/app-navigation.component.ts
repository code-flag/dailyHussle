/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { AppPageTabs } from 'src/app/components/bottom-navigation/bottom-navigation.component';
@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss'],
})
export class AppNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  tabOneValues: AppPageTabs = {
    link: "job-feed",
    name: "Works",
    icon: "stack-line",
    index: 1,
  };
  tabThreeValues: AppPageTabs = {
    link: "inbox",
    name: "Message",
    icon: "chat-smile-2-line",
    index: 3,
  };
  tabFourValues: AppPageTabs = {
    link: "profile",
    name: "Profile",
    icon:  "user-settings-line",
    emptyProfile: true,
    index: 4,
  };
  tabTwoValues: AppPageTabs = {
    link: "notification",
    name: "Notification",
    icon: "notification-line", // flow-chart shield-check-line
    index: 2,
  };

  /** home/ dashboard tab */
  mainTabValues: AppPageTabs = {
    link: "home",
    name: "Home",
    icon2: "home-8-line",
    index: 0,
  };

}
