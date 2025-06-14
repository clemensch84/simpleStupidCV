import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderPictureComponent {
  @Input() image: string = 'picture.jpg';
}
