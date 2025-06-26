import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-generic-sidebar-list',
  templateUrl: './generic-sidebar-list.component.html',
  styleUrls: ['./generic-sidebar-list.component.scss']
})
export class GenericSidebarList {
  @Input() listTitle = 'myList'
  @Input() ListElements: string[] = [];
}
