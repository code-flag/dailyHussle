import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-posting-form',
  templateUrl: './job-posting-form.component.html',
  styleUrls: ['./job-posting-form.component.scss'],
})
export class JobPostingFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  selectPaymentMethod(type: string) {
    if (type === 'male') {
      // this.genderOption2.nativeElement.checked = false;
      // this.genderOption1.nativeElement.checked = true;
      // this.gender = 'Male';
    }
    else {
      // this.genderOption1.nativeElement.checked = false;
      // this.genderOption2.nativeElement.checked = true;
      // this.gender = 'Female';
    }
  }
}
