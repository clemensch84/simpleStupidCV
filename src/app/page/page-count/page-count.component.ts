import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-count',
  templateUrl: './page-count.component.html',
  styleUrls: ['./page-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCountComponent {
  @Input() pageNumber = 1;
  @Input() text = 'Page'
}
