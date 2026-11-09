import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const EMAIL = "folagmie16@gmail.com";

export const socials = [
  { label: "Email", icon: faEnvelope, url: `mailto:${EMAIL}` },
  { label: "GitHub", icon: faGithub, url: "https://github.com/gmie-hub" },
  {
    label: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/gmie-hub",
  },
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Chakra UI",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive UI",
  "REST APIs",
  "GraphQL",
  
];

export const projects = [
  {
    title: "Viktri",
    category: "SaaS · Work tools",
    description:
      "An integrated business operating system for African businesses — one ecosystem of work tools for running teams, operations and growth.",
    image: "/projects/viktri.png",
    url: "https://viktri.tech/",
  },
  {
    title: "AmealP",
    category: "AI · Health",
    description:
      "An AI nutritionist: scan meals, track health and unlock personalised insights tailored to your culture and lifestyle.",
    image: "/projects/amealp.png",
    url: "https://amealp.com/",
  },
  {
    title: "Intaglio",
    category: "Mentoring · Web app",
    description:
      "A mentoring platform for dentists, connecting mentees with expert mentors through masterclasses, webinars and one-to-one sessions.",
    image: "/projects/intaglio.png",
    url: "https://www.intagl.io/",
  },
  {
    title: "Lyte Wallet",
    category: "Fintech · Crypto",
    description:
      "A cryptocurrency wallet with real-time swaps, send and receive, automated rate updates and transaction tracking.",
    image: "/lyte-app.png",
    url: "https://lytewallet.io/",
  },
  {
    title: "Blinkers",
    category: "E-commerce",
    description:
      "An e-commerce marketplace that lets users across Nigeria buy and sell products.",
    image: "/projects/blinkers.png",
    url: "https://www.blinkersnigeria.com/",
  },
  {
    title: "Spoilert",
    category: "E-learning",
    description:
      "An e-learning platform offering a wide variety of courses for students.",
    image: "/projects/spoilert.png",
    url: "https://spoilert-web-app-vercel.vercel.app/",
  },
  {
    title: "CIPM Application Portal",
    category: "Portal · Admin",
    description:
      "An interactive applicant-management system that simplifies professional membership applications.",
    image: "/projects/cipm-application.png",
    url: "https://application.cipmnigeria.org/",
  },
  {
    title: "CIPM Exam Portal",
    category: "EdTech · Exams",
    description:
      "A seamless online exam platform for CIPM candidates, tuned for a smooth test-taking experience.",
    image: "/projects/cipm-exams.png",
    url: "https://exams.cipmnigeria.org/",
  },
  {
    title: "CIPM E-voting",
    category: "GovTech · Elections",
    description:
      "Secure voting and admin dashboards that streamline professional election processes.",
    image: "/e-voting.png",
  },
];
