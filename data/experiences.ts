import { Experience } from "@/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "projecttree",
    companyName: "Project Tree Infotech",
    companyLogo: "https://assets.harshkanjiya.com/companies/ptree-logo.svg",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "Dec 2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Modernized legacy applications by migrating AngularJS to Angular and improving maintainability&nbsp;&&nbsp;UX.
- Engineered a high-performance custom data grid rendering 15,000+ cells with minimum&nbsp;latency.
- Improved application startup performance by ~80% by implementing custom lazy loading&nbsp;strategies.
- Worked on Angular, React & Next.js frontends integrated with .NET Core & PostgreSQL&nbsp;services.
`,
        skills: [
          "Angular",
          "React",
          "Next.js",
          "TypeScript",
          "Dot Net Core",
          "PostgreSQL",
          "Shadcn UI",
          "Prime NG",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "squirracode-technologies",
    companyName: "Squirracode Technologies",
    companyLogo: "https://assets.harshkanjiya.com/companies/squirracode-technologies.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Jr. Full Stack Developer",
        employmentPeriod: {
          start: "Sept 2022",
          end: "Oct 2023",
        },
        employmentType: "Remote",
        icon: "code",
        description: `
- Built features for a <b>real-time monitoring platform</b>, focusing on performance and&nbsp;reliability.
- Worked with Node.js microservices to implement WhatsApp-based alerting for faster fault&nbsp;detection.
- Implemented complex, high-performance UI workflows using React & Redux&nbsp;Toolkit.
- <b>Converted a 3-month internship into a paid part-time remote role</b> based on&nbsp;performance.
        `,
        skills: [
          "React",
          "Express.js",
          "Node.js",
          "Microservices",
          "Socket.IO",
          "MongoDB",
          "Docker",
          "UI/UX",
        ],
      },
      {
        id: "991692c4-7d02-4666-8d31-933c4831768d",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "Sept 2022",
          end: "Dec 2022",
        },
        employmentType: "Remote",
        icon: "idea",
        skills: [
          "HTML5",
          "CSS3",
          "JS",
          "TS",
          "React",
          "Research",
        ],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "March 2025",
          end: "Jan 2026",
        },
        employmentType: "Remote Part-time",
        description: `
- Worked on a legacy Vue.js project for a social media application's admin dashboard, implementing fine-grained access control and live stream monitoring features.
- Built 3 additional projects within the same initiative for managing data across different roles and features.
`,
        icon: "code",
        skills: [
          "Angular",
          "Vue.js",
        ],
      },
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Backend Developer",
        employmentPeriod: {
          start: "July 2025",
          end: "Oct 2025",
        },
        employmentType: "Remote Part-time",
        description: `
- Worked on Nest.Js project for a foreign client, integrating notification microservice in the existing microservices&nbsp;architecture.
- Implemented central control for notifications in control panel built in&nbsp;Angular.
- Worked with AWS & Docker to deploy applications on the cloud, ensuring scalability and&nbsp;reliability.
`,
        icon: "code",
        skills: [
          "Angular",
          "Nest.Js",
          "MongoDB",
          "Docker",
          "AWS",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "PP Savani University",
        employmentPeriod: {
          start: "2020",
          end: "2024",
        },
        icon: "education",
        description: `
- Studied for Bachelor's degree in Information&nbsp;Technology.
- Became a <b>Google Developer Student Clubs member</b>, organizing workshops and events to foster a tech community on&nbsp;campus.
- Graduated with a CGPA of <b>9.0/10</b>, demonstrating consistent academic excellence and dedication to&nbsp;learning.
-	<b>Built an internal portal</b> for the Ethical Clearance Committee with MERN&nbsp;stack.
`,
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "JS",
          "React.Js",
          "Data Structures",
          "Algorithms",
        ],
      },
    ],
  },
];
