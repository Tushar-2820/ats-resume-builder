import React from "react";
import { ResumeReducer } from "../reducer/ResumeReducer";

const initialState = {
  jobDescription: " ",
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
  },
  skills: [],
  experience: [
    {
      companyName: "",
      role: "",
      duration: "",
      description: "",
    },
  ],
  projects: [
    {
      projectName: "",
      technologies: "",
      projectDetails: "",
    },
  ],
  educations: [
    {
      degree: "",
      institution: "",
      year: "",
      grade: "",
    },
  ],
  achievements: "",
  certifications: [
    {
      certificateName: "",
      certificateProvider: "",
    },
  ],
};

// const initialState = {
//   jobDescription:
//     " Experience with React.js, Django REST Framework, and frontend design tools like Figma\nDevelop responsive frontend interfaces, integrate backend APIs, collaborate on feature development, and optimize performance",
//   personalInfo: {
//     fullName: "Tushar Sundar More",
//     email: "tusharmore863@gmail.com",
//     phone: "8669579474",
//     location: "Pune",
//     linkedin: "https://www.linkedin.com/in/tushar-more-3a4293254/",
//     github: "https://github.com/Tushar-2820/",
//   },
//   skills: [
//     "JavaScript",
//     "TypeScript",
//     "React.js",
//     "Next.js",
//     "HTML5",
//     "CSS3",
//     "Tailwind CSS",
//     "Bootstrap",
//     "Redux",
//     "Context API",
//     "React Hooks",
//     "Vite",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "MySQL",
//     "REST APIs",
//     "GraphQL",
//     "Git",
//     "GitHub",
//     "Responsive Design",
//     "Material UI",
//     "Ant Design",
//     "Axios",
//     "React Router",
//     "Zustand",
//     "Firebase",
//     "JWT Authentication",
//     "Webpack",
//     "npm",
//     "Yarn",
//     "ESLint",
//     "Prettier",
//     "Docker",
//     "CI/CD",
//     "Jest",
//     "React Testing Library",
//     "Cypress",
//     "Agile",
//     "Scrum",
//     "Figma",
//     "JSON",
//     "AJAX",
//     "Performance Optimization",
//     "Cross-Browser Compatibility",
//     "Accessibility (WCAG)",
//     "Micro Frontends",
//     "Server-Side Rendering (SSR)",
//     "Static Site Generation (SSG)",
//     "Progressive Web Apps (PWA)",
//     "Framer Motion",
//     "Chart.js",
//     "D3.js",
//     "Socket.IO",
//     "WebSockets",
//     "OAuth",
//     "OpenAI API",
//     "Gemini API",
//     "LLM Integration",
//     "Prompt EngineeringB",
//   ],
//   experience: [
//     {
//       companyName: "Borm Bruckmeier Infotech Pvt. Ltd.",
//       role: "Software Developer",
//       duration: "Aug 2022 – Present",
//       description:
//         " Developed and built production-grade web applications using React.js, JavaScript, Tailwind CSS, Node.js\nand REST APIs.\n– Built responsive and mobile-friendly UIs components, improving user experience and increasing client satisfaction\nby 20%.\n– Integrated frontend applications with backend APIs to ensure secure and smooth data flow.\n– Optimized application performance using lazy loading, code splitting, and minification, reducing page load time by\n30%.\n– Deployed applications on Netlify, Render, and cPanel using GitHub-based CI/CD pipelines.\n– Performed code reviews, debugging, and refactoring to maintain clean, scalable and maintainable code.\n– Worked in Agile/Scrum teams, participating in sprint planning, daily stand-ups, and timely feature delivery.",
//     },
//   ],
//   projects: [
//     {
//       projectName: "CodeBook – Developer Resource Hub",
//       technologies: "React.js, Tailwind CSS, GitHub CI/CD, Netlify",
//       projectDetails:
//         "Built a React-based developer dashboard to manage code snippets, featured projects, and blog content.\n– Implemented reusable components and a responsive UI for smooth navigation and user experience.\n– Set up a GitHub CI/CD pipeline for automatic deployment on Netlify.\n",
//     },
//   ],
//   educations: [
//     {
//       degree: "Bachelor of Computer Science",
//       institution: "DY Patil",
//       year: "2021",
//       grade: "A",
//     },
//   ],
//   achievements:
//     "• Increased user satisfaction by 20% through UI/UX and feature improvements.\n• Reduced manual development effort by 50% by automating interactive tool generation.\n• Improved mobile responsiveness score by 15% (Google Lighthouse).\n• Migrated legacy PHP modules to React components, improving maintainability and developer productivity.\n",
//   certifications: [
//     {
//       certificateName: "react",
//       certificateProvider: "udemy",
//     },
//     {
//       certificateName: "DSA",
//       certificateProvider: "udemy",
//     },
//   ],
// };

type ResumeContextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
};

export const ResumeContext = React.createContext<ResumeContextType | null>(
  null,
);

export const ResumeProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(ResumeReducer, initialState);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};
