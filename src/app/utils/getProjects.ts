export type PROJECT = {
  name: string;
  about: string[];
  gitHubLink?: string;
  linkedInLink?: string;
  hostedProjectLink?: string;
};

type PROJECTS = PROJECT[];

export const PROJECTS: PROJECT[] = [
  {
    name: "Stealth Message with Gemini AI",
    about: [
      "AI-powered anonymous messaging platform.",
      "Built using Next.js, MongoDB, Shadcn UI, Tailwind CSS, and TypeScript.",
      "Features AI-suggested messages for enhanced engagement.",
      "Ensures complete anonymity with secure backend protocols.",
      "Implements OTP verification for safe interactions.",
      "Includes a user-friendly dashboard for message management.",
      "Scalable backend designed for high performance.",
      "Maintains type safety for reliability and maintainability.",
    ],
    linkedInLink:
      "https://www.linkedin.com/posts/rushabh-dave_gemini-nextjs-webdevelopment-activity-7276126460891791360-mHTT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBSSKQB48j1mN_aVgbYM_QPdVE0J87HvQ8",
    gitHubLink: "https://github.com/Dave-Rushabh/Next-Js-Fullstack-with-AI",
    hostedProjectLink: "https://stealth-message.vercel.app",
  },
  {
    name: "Spice Station",
    about: [
      "Full-stack food delivery landing page.",
      "Frontend built using React.js and Tailwind CSS.",
      "Backend powered by Node.js, Express.js, and MongoDB.",
      "Implemented JWT authentication and protected routes.",
      "Responsive and mobile-first design.",
      "Showcases skills in MERN stack development.",
    ],
    linkedInLink:
      "https://www.linkedin.com/posts/rushabh-dave_mernstack-reactjs-redux-activity-7064597527039197184-URcO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBSSKQB48j1mN_aVgbYM_QPdVE0J87HvQ8",
    gitHubLink: "https://github.com/Dave-Rushabh/MERN-Food-app",
  },
  {
    name: "Stockify - Inventory Simplified",
    about: [
      "A full-stack inventory management prototype for a mobile shop.",
      "Developed using Next.js, Supabase, and Chakra UI.",
      "Implements user authentication via Auth.js.",
      "Includes Role-Based Access Control (Admin & Maintainer).",
      "Supports bulk data updates by uploading Excel sheets.",
      "Generates QR codes for each asset.",
      "Enables asset search, filtering, and sales tracking.",
      "Sends billing receipts with QR codes to customer emails.",
      "Implements real-time stock updates using Supabase publications.",
      "Data modeling designed from scratch with PostgreSQL foreign keys.",
    ],
    linkedInLink: "https://www.linkedin.com/in/rushabh-dave/details/projects/",
  },
  {
    name: "MERN stack chat app",
    about: [
      "A real-time chat application built using the MERN stack.",
      "Implements WebSocket-based messaging.",
      "Supports user authentication and chat rooms.",
      "Demonstrates backend API development and frontend integration.",
    ],
    gitHubLink: "https://github.com/Dave-Rushabh/MERN-CHAT-APP",
  },
  {
    name: "npm Role Based Access Control (RBAC) React Package",
    about: [
      "Built a lightweight React package to simplify Role-Based Access Control (RBAC).",
      "Eliminates repetitive logic for managing roles, route restrictions, and authentication.",
      "Supports effortless role-based access for Admin, Maintainer, and Super Admin.",
      "Enables secure component and route restrictions.",
      "Lightweight, customizable, and easy to integrate.",
      "Published on npm for public use.",
    ],
    linkedInLink:
      "https://www.linkedin.com/posts/rushabh-dave_react-rbac-webdevelopment-activity-7301552545074700288-gt-F/",
    hostedProjectLink: "https://www.npmjs.com/package/react-rbac-simplified",
    gitHubLink: "https://github.com/Dave-Rushabh/react-rbac-simplified",
  },
  {
    name: "npm Debounce Search-bar React package",
    about: [
      "Reusable React search-bar component with built-in debounce.",
      "Prevents excessive API calls by delaying input handling.",
      "Lightweight and easy to integrate into any React project.",
      "Published as an npm package.",
    ],
    linkedInLink: "https://www.linkedin.com/in/rushabh-dave/details/projects/",
    gitHubLink: "https://github.com/Dave-Rushabh/react-debounced-searchbar",
    hostedProjectLink:
      "https://www.npmjs.com/package/react-debounced-searchbar",
  },
  {
    name: "News App with Docker setup",
    about: [
      "Basic news browsing application.",
      "Containerized with Docker for consistent development and deployment.",
      "Demonstrates Docker image creation, container orchestration, and environment setup.",
      "Built using React and a public news API.",
    ],
    linkedInLink: "https://www.linkedin.com/in/rushabh-dave/details/projects/",
    gitHubLink: "https://github.com/Dave-Rushabh/news-app-docker",
  },
  {
    name: "Next JS + Supabase Authentication",
    about: [
      "Basic Next.js app focused on authentication and protected routes.",
      "Integrated Supabase authentication with custom SMTP service.",
      "Implemented custom email templates.",
      "Added input sanitization and validation for sign-up/sign-in.",
      "Handled password reset and forgot password flows.",
      "Deployed using Cloudflare.",
    ],
    linkedInLink: "https://www.linkedin.com/in/rushabh-dave/details/projects/",
  },
  {
    name: "Splitwise Clone",
    about: [
      "React-based clone of the Splitwise expense management app.",
      "Implements authentication flow.",
      "Supports group creation and user addition.",
      "Allows adding expenses and splitting bills.",
      "Simple, user-friendly UI for expense tracking.",
    ],
    linkedInLink: "https://www.linkedin.com/in/rushabh-dave/details/projects/",
  },
  {
    name: "Crown Clothing",
    about: [
      "A basic e-commerce application built with React.",
      "Implements product listing, cart functionality, and checkout process.",
      "Designed to demonstrate React state management and routing.",
      "Deployed using Netlify.",
    ],
    gitHubLink: "https://github.com/Dave-Rushabh/crown-clothing",
    hostedProjectLink: "https://dave-rushabh-crown-clothing.netlify.app/",
  },
];
