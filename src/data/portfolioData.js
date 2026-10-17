export const personalInfo = {
  fullName: "Rakshith M R",
  headline: "MCA Student",
  email: "rakshithmr52@gmail.com",
  phone: "+91 93530 83138",
  linkedin: "https://www.linkedin.com/in/rakshith-m-r-17437b247?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/Rakshithmr52",
  introduction:
    "Motivated MCA student with strong foundational knowledge in programming and web development. Demonstrates ability to build functional applications, solve problems efficiently, and adapt quickly to new technologies. Seeking an opportunity to apply technical skills to deliver impactful software solutions.",
  profileImage: "/images/profile.jpg",
  location: "Bengaluru, India",
};

export const educationList = [
  {
    id: "mca",
    degree: "MCA — Master of Computer Applications",
    institution: "BMS Institute of Technology & Management (BMSIT), Bengaluru",
    score: "CGPA: 6.65",
    scoreType: "CGPA",
    duration: "2025–2027",
    status: "Pursuing",
    description:
      "Advanced studies in computer applications, software engineering principles, algorithm design, and modern system architectures.",
  },
  {
    id: "bca",
    degree: "BCA — Bachelor of Computer Applications",
    institution: "Nagarjuna Degree College, Bengaluru",
    score: "CGPA: 6.17",
    scoreType: "CGPA",
    duration: "2021–2025",
    status: "Completed",
    description:
      "Comprehensive coursework covering core computer science subjects, object-oriented programming, data structures, and database management.",
  },
  {
    id: "pu",
    degree: "2nd PU — CEBA",
    institution: "Nagarjuna PU College, Bengaluru",
    score: "Score: 67.33%",
    scoreType: "Percentage",
    duration: "2021",
    status: "Completed",
    description:
      "Pre-university education focusing on Computer Science, Economics, Business Studies, and Accountancy.",
  },
  {
    id: "sslc",
    degree: "SSLC",
    institution: "Swamy Vivekananda Higher Primary School",
    score: "Score: 65.60%",
    scoreType: "Percentage",
    duration: "2019",
    status: "Completed",
    description:
      "Secondary School Leaving Certificate completing foundational high school education.",
  },
];

export const internshipList = [
  {
    id: "cranes-varsity",
    role: "Full Stack Java Intern",
    company: "Cranes Varsity Private Limited",
    highlights: [
      "Learned fundamentals of Java full stack development",
      "Gained exposure to frontend and backend technologies",
      "Worked in a real-time development environment",
    ],
  },
];

export const skillCategories = [
  {
    title: "Programming",
    description: "Core algorithmic thinking and structured programming foundation",
    skills: [
      { name: "C", level: "Core Foundation" },
      { name: "Basic Java", level: "Object-Oriented Concepts" },
    ],
  },
  {
    title: "Web Development",
    description: "Building responsive, semantic, and styled web interfaces",
    skills: [
      { name: "HTML", level: "Semantic Markup & Structure" },
      { name: "CSS", level: "Modern Layouts & Styling" },
    ],
  },
  {
    title: "Tools & Environment",
    description: "Developer tools for version control and efficient workflow",
    skills: [
      { name: "GitHub", level: "Version Control & Collaboration" },
      { name: "Visual Studio Code", level: "Primary Code Editor" },
    ],
  },
];

export const projectsList = [
  {
    id: "cloudvault",
    title: "CloudVault — Digital Document Management System",
    shortTitle: "CloudVault",
    status: "Completed",
    featured: true,
    tagline: "Full-Stack Cloud Document Management System",
    description:
      "CloudVault is a full-stack digital document management system designed to let users securely upload, organize, search, and manage documents in the cloud. It integrates AWS S3 for storage and MongoDB Atlas for metadata.",
    technologies: [
      "React",
      "Serverless API (Vercel)",
      "AWS S3",
      "MongoDB Atlas",
      "JWT",
      "bcrypt",
      "Framer Motion",
    ],
    features: [
      "User registration and login using JWT and bcrypt authentication",
      "File uploads directly to AWS S3 with time-limited presigned URLs",
      "Document creation, retrieval, updating, and deletion (CRUD)",
      "Pagination and folder-based organization structure",
      "Custom tags and full-text search across document names, descriptions, and tags",
      "Trash management with restore capability and permanent deletion",
      "Dashboard analytics with storage quota tracking and file-type distribution visualization",
      "Responsive sidebar layout, smooth transitions, and toast notifications",
    ],
    links: null,
    icon: "cloud",
  },
  {
    id: "ecowalk",
    title: "EcoWalk – Personalized Healthy Walking Route Recommendation System",
    shortTitle: "EcoWalk",
    status: "In Progress",
    featured: false,
    tagline: "Personalized Healthy Route Optimization",
    description:
      "A project focused on recommending personalized walking routes with an emphasis on healthier walking experiences. The system is intended to recommend routes before the user starts walking and includes work related to route recommendations and road-hazard information.",
    technologies: ["Route Recommendation", "Hazard Detection Logic", "Web Interface"],
    features: [
      "Pre-walk personalized route recommendation methodology",
      "Focus on healthier walking environments and cleaner paths",
      "Incorporation of road-hazard data to assist pedestrian safety",
      "Active research and prototype development under progress",
    ],
    links: null,
    icon: "footprints",
  },
  {
    id: "ticket-management",
    title: "Ticket Management System",
    shortTitle: "Ticket Management System",
    status: "Completed",
    featured: false,
    tagline: "Structured Issue Tracking & Workflow Management",
    description:
      "A ticket management application designed to organize and track tickets through a structured workflow. The project work has involved ticket fields such as title, description, creator, priority, and status.",
    technologies: ["Workflow Logic", "Ticket Lifecycle Tracking", "State Management"],
    features: [
      "Structured ticket creation with title, detailed description, and creator tracking",
      "Priority classification (Low, Medium, High, Urgent)",
      "Status tracking across lifecycle stages (Open, In Progress, Resolved, Closed)",
      "Clean UI for organizing support queues and resolving operational tasks",
    ],
    links: null,
    icon: "ticket",
  },
];

export const achievementsList = [
  {
    id: "volleyball",
    title: "Winner in volleyball inter college level",
    event: "Inter College Tournament",
    sport: "Volleyball",
    badge: "Champion",
  },
  {
    id: "cricket",
    title: "Winner in cricket inter class college level",
    event: "Inter Class Tournament",
    sport: "Cricket",
    badge: "Champion",
  },
];

export const certificationsList = [
  {
    id: "cert-1",
    title: "Forward Deployed Engineer",
    organization: "CertoMeter",
    badge: "Verified Credential",
    description:
      "Professional credential focused on client-facing technical solutions, rapid integration, system architecture adaptability, and practical problem resolution.",
    icon: "award",
  },
];
