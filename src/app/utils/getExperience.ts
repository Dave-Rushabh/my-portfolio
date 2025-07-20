type DESCRIPTION = {
  data: string;
  link?: string;
};

type Experience = {
  title: string;
  company: string;
  duration: string;
  location: string;
  companyLink: string;
  description: DESCRIPTION[];
};

export const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Solvative",
    duration: "Aug 2024 – Present",
    location: "Remote, India",
    companyLink:
      "https://www.linkedin.com/company/solvative/posts/?feedView=all",
    description: [
      {
        data: "Worked as a core frontend team member for Samsung US operations",
        link: "https://www.samsung.com/us/shop/",
      },
      {
        data: "Built internal tools used by 100+ employees for IT gadgets servicing, inventory, and spare parts management.",
      },
      {
        data: "Mentored junior developers during their initial probation period and introduced code related best practices.",
      },
      {
        data: "Optimized performance and accessibility across projects.",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Lucent Innovation",
    duration: "June 2023 – Aug 2024",
    location: "Ahmedabad, India",
    companyLink: "https://www.linkedin.com/company/lucent-innovation/",
    description: [
      {
        data: "Built interactive UIs using React & Tailwind CSS.",
      },
      {
        data: "Worked closely with UX designers for pixel-perfect implementation.",
      },
      {
        data: "Developed and maintained e-commerce platforms of Olivela",
        link: "https://www.olivela.com/",
      },
      {
        data: "Built a Drop-ship platform's UI part single-handedly from absolute scratch, managed all the product requirements and implemented 2D canvas manipulations for My Easy Monogram",
        link: "https://apps.shopify.com/my-easy-monogram",
      },
      {
        data: "Contributed as a frontend developer for an enterprise-level Shopify OTP plugin — Simply OTP, used by 1000+ stores with a 4.8+ rating.",
        link: "https://apps.shopify.com/simply-otp-login",
      },
      {
        data: "Implemented build optimizations using Webpack and improved overall app performance.",
      },
      {
        data: "Focused on accessibility and building inclusive user experiences.",
      },
      {
        data: "Gained strong exposure to writing scalable, performant, and optimized frontend code — shaping strong product-thinking mindset.",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Surekha Technologies",
    duration: "June 2022 – June 2023",
    location: "Ahmedabad, India",
    companyLink: "https://www.linkedin.com/company/surekha-technologies/",
    description: [
      {
        data: "Developed custom UI components and frontend animations tailored to enterprise needs.",
      },
      {
        data: "Improved legacy codebases and contributed actively to scalable design systems.",
      },
      {
        data: "Worked on a non-emergency medical transportation project using Realm DB watchers for real-time ride status updates.",
        link: "https://kinetik.care/",
      },
      {
        data: "Built responsive, user-friendly interfaces ensuring accurate and timely trip tracking.",
      },
      {
        data: "Collaborated with a geographically distributed team, adapting quickly to cross-continent workflows.",
      },
      {
        data: "Sharpened verbal and written communication skills while coordinating with clients and remote stakeholders.",
      },
      {
        data: "Delivered solutions efficiently while aligning with agile practices and sprint goals.",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Brilworks Software",
    duration: "Apr 2022 – May 2022",
    location: "Ahmedabad, India",
    companyLink: "https://www.linkedin.com/company/brilworks-software/",
    description: [
      {
        data: "Contributed to the development of an internal HR portal with a focus on frontend UI implementation.",
      },
      {
        data: "Collaborated with the team on component design and user experience improvements.",
      },
    ],
  },
  {
    title: "Executive Engineer",
    company: "Torrent Power",
    duration: "July 2019 – Mar 2022",
    location: "Ahmedabad, India",
    companyLink: "https://www.linkedin.com/company/torrent-power/",
    description: [
      {
        data: "Worked as a full-time Electrical Power Distribution and Reliability Engineer.",
      },
      {
        data: "Worked on maintenance and optimization of PLC & SCADA systems for power grid monitoring and control.",
      },
      {
        data: "Programmed and deployed real-time automation logic to ensure high power reliability across Ahmedabad region.",
      },
      {
        data: "Contributed to reducing power outages and improving uptime, directly impacting 10M+ customers.",
      },
      {
        data: "Coordinated with cross-functional field and control room teams for real-time fault analysis and quick resolutions.",
      },
    ],
  },
];
