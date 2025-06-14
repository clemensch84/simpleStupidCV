import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {
  @Input() public pageNumber: number = 1;
}
