import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TimelineElement} from "./main-area/timeline/timeline-element/timeline-element.component";
import {Skill} from "./sidebar/skills/skills.component";
import {PersonalInfo} from "./sidebar/personal-info/personal-info.component";
import {Repository} from "./sidebar/repository/repository.component";
import {Header} from "./header/header.component";
import {
  EDUCATION_TITLE,
  EXPERIENCE_TITLE,
  HEADER,
  INTERESTS,
  INTERESTS_TITLE,
  LANGUAGES,
  LANGUAGES_TEXT,
  PAGE_TEXT,
  PERSONAL_INFO,
  REPOSITORY,
  SKILLS,
  SKILLS_TITLE,
  TIMELINE_EDUCATION,
  TIMELINE_PROFESSIONAL_EXPERIENCE1,
  TIMELINE_PROFESSIONAL_EXPERIENCE2
} from "./app.constants";

const PRINT_MESSAGE = "Select your pdf printer in the following dialogue. Please activate the “Background graphics” option and set borders to ”none” in the print dialog to print the " +
  "layout correctly. Please make sure that your layout has no overflows to the total page size, otherwise the print function " +
  "of your browser will scale the content, which leads to unwanted effects.";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  public readonly header: Header = HEADER;
  public readonly pageText = PAGE_TEXT;

  public readonly skillTitle = SKILLS_TITLE;
  public readonly skills: Skill[] = SKILLS;
  public readonly personalInfo: PersonalInfo = PERSONAL_INFO;

  public readonly languagesText = LANGUAGES_TEXT;
  public readonly languages = LANGUAGES;

  public readonly interestsTitle = INTERESTS_TITLE;
  public readonly interests = INTERESTS;

  public readonly repository: Repository = REPOSITORY;

  public readonly timelineProfessionalExperienceTitle = EXPERIENCE_TITLE;
  public readonly timeLineProfessionalExperience1: Array<TimelineElement> = TIMELINE_PROFESSIONAL_EXPERIENCE1;
  public readonly timeLineProfessionalExperience2: Array<TimelineElement> = TIMELINE_PROFESSIONAL_EXPERIENCE2;

  public readonly timelineEducationTitle = EDUCATION_TITLE;
  public readonly timeLineEducation: Array<TimelineElement> = TIMELINE_EDUCATION;

  public print(): void{
    alert(PRINT_MESSAGE);
    window.print();
  }
}
