import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-area-pill',
  templateUrl: './main-area-pill.component.html',
  styleUrls: ['./main-area-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainAreaPillComponent {
  @Input() text = '';
}
