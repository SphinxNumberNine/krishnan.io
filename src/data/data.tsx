import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import {
  ChessIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SpotifyIcon,
  SteamIcon,
  TwitterIcon,
  YoutubeIcon} from '../components/Icon/Icon';
import heroImage from "../images/japan_boat_background_downscaled.jpg"
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ashwath Krishnan\'s Website',
  description: "Personal website of NY-based software engineer, Ashwath Krishnan",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ashwath Krishnan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a New York City based Full Stack Software Engineer, currently working
        at Capital One helping build machine learning solutions to automate access control.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/AshwathKrishnanResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const getAge = (dateOfBirth: string): number => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birthday hasn't occurred this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
const age = getAge("2000-06-01").toString()

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a full stack software engineer interested in artifical intelligence, cybersecurity, and DevOps. 
  I grew up and attended primary/secondary school in central New Jersey before attending the University of Maryland for my undergraduate degree in Computer Science. 
  Outside of work, I enjoy playing the piano, exercising, eating at new NYC restaurants (@ashwathkrishnan on Beli), playing video games or online chess, listening to hip-hop music and traveling the world.`,
  aboutItems: [
    {label: 'Location', text: 'New York, NY', Icon: MapIcon},
    {label: 'Age', text: age, Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Maryland', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Capital One Financial Corporation', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2018 - May 2021',
    location: 'University of Maryland',
    title: 'Bachelors of Science in Computer Science',
    content: <p>Dove deeper into my love for computer science while simultaneously exploring other disciplines of interest. <br/> GPA: 3.77/4.0, Minors: Statistics, Cybersecurity</p>,
  },
  {
    date: 'September 2014 - May 2018',
    location: 'South Brunswick High School',
    title: 'High School Diploma',
    content: <p>Gained a well rounded academic foundation, the fundamentals of computer science, and some life-long friends.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2023 - present',
    location: 'Capital One Financial Corporation',
    title: 'Senior Associate Software Engineer',
    content: (
      <p>
        Working as a member of an agile data science team focused on creating machine learning solutions within the cybersecurity division of Capital One to enable automated access controls throughout the company. 
        Main responsibilities include developing machine learning and statistical models in Python using PySpark and Tensorflow, 
        writing model monitoring scripts in Python and Bash, doing exploratory data analysis on new data sources, and working on the underlying AWS infrastucture where the models are hosted.
      </p>
    ),
  },
  {
    date: 'August 2022 - August 2023',
    location: 'Capital One Financial Corporation',
    title: 'Associate Software Engineer',
    content: (
      <p>
        Worked as a member of a software development team to develop new features for Capital One’s commercial banking application, Intellix Mobile. 
        Main responsibilities included developing new screens for the iOS and Android applications in Swift and Kotlin, writing backend endpoints with Golang, and helping migrate the application’s infrastructure from AWS EC2 to AWS Fargate.
      </p>
    ),
  },
  {
    date: 'June 2021 - June 2022',
    location: 'Optum Technology',
    title: 'Technology Development Program Associate (Software Engineer)',
    content: (
      <p>
        Worked as a member of an agile software development team to develop new features for UnitedHealth Group’s Individual Insurance store website in order to increase customer retention across the various phases of the insurance shopping experience. 
        Main responsibilities include developing new components in AngularJS, writing backend endpoints with .NET core, and connecting to and managing a CosmosDB database.

        Also worked as a member of an agile data engineering team developing ETL pipelines to process data from the company's various data sources. 
        Main responsibilities included developing pipelines using Azure Synapse, writing SQL scripts to validate data, and monitoring job statuses.
      </p>
    ),
  },
  {
    date: 'August 2020 - May 2021',
    location: 'University of Maryland',
    title: 'Teaching Assistant - CMSC250',
    content: (
      <p>
        Teaching Assistant for a university level discrete mathematics course, where my main responsibilities included: 
        <br />- drafting homework and exam questions
        <br /> - grading homework assignments and exams
        <br /> - holding office hours to clarify student doubts
      </p>
    ),
  },
  {
    date: 'January 2020 - May 2021',
    location: 'University of Maryland',
    title: 'Student Instructor',
    content: (
      <p>
        Taught a computer science course on digital logic design through the lens of the popular game, Minecraft. 
        All concepts and techniques taught in the class were demonstrated through completing tasks within Minecraft using the in-game Redstone mechanic that mimics real-world circuitry. Main responsibilities included: 
        <br /> - delivering lectures on digital logic theory and design
        <br /> - writing homework and project descriptions
        <br /> - working with and integrating class Minecraft mod with UMD's project submission server
        <br /> - creating video tutorials and other supplementary content
        <br /> - managing class logistics (grades, announcements, exams, lectures, etc)
      </p>
    ),
  },
  {
    date: 'Summer 2020',
    location: 'Optum Technology',
    title: 'Technology Intern',
    content: (
      <p>
        Worked as a member of an agile data science team on a project attempting to forecast flu levels in various regions based on Google search trends in those regions. 
        Main responsibilities included writing python scripts for data collection, exploratory data analysis, factor analysis, linear and symbolic regression, and neural network integration.
      </p>
    ),
  },
  {
    date: 'Summer 2019',
    location: 'Commvault Systems',
    title: 'Software Engineering Intern',
    content: (
      <p>
        Created a Google Chrome extension using ReactJS and vanilla JavaScript to help the developers easily manage their code reviews.
      </p>
    ),
  },
  {
    date: 'Summer 2018',
    location: 'Vydia',
    title: 'Software Engineering Intern',
    content: (
      <p>
        Worked on strict typing using Facebook's Flow framework for a cross-platform mobile application and a web application. 
        In addition, I worked on converting the company's development setup from a virtualization environment (Vagrant/Virtualbox) to a containerization environment (Docker).
      </p>
    ),
  },
  {
    date: 'Summer 2016, Summer 2017',
    location: 'Commvault Systems',
    title: 'Software Engineering Intern',
    content: (
      <p>
        Created a windows application using C# in order to grab archived mail data from an Appache Solr index and allow the user to modify the data without using the Solr Admin UI.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to send a message here or contact me at any of the following methods if you need to get ahold of me!',
  items: [
    {
      type: ContactType.Email,
      text: 'ashwath@krishnan.io',
      href: 'mailto:ashwath@krishnan.io',
    },
    {
      type: ContactType.Phone,
      text: '732-853-6160',
      href: 'tel:732-853-6160',
    },
    {
      type: ContactType.Instagram,
      text: 'ashwathkrishnan',
      href: 'https://www.instagram.com/ashwathkrishnan/',
    },
    {
      type: ContactType.Github,
      text: 'SphinxNumberNine',
      href: 'https://github.com/SphinxNumberNine',
    },
    {
      type: ContactType.Twitter,
      text: 'ashwathbkrishna',
      href: 'https://x.com/AshwathBKrishna',
    },
    
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/SphinxNumberNine'},
  {label: 'LinkedIn', Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ashwathkrishnan/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ashwathkrishnan/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/AshwathBKrishna'},
  {label: 'Steam', Icon: SteamIcon, href: 'https://steamcommunity.com/id/ashwathk/'},
  {label: 'Spotify', Icon: SpotifyIcon, href: 'https://open.spotify.com/user/ashwathbkrishnan'},
  {label: 'Youtube', Icon: YoutubeIcon, href: 'https://www.youtube.com/@ashwathkrishnan231'},
  {label: 'Chess', Icon: ChessIcon, href: 'https://www.chess.com/member/ashwathkrishnan'}
];
