export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  coursework: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export interface AchievementItem {
  title: string;
  category: "Award" | "Competition" | "Leadership" | "Publication";
  description: string;
  stat?: {
    value: string;
    label: string;
  };
}

export interface InterestItem {
  name: string;
  icon: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  percentage: number;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: "Full Stack" | "Database" | "AI" | "Testing" | "IDE";
}

export interface Profile {
  fullName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  about: {
    summary: string;
    careerGoals: string;
    strengths: string[];
    philosophy: string;
  };
  skills: SkillItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  interests: InterestItem[];
  languages: LanguageItem[];
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    portfolio: string;
  };
}

export const profileData: Profile = {
  fullName: "Bhavana Tarun Bala Anjani Kartikeya",
  title: "Computer Science Engineering Student (AI & ML)",
  tagline: "Building intelligent systems and machine learning architectures at KL University. Aspiring AI Engineer.",
  email: "tarun.bhavana123@gmail.com",
  phone: "+91 91827 78494",
  location: "Andhra Pradesh, India",
  resumeUrl: "#",
  about: {
    summary: "Ambitious Computer Science & Engineering student at KL University specializing in Artificial Intelligence and Machine Learning. Possess a strong academic record (9.75 CGPA in 1st Year) combined with competitive coding skills and experience developing local machine learning classification models. Passionate about translating mathematical concepts into clean, performant software solutions.",
    careerGoals: "To develop production-grade AI agentic workflows, contribute to high-performance deep learning models, and build robust software infrastructure for intelligent web ecosystems.",
    strengths: [
      "Algorithmic Problem Solving & C/C++",
      "Machine Learning & Data Classification",
      "Python Scripting & Data Science",
      "Full-Stack Web Development Basics",
      "Team Collaboration & Agile Methodologies"
    ],
    philosophy: "Perfect code is written at the intersection of mathematical clarity and clean logical structure. Continuous learning defines the master engineer."
  },
  skills: [
    // Database
    { name: "MongoDB", level: 88, category: "Database" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "Database Engineering", level: 88, category: "Database" },

    // AI
    { name: "Claude", level: 95, category: "AI" },
    { name: "Codex", level: 90, category: "AI" },
    { name: "Antigravity", level: 95, category: "AI" },
    { name: "Vibe Coding", level: 95, category: "AI" },

    // Testing
    { name: "Swagger", level: 82, category: "Testing" },
    { name: "Postman", level: 85, category: "Testing" },
    { name: "Debugging", level: 90, category: "Testing" },
    { name: "Testing", level: 85, category: "Testing" },

    // IDE
    { name: "VS Code", level: 90, category: "IDE" },
    { name: "Cursor", level: 92, category: "IDE" },
    { name: "Antigravity IDE", level: 95, category: "IDE" },
    { name: "IntelliJ", level: 80, category: "IDE" },

    // Full Stack
    { name: "Full Stack Development", level: 92, category: "Full Stack" },
    { name: "ReactJS & TypeScript", level: 80, category: "Full Stack" },
    { name: "Python Programming", level: 88, category: "Full Stack" },
    { name: "C / C++ Algorithms", level: 85, category: "Full Stack" }
  ],
  experience: [
    {
      company: "KL University AI Labs",
      role: "AI-ML Student Researcher",
      duration: "Aug 2025 - Present",
      location: "Andhra Pradesh",
      description: "Collaborating with senior researchers to model text classification workflows and index campus database resources using embeddings.",
      responsibilities: [
        "Built automated python scripts that pre-process and clean raw text documents for vector embeddings ingestion.",
        "Tested classification models using Scikit-Learn, achieving an 89% accuracy rate on experimental local data.",
        "Helped code dynamic search components using React and FastAPI to query Indexed research articles."
      ],
      achievements: [
        "Reduced database query search times by 25% by implementing lightweight vector index caching locally.",
        "Represented the department at the regional AI Student Summit with the classification project."
      ]
    },
    {
      company: "KL University Coding Association",
      role: "Technical Team Member",
      duration: "Sep 2025 - Present",
      location: "Andhra Pradesh",
      description: "Assisting in conducting programming workshops, mock hackathons, and resolving bugs for student labs.",
      responsibilities: [
        "Mentored 40+ first-year peers in basic C programming structures, pointers, and recursive functions.",
        "Designed and maintained the registration landing page for the national coding championship using Tailwind CSS."
      ],
      achievements: [
        "Successfully coordinated the 'CodeQuest 2025' hackathon registration portal, handling 500+ active submissions."
      ]
    }
  ],
  projects: [
    {
      title: "Micro Task Hub",
      description: "Full-stack task application featuring robust user login, secure JWT authentication, dynamic user role mapping, and responsive tracking specifications.",
      image: "src/assets/hero.png",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
      github: "https://github.com/bhavanatarun/micro-task-hub",
      live: "https://taskhub.demo.dev",
      featured: true
    },
    {
      title: "Interactive UI Report Generator",
      description: "Full-stack reporting platform that digests structured data telemetry and compiles it dynamically into visual analytics dashboards and reports.",
      image: "src/assets/hero.png",
      technologies: ["ReactJS", "Node.js", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/bhavanatarun/interactive-ui-reports",
      live: "https://reports.demo.dev",
      featured: true
    },
    {
      title: "Issue Resolution Dashboard",
      description: "Full-stack ticketing tracker for real-time diagnostics, support inquiries, and bug reports featuring reactive status updates and sorting layouts.",
      image: "src/assets/hero.png",
      technologies: ["React", "Express", "SQLite", "Socket.io"],
      github: "https://github.com/bhavanatarun/issue-resolver",
      live: "https://resolver.demo.dev",
      featured: false
    },
    {
      title: "Service Request Management",
      description: "Full-stack portal enabling end-users to submit and audit service requests with automated stage progression and email notifications.",
      image: "src/assets/hero.png",
      technologies: ["React", "Express", "MongoDB", "Node.js"],
      github: "https://github.com/bhavanatarun/service-request-portal",
      live: "https://requests.demo.dev",
      featured: false
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "KL University, Andhra Pradesh",
      year: "2025 - Present",
      score: "9.75 CGPA (1st Year)",
      coursework: [
        "Problem Solving through C",
        "Data Structures and Algorithms",
        "Introduction to AI & Machine Learning",
        "Discrete Mathematics",
        "Object-Oriented Programming (Java)"
      ]
    },
    {
      degree: "Intermediate Board (MPC - 98.2%)",
      institution: "Sri Chakra Bhavan, Andhra Pradesh",
      year: "2023 - 2025",
      score: "98.2%",
      coursework: [
        "Mathematics (Algebra, Calculus)",
        "Physics (Mechanics, Electromagnetism)",
        "Chemistry (Organic, Physical)"
      ]
    },
    {
      degree: "10th Class (SSC Board - 95%)",
      institution: "Sri Chaitanya Olympiad School, AP",
      year: "2022 - 2023",
      score: "95%",
      coursework: [
        "Mathematics",
        "General Science",
        "Social Studies",
        "English, Telugu"
      ]
    }
  ],
  certifications: [
    {
      name: "Flask API Certification",
      issuer: "Simplilearn",
      date: "2025",
      link: "#"
    },
    {
      name: "React + Vite Framework Developer",
      issuer: "freeCodeCamp",
      date: "2025",
      link: "#"
    },
    {
      name: "Responsive Web Design (HTML, CSS, JS)",
      issuer: "freeCodeCamp",
      date: "2024",
      link: "#"
    },
    {
      name: "API Development with .NET",
      issuer: "Udemy",
      date: "2025",
      link: "#"
    },
    {
      name: "VibeCoder Certification",
      issuer: "Freedom with AI",
      date: "2026",
      link: "#"
    },
    {
      name: "Code with AI",
      issuer: "Outskill",
      date: "2026",
      link: "#"
    },
    {
      name: "TechInterpreter Certification",
      issuer: "HP",
      date: "2026",
      link: "#"
    }
  ],
  achievements: [
    {
      title: "Quick Learner (School Academics)",
      category: "Award",
      description: "Consistent top academic performance throughout schooling, achieving a 95% score in 10th Class (Sri Chaitanya Olympiad) and a 98.2% score in Intermediate (Sri Chakra Bhavan).",
      stat: {
        value: "98.2%",
        label: "Intermediate"
      }
    },
    {
      title: "Olympiad Competitive Exams Scores",
      category: "Competition",
      description: "Placed in the top tier nationally in advanced logical and mathematical talent exams during secondary schooling.",
      stat: {
        value: "Top 5%",
        label: "National Ranking"
      }
    },
    {
      title: "Global Certifications Holder",
      category: "Publication",
      description: "Earned professional credentials and course completions from industry-leading platforms including Simplilearn, freeCodeCamp, Udemy, Outskill, and HP.",
      stat: {
        value: "7",
        label: "Credentials"
      }
    }
  ],
  interests: [
    {
      name: "Competitive Programming",
      icon: "Cpu",
      description: "Active problem solver on LeetCode and Codeforces, focusing on graphs, dynamic programming, and search algorithms."
    },
    {
      name: "Generative Algorithms",
      icon: "Layers",
      description: "Creating digital art structures and complex fractal designs using math formulas in Processing and Python."
    },
    {
      name: "Chess",
      icon: "Award",
      description: "Studying chess theory, standard tactical patterns, and playing active rapid matches online."
    }
  ],
  languages: [
    { name: "English", proficiency: "Professional", percentage: 90 },
    { name: "Telugu", proficiency: "Native / Mother Tongue", percentage: 100 },
    { name: "Hindi", proficiency: "Conversational", percentage: 65 }
  ],
  socials: {
    github: "https://github.com/klu-2500030890?tab=repositories",
    linkedin: "https://www.linkedin.com/in/bhavana-tarun-bala-anjani-kartikeya-8124a5359/",
    portfolio: "https://bhavanatarun.dev"
  }
};
