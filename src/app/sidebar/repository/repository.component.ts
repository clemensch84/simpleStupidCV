import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export interface Repository {
  name: string;
  link: string;
  title: string;
}

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryComponent {
  @Input() repository: Repository = {
    title: '',
    name: '',
    link: ''
  }
}
