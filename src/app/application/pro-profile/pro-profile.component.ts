/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-pro-profile',
  templateUrl: './pro-profile.component.html',
  styleUrls: ['./pro-profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProProfileComponent implements OnInit {
  public category: Array<any> = [
    { id: 1, name: 'Lighting', image: '../../../assets/images/electrician1.jpg' },
    { id: 2, name: 'Troubleshooting', image: '../../../assets/images/electrician2.jpg' },
    { id: 3, name: 'Installation', image: '../../../assets/images/electrician3.jpg' },
    { id: 4, name: 'Cleaning', image: '../../../assets/images/cleaner1.jpg' },
    { id: 5, name: 'Cleaning', image: '../../../assets/images/cleaner3.jpg' },
    { id: 6, name: 'Catering', image: '../../../assets/images/caterer2.jpg' },
  ];
  public gallery: Array<any> = [
    '../../../assets/images/electrician1.jpg',
    '../../../assets/images/electrician2.jpg',
    '../../../assets/images/electrician3.jpg',
    '../../../assets/images/cleaner3.jpg',
    '../../../assets/images/cleaner2.webp',
    '../../../assets/images/plumber1.jpg',
    '../../../assets/images/plumber4.jpg',
    '../../../assets/images/plumber3.jpg',
    '../../../assets/images/breaklayer3.jpg',
  ];

  public isViewGallery = false;
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

  controlGallery(event: string) {
    if (event === 'open') {
      this.isViewGallery = true;
    }
    else {
      this.isViewGallery = false;
    }
  }
  ngOnInit() { }

}
