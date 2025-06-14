import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar-pill',
  templateUrl: './sidebar-pill.component.html',
  styleUrls: ['./sidebar-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarPillComponent {
  @Input() text: string = '';

}
