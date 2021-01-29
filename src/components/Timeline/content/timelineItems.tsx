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
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Senior Software Engineer',
    company: 'Pluralsight',
    team: 'Cloud Environments Platform',
    location: 'Salt Lake City, UT',
    dates: 'Jan 2020 - Present',
    descriptionBullets: [
      'Developed platform to programmatically manage AWS and Azure cloud accounts',
      'Management of Kubernetes cluster backing hands-on learning experiences',
      'Led discovery and architecture for Azure lab containers',
      <span>
        <strong>Technologies:</strong> Kubernetes, Docker, Node.js, Typescript, NestJS, GraphQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Senior Software Engineer, Tech Lead',
    team: 'Interactive Course Author Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Nov 2018 – Dec 2019',
    descriptionBullets: [
      'Led discovery, architectural design, and creation of new course authoring tool',
      'Developed interactive course content for C#, Golang, and JavaScript courses',
      'Trained team in LEAN practices, flow efficiency, and mob programming',
      <span>
        <strong>Technologies:</strong> Node.js, React, Apollo GraphQL, Typescript, Docker,
        PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Author Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Jan 2018 – Nov 2018',
    descriptionBullets: [
      'Led overhaul of legacy application and migration to new stack in React and Python',
      'Developed library of reusable React components for use by other teams',
      'Hired and trained 3 engineers for the team',
      <span>
        <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Manager Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Feb 2017 – Feb 2018',
    descriptionBullets: [
      'Delivered 3 premium features than enabled higher price points and increased sales',
      'Developed data aggregation and processing pipelines for analytics dashboard',
      'Hired and trained over 5 new engineers for multiple teams',
      <span>
        <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer',
    team: 'Skill IQ Learner Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'July 2015 – Feb 2017',
    descriptionBullets: [
      'Led front end development of Skill IQ learner experience in React',
      'Enhanced CI/CD practices and pipelines using Jenkins, Ansible, Puppet',
      'Built Skill IQ management platform for internal use in React and Python',
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
    dates: 'Apr 2015 – July 2015',
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
    title: 'Search Engine Marketing Account Lead',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jan 2015 – Apr 2015',
    descriptionBullets: [
      'Built automated tools and reports to manage millions of dollars of advertising budget',
      'Designed advertising strategy to optimize for client-specified KPIs',
      'Developed and strengthened client relationship as primary point of contact',
    ],
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Specialist',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'May 2014 – Dec 2014',
    descriptionBullets: [
      'Automated data analysis reporting for 5 teams with VBA scripts, saving over 10 person hrs/wk',
      'Managed multi-million dollar ad budget by developing spend projection tool in Excel',
      'Redesigned strategy for a Product Listing Account, leading to +20% ROI YoY',
    ],
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Coordinator',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jun 2013 – Apr 2014',
    descriptionBullets: [
      'Optimized ad campaigns by doing analysis of search keyword metrics (impressions, click through rate, conversion rate)',
      'Led execution for Holiday marketing campaigns, driving YoY ROI increases in multiple ad types',
      'Executed all client reporting of ad campaign performance and tracking against KPIs',
    ],
  },
  {
    icon: (
      <Icon src={gniLogo} url="https://www.linkedin.com/company/newsimaging-inc-dba-gni-/about/" />
    ),
    title: 'Data Analyst',
    company: 'Global News Intelligence (GNI)',
    location: 'Boston, MA',
    dates: 'May 2011 – Jun 2013',
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
      "Interdisciplinary degree covering relationship between global politics, economics, and culture in influencing today's world",
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
      'Certification in Wilderness First Aid (WFA) and Leave No Trace (LNT)',
    ],
  },
]

export default timelineItems
