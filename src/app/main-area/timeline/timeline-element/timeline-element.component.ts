import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export interface TimelineElement {
  timeText: string;
  primaryText: string;
  secondaryText: string;
  activities: string[];
  link?: string;
}

@Component({
  selector: 'app-timeline-element',
  templateUrl: './timeline-element.component.html',
  styleUrls: ['./timeline-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineElementComponent {
  @Input() timelineElement: TimelineElement = {
    timeText: '',
    primaryText: '',
    secondaryText: '',
    activities: [],
  };

  @Input() dottedHeight = 0;
}
