/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-feed',
  templateUrl: './job-feed.component.html',
  styleUrls: ['./job-feed.component.scss'],
})
export class JobFeedComponent implements OnInit {
  public jobs = [
    {
      id: 1, 
      title: 'Caterer', 
      about: 'I need someone who can handle cooking for me...', 
      time: '6:30 a.m',
      location: 'Area 1',
      amount: '#3000',
      avatar: '../../../assets/avatar/avatar_nick.png',
      'poster_name': 'Frank Loius',
      rating: '3.9'
    },
    {
      id: 2, 
      title: 'Electrician', 
      about: 'I need someone who will help me fix my socket...', 
      time: '6:30 a.m',
      location: 'Kubwa',
      amount: '#2000',
      avatar: '../../../assets/avatar/avatar_nick.png',
      'poster_name': 'James Cool',
      rating: '3.2'
    },
    {
      id: 3, 
      title: 'Brick Layer', 
      about: 'I need a brick layer at new site opp fine hotel...', 
      time: '6:30 a.m',
      location: 'Mabushi',
      amount: '#3000',
      avatar: '../../../assets/avatar/avatar_nick.png',
      'poster_name': 'Michael Clerk',
      rating: '4.5'
    },
    {
      id: 4, 
      title: 'Painter', 
      about: 'I need someone who can help me paint my room today...', 
      time: '6:30 a.m',
      location: 'Wuse',
      amount: '#2000',
      avatar: '../../../assets/avatar/avatar_nick.png',
      'poster_name': 'Agboola Mike',
      rating: '4.0'
    },
    {
      id: 5, 
      title: 'English Tutor', 
      about: 'I need someone who can do home lesson for my children...', 
      time: '6:30 a.m',
      location: 'Abuja',
      amount: '#1500',
      avatar: '../../../assets/avatar/avatar_nick.png',
      'poster_name': 'Adewale Morenike',
      rating: '4.9'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
