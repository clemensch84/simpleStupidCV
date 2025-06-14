import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export interface Skill {
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  @Input() skills: Skill[] = [];
  @Input() title: string = "Skills";
}
