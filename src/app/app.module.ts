import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderPictureComponent } from './header/header-picture/header-picture.component';
import { SidebarPillComponent } from './sidebar/sidebar-pill/sidebar-pill.component';
import { PersonalInfoComponent } from './sidebar/personal-info/personal-info.component';
import { SkillsComponent } from './sidebar/skills/skills.component';
import { PageCountComponent } from './page/page-count/page-count.component';
import { MainAreaPillComponent } from './main-area/main-area-pill/main-area-pill.component';
import {NgOptimizedImage} from "@angular/common";
import { PageComponent } from './page/page.component';
import { TimelineComponent } from './main-area/timeline/timeline.component';
import { TimelineElementComponent } from './main-area/timeline/timeline-element/timeline-element.component';
import { RepositoryComponent } from './sidebar/repository/repository.component';
import { GenericSidebarList } from './sidebar/languages/generic-sidebar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderPictureComponent,
    SidebarPillComponent,
    PersonalInfoComponent,
    SkillsComponent,
    PageCountComponent,
    MainAreaPillComponent,
    PageComponent,
    TimelineComponent,
    TimelineElementComponent,
    RepositoryComponent,
    GenericSidebarList
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
