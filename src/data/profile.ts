export const profile = {
  name: "Worasret Kulkit",
  firstName: "Worasret",
  lastName: "Kulkit",
  role: "Computer Engineering Student",
  tagline: "Passionate about solving real problems through code currently diving deep into full-stack development, backend systems, and AI-powered",
  email: "wratmkulkic74@gmail.com",
  phone: "+66 649185760",
  github: "https://github.com/LittleKidz",
  linkedin: "https://www.linkedin.com/in/worasret-kulkit-403059394/",
  photo: "/me.jpg",
  resume: "/resume.pdf",
  education: {
    degree: "Bachelor of Engineering",
    major: "Computer Engineering and Digital Technology",
    university: "Chulalongkorn University",
    period: "2025 – Present",
  },
  about: [
    "I'm a Computer Engineering student at Chulalongkorn University passionate about crafting robust software and exploring AI-driven solutions. From building full-stack web applications to developing real-time computer vision systems, I thrive on turning complex problems into elegant, working products.",
    "My competitive background in robotics and the national Computer Olympiad has sharpened my algorithmic thinking and ability to perform under pressure — skills I bring to every project I tackle.",
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "Tailwind CSS",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "RESTful API Design",
      "JWT / OAuth",
      "Middleware",
      "Server-Side Rendering",
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Schema Design",
      "Query Optimization",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "terminal",
    skills: [
      "Git",
      "GitHub / GitLab",
      "Docker",
      "Docker Compose",
      "CI/CD",
      "Postman",
      "Linux CLI",
      "npm / yarn",
    ],
  },
  {
    title: "AI & Vision",
    icon: "brain",
    skills: [
      "YOLOv8",
      "OpenCV",
      "Python",
      "Computer Vision",
      "Real-time Inference",
      "Text-to-Speech",
    ],
  },
  {
    title: "Architecture",
    icon: "blocks",
    skills: [
      "Microservices",
      "MVC Pattern",
      "REST API Design",
      "OOP",
      "Agile / Scrum",
      "SDLC",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  details: string[];
  techStack: string[];
  image?: string;
  images?: string[];
  certificate?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Object Detection With Sound Feedback",
    description:
      "A real-time object detection system using YOLOv8 that identifies objects from visual input and provides immediate audio feedback through text-to-speech, enabling hands-free and accessible interaction.",
    details: [
      "Built real-time inference pipeline with YOLOv8 for object detection",
      "Integrated OpenCV for video stream processing and frame analysis",
      "Implemented text-to-speech feedback for accessibility",
      "Optimized detection latency for smooth real-time performance",
    ],
    techStack: [
      "YOLOv8",
      "Python",
      "OpenCV",
      "Computer Vision",
      "Text-to-Speech",
      "Real-time Inference",
    ],
    images: [
      "/images/project1.jpg",
      "/images/project2.jpg",
      "/images/project3.jpg",
      "/images/project4.jpg",
    ],
    featured: true,
  },
  {
    title: "Car Rental Web Application",
    description:
      "A full-stack car rental platform with dynamic search filters, booking flow, user authentication, and an admin dashboard for vehicle and reservation management.",
    details: [
      "Developed responsive frontend with React.js including search filters and booking flow",
      "Built backend with Node.js and Express.js for authentication and booking logic",
      "Designed RESTful APIs for CRUD operations across users, vehicles, and reservations",
      "Structured MongoDB database schema for efficient relational data queries",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Git",
    ],
    featured: true,
  },
  {
    title: "TodmenAdventure — Java Game",
    description:
      "An interactive adventure game built from scratch in Java using core Object-Oriented Programming principles with modular game characters, inventory systems, and event-driven logic.",
    details: [
      "Applied inheritance, polymorphism, and encapsulation for modular game design",
      "Implemented game state management and event-driven player action handling",
      "Utilized arrays, lists, and maps for inventory and level management",
    ],
    techStack: ["Java", "OOP", "Data Structures", "Git"],
  },
];

export type Achievement = {
  title: string;
  year: string;
  type: "gold" | "silver" | "bronze" | "honor" | "qualifier";
  image?: string;
};

export const achievements: Achievement[] = [
  {
    title: "POSN Computer Olympiad — Camp 2 Qualifier",
    year: "2024",
    type: "qualifier",
    image: "/images/com.jpg",
  },
  {
    title: "Outstanding Robot Performance Honoree — World Robot Olympiad 2023 (Thailand National Final)",
    year: "2023",
    type: "honor",
    image: "/images/robot3.jpg",
  },
  {
    title: "Regional Gold Medalist — Intermediate Robotics (71st Regional Academic Competition)",
    year: "2023",
    type: "gold",
    image: "/images/robot6.jpg",
  },
  {
    title: "National Gold Medalist — Intermediate Robotics (70th National Academic Competition)",
    year: "2022",
    type: "gold",
    image: "/images/robot5.jpg",
  },
  {
    title: "Second Runner-Up — World Robot Olympiad 2022 (RoboMission Senior, South Regional)",
    year: "2022",
    type: "bronze",
    image: "/images/robot4.jpg",
  },
];
