import {Header} from "./header/header.component";
import {Skill} from "./sidebar/skills/skills.component";
import {PersonalInfo} from "./sidebar/personal-info/personal-info.component";
import {Repository} from "./sidebar/repository/repository.component";
import {TimelineElement} from "./main-area/timeline/timeline-element/timeline-element.component";

export const HEADER: Header = {
  name: 'John Doe',
  subtext: 'Master of Science',
};

export const PAGE_TEXT = 'PAGE';

export const SKILLS_TITLE = 'Skills';
export const SKILLS: Skill[] = [
  {name: "Coding", icon: 'fa-solid fa-code'},
  {name: "HTML5", icon: 'fa-brands fa-html5'},
  {name: "Java", icon: 'fa-brands fa-java'},
  {name: "JavaScript", icon: 'fa-brands fa-js'},
  {name: "Docker", icon: 'fa-brands fa-docker'},
  {name: "Bitbucket", icon: 'fa-brands fa-bitbucket'},
  {name: "Jira", icon: 'fa-brands fa-jira'},
  {name: "Drinking coffee", icon: 'fa-solid fa-mug-hot'}
];

export const PERSONAL_INFO: PersonalInfo = {
  title :'Personal Info',
  streetAndHouseNumber: 'Main Street 3',
  city: 'New York',
  telephoneNumber: '1234567890',
  country: 'USA',
  email: 'john.doe@mail.com',
  birthday: '01.01.2000',
  familyStatus: 'married',
  children: '2 children'
}

export const REPOSITORY: Repository = {
  title: 'GitHub Repository',
  name: 'github.com/myRepositoy',
  link: 'https://github.com/clemensch84/simpleStupidCV'
}

export const EXPERIENCE_TITLE: string = 'Professional Experience';
export const TIMELINE_PROFESSIONAL_EXPERIENCE1: Array<TimelineElement> = [
  {
    timeText: '2020-today',
    primaryText: 'DigitalOrbit GmbH – Berlin, Germany',
    secondaryText: 'Senior Software Developer',
    link: "https://www.gmbh.com",
    activities: [
      'Designed and developed scalable, cloud-based applications using Node.js and React',
      'Led architectural decisions in a microservices environment',
      'Mentored junior developers and interns',
      'Improved CI/CD pipelines and DevOps workflows using Kubernetes and GitLab'
    ]
  },
  {
    timeText: '2016-2020',
    primaryText: 'CodeForge AG – Munich, Germany',
    secondaryText: 'Full-Stack Developer',
    activities: [
      'Built modern web apps using Angular and Spring Boot',
      'Led project team for rollout of a new customer portal',
      'Developed and maintained RESTful APIs and automated test suites'
    ]
  },
  {
    timeText: '2012-2016',
    primaryText: 'Softnet Solutions – Berlin, Germany',
    secondaryText: 'Software Developer',
    activities: [
      'Backend development with Java EE',
      'Collaborated in agile teams following Scrum methodology',
      'Built internal tools for workflow automation'
    ]
  }
];

export const TIMELINE_PROFESSIONAL_EXPERIENCE2: Array<TimelineElement> = [
  {
    timeText: '2010-2012',
    primaryText: 'Innovatech GmbH – Berlin, Germany',
    secondaryText: 'Working Student – Software Development',
    activities: [
      'Assisted in frontend development using jQuery and PHP',
      'Implemented small features and performed bug fixes',
      'Contributed to technical documentation and testing'
    ]
  }
]

export const EDUCATION_TITLE: string = 'Education';
export const TIMELINE_EDUCATION: Array<TimelineElement> = [
  {
    timeText: '2007-2010',
    primaryText: 'Technical University of Munich',
    secondaryText: 'M.Sc. in Computer Science',
    activities: [
      'Focus: Distributed systems & backend architectures',
      'Master\'s Thesis: “Developing Scalable Microservices with Java and Docker'
    ]
  },
  {
    timeText: '2005-2007',
    primaryText: 'Humboldt University of Berlin',
    secondaryText: 'B.Sc. in Computer Science',
    activities: [
      'GPA equivalent: 1.7 (German system)',
      'Electives: Web development, Databases'
    ]
  },
  {
    timeText: '1996-2005',
    primaryText: 'Carl-von-Ossietzky-Gymnasium, Berlin',
    secondaryText: 'High School Diploma (Abitur)',
    activities: [
      'Advanced Courses: Mathematics, Physics'
    ]
  },
]
