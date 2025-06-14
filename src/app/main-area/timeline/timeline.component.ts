import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TimelineElement} from "./timeline-element/timeline-element.component";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  @Input() dottedStartHeight = 0;
  @Input() dottedEndHeight = 0;
  @Input() timeLineElements: TimelineElement[] = [];
  @Input() title = '';
}
