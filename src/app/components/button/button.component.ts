/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit, Input, Output, SimpleChange, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() { }
  
  @Input() title = 'Submit';
  @Input() titleColor: 'dark' | 'black' | 'main' | 'custom' | 'white' = 'white';
  @Input() buttonType: 'round' | 'flat' | 'curve' = 'curve';
  @Input() buttonClass: 'dark' | 'light' | 'main' | 'custom' | 'outlined-dark' | 'outlined-main' | 'outlined' = 'main';
  @Input() showIcon = false;
  @Input() iconName = '';
  @Input() iconSlot: 'start' | 'end' | 'far-start' | 'far-end' = 'start';
  @Input() loadingEffect = false;
  @Input() buttonDisabled = false;
  @Input() id: any = null;

  /** button events props */
  // eslint-disable-next-line @typescript-eslint/ban-types
  @Input () buttonClick: Function | null = null;

  /** maps `buttonClass` to the appropriate button class for color theming
   *  maps `buttonType` to the button class for shape theming
   */
  public buttonClassInUse: string;

  /** if iconSlot is `far-start` or `far-end` we will use custom css to place them correctly */
  public iconClassInUse: string;

  /**
   * @method ngOnChanges is used here to enable passing of value from parent components to the button components
   * It enable the @var buttonClass and @var buttonClassInUse to recieve new value from parent component
   */
  ngOnChanges(changes: SimpleChange) {
    // if(changes.buttonClass !== undefined)
    // {
    //   this.buttonClass = changes.buttonClass.currentValue;
    //   this.buttonClassInUse = `button-${this.buttonType} button-${this.buttonClass} button-text-color-${this.titleColor}`;
    // }
    // if(changes.loadingEffect !== undefined)
    // {
    //   this.loadingEffect =  changes.loadingEffect.currentValue;
    // }
    // if(changes.buttonDisabled !== undefined)
    // {
    //   this.buttonDisabled =  changes.buttonDisabled.currentValue;
    // }
  }



 
  ngOnInit() {

    /** create buttonClassInUse based on the buttonType and buttonClass props provided */
    this.buttonClassInUse = `button-${this.buttonType} button-${this.buttonClass} button-text-color-${this.titleColor}`;

    if (this.iconSlot === 'far-start') {
      /** Use custom css to position icon alongside with custom slot allocation */
      this.iconClassInUse = 'icon-slot-far-start';
      /** position icon slot to start */
      this.iconSlot = 'start';
    } else if (this.iconSlot === 'far-end') {
      this.iconClassInUse = 'icon-slot-far-end';
      this.iconSlot = 'end';
    }
  }
}
