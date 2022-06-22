/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
// import { DrawerState } from 'ion-bottom-drawer';
// import { PlatformService } from 'src/app/services/platform-service/platform.service';

export enum BottomDrawerState {
  Open = 1,
  Dock = 2,
  Close = 3,
}
@Component({
  selector: 'app-bottom-drawer',
  templateUrl: './bottom-drawer.component.html',
  styleUrls: ['./bottom-drawer.component.scss'],
})
export class BottomDrawerComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() drawerState: BottomDrawerState = BottomDrawerState.Open;
  @Input() disableDrag = false;
  @Input() shouldBounce = false;
  @Input() minimumHeight = 150;
  @Input() dockedHeight = 50;
  @Input() distanceTop = 250;
  @Input() defaultDrawerHeight = 500;
  @Input() isCancelBtn = false;
  @Output() emitCancelBtn: EventEmitter<boolean> = new EventEmitter();

  /** Any of the css transition effects goes here */
  // @Input() animationType: "linear" | "ease-in" | "ease-out" | any = "cubic-bezier(.29, 1.01, 1, 0.68)";
  @Input() animationType: 'linear' | 'ease-in' | 'ease-out' | any =
    'cubic-bezier(.29, 1.01, 1, 0.98)';
  @Input() animationDuration = '0.3s';

  /** get the drawer element reference */
  @ViewChild('drawerElement', { static: false }) drawerElementRef: ElementRef;

  // this two variable below are used to set the close icon state
  toggleDrawerstate = 'open';
  iconName = 'arrow-down-s-line';

  public transitionEffect: any | null;
  // public drawerStateMode: DrawerState = DrawerState.Docked;
  /**
   * Define variables to track platform height and width
   */
  private platformHeight: number;
  private platformWidth: number;

  /**
   * Subscribe to platform notifications
   */
  // constructor(private platform: PlatformService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // this.platform.platformDetails.subscribe((details) =>
    //   this.processPlatformDataAndShowDrawer(details)
    // );
  }
  /**
   * Process the platform data provided
   */
  processPlatformDataAndShowDrawer(details) {
    const { height, width } = details;

    /**
     * for the sake of some tablet screen, any devices height above 915 will be forced to use 915
     */
    if( height > 915){
      this.platformHeight = 915;
    }else {
      this.platformHeight = height;
    }

    this.platformWidth = width;

    // console.log("drawer element", this.drawerElementRef);
    console.log(
      ' height ' +
        this.platformHeight +
        ' width: ' +
        this.platformWidth +
        'drawer height: ' +
        this.defaultDrawerHeight
    );
    console.log(' distance top provided ' + this.distanceTop);
    /**
     * update the drawer distanceTop based on the height of the device
     * we are currently using. For example, the actualDistanceTop we will
     * use will be the `this.platformHeight-this.defaultDrawerHeight`
     */
    if (this.platformHeight && this.platformHeight > this.defaultDrawerHeight) {

      this.distanceTop = this.platformHeight - this.defaultDrawerHeight;
      console.log('distance Top calculated: ' + this.distanceTop);
    }
    console.log('minimun Height', this.minimumHeight);
    console.log('docked Height', this.dockedHeight);
    console.log('distance Top', this.distanceTop);
    /**
     * Build the drawer
     */
    this.buildTransitionEffect(this.animationDuration, this.animationType);
    // this.buildDrawerState(this.drawerState);
  }

  buildTransitionEffect = (duration: string, type: string) => {
    this.transitionEffect = `${duration} ${type}`;
  };

  // buildDrawerState = (state: BottomDrawerState) => {
  //   if (state === BottomDrawerState.Open) {
  //     this.drawerStateMode = DrawerState.Top;
  //     console.log(this.drawerStateMode, ' top new drawer mode');
  //     this.iconName = 'arrow-down-s-line';
  //     this.toggleDrawerstate = 'open';
  //   }
  //   if (state === BottomDrawerState.Close) {
  //     this.drawerStateMode = DrawerState.Bottom;
  //     console.log(this.drawerStateMode, 'Bottom new drawer mode');
  //     this.iconName = 'arrow-up-s-line';
  //     this.toggleDrawerstate = 'close';
  //   }
  //   if (state === BottomDrawerState.Dock) {
  //     this.drawerStateMode = DrawerState.Docked;
  //     console.log(this.drawerStateMode, 'Docked new drawer mode');
  //     this.iconName = 'arrow-down-s-line';
  //     this.toggleDrawerstate = 'dock';
  //   }
  // };

  ngOnChanges(change: SimpleChanges) {
    const { distanceTop, drawerState } = change;

    // if (drawerState && drawerState.currentValue) {
    //   this.buildDrawerState(drawerState.currentValue);
    //   this.processPlatformDataAndShowDrawer({
    //     height: this.platformHeight,
    //     width: this.platformWidth
    //   })
    // }
  }

  cancelFunction() {
    this.emitCancelBtn.emit(true);
  }

  /**
   * @description - this method is used to toggle the bottom drawer state using close icon
   */
  // closeDrawer() {
  //   if (this.toggleDrawerstate == 'open') {
  //     this.buildDrawerState(BottomDrawerState.Dock);
  //   } else if (this.toggleDrawerstate == 'dock') {
  //     this.buildDrawerState(BottomDrawerState.Close);
  //   } else if (this.toggleDrawerstate == 'close') {
  //     this.buildDrawerState(BottomDrawerState.Open);
  //   }
  // }
}
