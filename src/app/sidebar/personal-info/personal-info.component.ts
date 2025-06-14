import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export interface PersonalInfo {
  title: string;
  streetAndHouseNumber: string;
  city: string;
  telephoneNumber: string;
  country: string;
  email: string;
  birthday: string;
  familyStatus: string;
  children: string;
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoComponent {
  @Input() personalInfo: PersonalInfo = {
    title: '',
    streetAndHouseNumber: '',
    city: '',
    telephoneNumber: '',
    country: '',
    email: '',
    birthday: '',
    familyStatus: '',
    children: ''
  };
}
