import React from 'react'
import psLogo from './logos/ps-logo.png'
import ipLogo from './logos/ip-logo.png'
import gniLogo from './logos/gni-logo.png'
import gaLogo from './logos/ga-logo.png'
import uvmLogo from './logos/uvm-logo.png'
import sevillaLogo from './logos/sevilla-logo.png'
import nolsLogo from './logos/nols-logo.png'

interface IconProps {
  src: string
  url: string
}

const Icon: React.FC<IconProps> = ({ src, url }) => (
  <a href={url} className="timeline__icon-wrapper" target="_blank" rel="noopener noreferrer">
    <img src={src} className="timeline__icon" alt="icon" />
  </a>
)

interface TimelineItem {
  icon: JSX.Element
  title: string
  company: string
  team?: string
  location: string
  dates: string
  descriptionBullets?: (string | JSX.Element)[]
  position?: string
}

const timelineItems: TimelineItem[] = [
  {
    icon: <Icon src={psLogo} url="https://www.getdivvy.com/" />,
    title: 'Software Engineer',
    company: 'Divvy',
    team: 'Partnerships Platform',
    location: 'Salt Lake City, UT',
    dates: 'Jan 2021 - Present',
    descriptionBullets: [
      'Primarily focused on front-end development in React of new Partnerships Platform',
      'Backend development of API in Elixir, using GraphQL and gRPC',
      <span>
        <strong>Technologies:</strong> React, TypeScript, GraphQL, Elixir
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer',
    team: 'Hands-On Learning Experiences',
    company: 'Pluralsight',
    location: 'Boston, MA & Salt Lake City, UT',
    dates: 'Nov 2018 – Mar 2021 (2 yrs)',
    descriptionBullets: [
      'Built and released Labs player and video publishing tool using React and Node.js',
      'Developed backend integration service in Node.js to facilitate cloud account vending',
      'Led technical discovery, architectural design, and creation of new course authoring tool',
      <span>
        <strong>Technologies:</strong> React, Typescript, GraphQL, Node.js, Docker, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer',
    team: 'Skill IQ Experience',
    company: 'Pluralsight',
    location: 'Boston, MA',
    dates: 'July 2015 – Nov 2018 (3.5 yrs)',
    descriptionBullets: [
      'Developed and released multiple applications for the Skill IQ product line',
      'Served as Technical Lead on 2 teams building greenfield applications',
      'Led overhaul of legacy application to meet new product and security requirements and best practices',
      'Developed data aggregation and processing pipelines for analytics dashboard',
      'Enhanced CI/CD practices and pipelines using Jenkins, Ansible, TeamCity, and Docker',
      <span>
        <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={gaLogo} url="https://generalassemb.ly/" />,
    title: 'Student',
    team: 'Web Development Immersive',
    company: 'General Assembly',
    location: 'Boston, MA',
    dates: 'Apr 2015 – July 2015 (3 mos)',
    descriptionBullets: [
      '3-month full time immersive course where I learned best practices for web application architecture, front-end and back end development',
      <span>
        <strong>Technologies:</strong> JavaScript, Node.js, Express, Angular, jQuery, HTML, CSS,
        MongoDB, Ruby on Rails, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Coordinator, Specialist, Lead',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jun 2013 – Apr 2015 (2 yrs)',
    descriptionBullets: [
      'Planned and executed Search Engine Marketing campaigns for agency clients',
      'Automated data analysis reporting for 5 teams with VBA scripts, saving over 10 person hrs/wk',
      'Built spend projection & optimization tool in Excel to manage multi-million dollar/yr ad spend',
    ],
  },
  {
    icon: (
      <Icon src={gniLogo} url="https://www.linkedin.com/company/newsimaging-inc-dba-gni-/about/" />
    ),
    title: 'Data Analyst',
    company: 'Global News Intelligence (GNI)',
    location: 'Boston, MA',
    dates: 'May 2011 – Jun 2013 (2 yrs)',
    descriptionBullets: [
      'Data analyst and consultant of open-source media content for corporate, political, and military clients',
      'Designed analytics strategy and methodology for multiple client projects',
      'Assisted software engineers to improve experience of web application',
      'Managed 3-5 team members, interns and part-time staff on multiple projects',
    ],
  },
  {
    icon: <Icon src={uvmLogo} url="https://www.uvm.edu/" />,
    title: 'Student',
    team: 'B.A. in Global Studies & Spanish',
    company: 'University of Vermont',
    location: 'Burlington, VT',
    dates: 'Graduated Dec 2010',
    descriptionBullets: [
      'Founder of UVM Global Studies club',
      'Opinion Columnist for The Vermont Cynic newspaper',
      "Teacher's Assistant for Anthropology Department",
    ],
  },
  {
    icon: <Icon src={sevillaLogo} url="https://www.us.es/" />,
    title: 'Student',
    team: 'Global Studies & Spanish',
    company: 'Universidad de Sevilla',
    location: 'Sevilla, Spain',
    dates: 'Jan 2010 – Jun 2010',
    descriptionBullets: [
      'Semester abroad in Sevilla, Spain',
      'Studies focused on politics, economics, and linguistics',
      'All classes taught in Spanish',
    ],
  },
  {
    icon: <Icon src={nolsLogo} url="https://www.nols.edu/en/" />,
    title: 'Student',
    team: 'Wilderness Expedition Leadership',
    company: 'National Outdoor Leadership School (NOLS)',
    location: 'Coyhaique, Chile',
    dates: 'Jan 2009 – Jun 2009',
    descriptionBullets: [
      "3-month semester long program in southern Chile's Patagonia wilderness region consisting of backpacking and sea kayaking",
      'Trained in large-group, extended backcountry expedition planning and leadership',
      'Led group of 21 for multiple days of mountain travel and sea kayaking',
    ],
  },
]

export default timelineItems
