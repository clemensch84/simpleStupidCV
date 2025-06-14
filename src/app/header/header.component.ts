import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export interface Header {
  name: string;
  subtext: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() header: Header = {
    name: '',
    subtext: ''
  }
}
