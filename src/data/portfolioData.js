export const portfolioData = {
  personalInfo: {
    name: "M Komaethakhi",
    role: "DevOps Engineer | MERN Stack Developer | Full Stack Developer",
    avatar: "/Komaethakhi.svg",
    titles: [
      "DevOps Engineer",
      "MERN Stack Developer",
      "Full Stack Developer"
    ],
    introduction: "Passionate DevOps Engineer and Full Stack Developer specializing in automating pipelines, cloud deployment, and building scalable web applications.",
    aboutMe: "I am a B.E. Computer Science and Engineering student (2022 - 2027 batch). After taking a temporary academic break during the 2025-2026 academic year due to medical reasons, I re-joined in June 2026 with renewed energy and am currently pursuing my final year. I possess a deep interest in DevOps engineering, full-stack development, and automating deployment pipelines. Throughout my studies, I have focused on engineering robust web platforms, automated workflows, and containerized architectures. I am actively seeking DevOps and Software Engineering opportunities to contribute to growth-oriented projects.",
    resumeUrl: "/resume.pdf", // Path to resume PDF in public directory
    email: "komaethakhim@gmail.com",
    phone: "+91 90429 21809", // Professional contact number
    location: "Tamil Nadu, India",
    socialLinks: {
      github: "https://github.com/Komaethakhi",
      linkedin: "https://www.linkedin.com/in/komaethakhi-m-1b3989258",
      instagram: "https://instagram.com/komaethakhi_muthanantham",
      email: "mailto:komaethakhim@gmail.com"
    }
  },
  statistics: [
    { label: "Years of Learning", value: 4, suffix: "+" },
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Technologies Learned", value: 12, suffix: "+" },
    { label: "GitHub Contributions", value: 50, suffix: "+" }
  ],
  skills: {
    frontend: [
      { name: "HTML5", percentage: 95 },
      { name: "CSS3", percentage: 90 },
      { name: "JavaScript", percentage: 88 },
      { name: "React JS", percentage: 85 },
      { name: "UI/UX Design", percentage: 85 },
      { name: "Next.js", percentage: 50 }
    ],
    backend: [
      { name: "Node.js", percentage: 80 },
      { name: "Express.js", percentage: 82 },
      { name: "REST APIs", percentage: 88 }
    ],
    database: [
      { name: "MongoDB", percentage: 88 },
      { name: "Firebase", percentage: 85 },
      { name: "PostgreSQL", percentage: 50 }
    ],
    programmingLanguages: [
      { name: "Java", percentage: 85 },
      { name: "Python", percentage: 80 },
      { name: "JavaScript", percentage: 88 }
    ],
    tools: [
      { name: "Git", percentage: 85 },
      { name: "GitHub", percentage: 88 },
      { name: "VS Code", percentage: 95 },
      { name: "Postman", percentage: 85 },
      { name: "Android Studio", percentage: 80 },
      { name: "AI Prompt Engineering", percentage: 90 }
    ],
    cloudDeployment: [
      { name: "RedHat (RHCSA/RHCE)", percentage: 90 },
      { name: "AWS", percentage: 80 },
      { name: "Docker", percentage: 55 },
      { name: "Jenkins", percentage: 50 },
      { name: "GitHub Actions", percentage: 55 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Ticket Management System",
      category: "MERN",
      status: "Completed",
      description: "A comprehensive, multi-role dashboard for enterprise ticket tracking and IT service requests, featuring secure logins and automated alerts.",
      longDescription: "A full-stack support ticket platform designed to manage IT service requests efficiently. Built using the MERN stack, it features JWT authentication, customized user roles (Client, Agent, Admin), real-time ticket creation, status updates, priority queuing, and email notifications for seamless client-agent communication.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer", "CSS Modules"],
      features: [
        "Multi-role Authentication (User, Agent, Admin)",
        "Interactive Ticket Lifecycle Management (Create, Read, Update, Delete)",
        "Priority Assignment and Automated Status Workflows",
        "Automated Email Notifications upon Status/Assignment updates",
        "Admin Dashboard with user analytics and ticket resolution statistics"
      ],
      githubLink: "https://github.com/Komaethakhi/ticket-system",
      liveDemo: "#",
      image: "ticket_system"
    },
    {
      id: 2,
      title: "Movie Series Watchlist",
      category: "Frontend",
      status: "Completed",
      description: "An intuitive web application to discover, track, and manage your favorite movies and TV series with real-time media details.",
      longDescription: "A responsive, feature-rich watchlist application allowing users to search, filter, and track movie and TV series progress. Integrated with external media APIs to fetch real-time titles, posters, ratings, and plot summaries. Features custom lists, review additions, and persistent client-side or backend storage.",
      technologies: ["React", "CSS Modules", "REST APIs", "Framer Motion", "Local Storage"],
      features: [
        "Search and browse movies/series in real-time",
        "Add titles to personal watched and watchlist lists",
        "Detailed media summaries, cast lists, and ratings",
        "User reviews and rating capabilities",
        "Fully responsive and animated UI"
      ],
      githubLink: "https://github.com/Komaethakhi/Movie-Series-Watchlist",
      liveDemo: "#",
      image: "movie_watchlist"
    },
    {
      id: 3,
      title: "My ERP Portal",
      category: "MERN",
      status: "Completed",
      description: "A centralized Enterprise Resource Planning (ERP) portal streamlining resource management and administrative workflows.",
      longDescription: "A comprehensive ERP solution designed for educational institutions or business organizations. Features modules for user management, role-based access control, attendance tracking, resource scheduling, grade/payroll management, and administrative request pipelines.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Redux"],
      features: [
        "Centralized user database with secure authentication",
        "Role-based portals for administrators, staff, and users",
        "Attendance, schedules, and task assignment tracking",
        "Resource request and approval pipeline",
        "Reporting and export utilities"
      ],
      githubLink: "https://github.com/Komaethakhi/MyErpPortal",
      liveDemo: "#",
      image: "erp_portal"
    },
    {
      id: 4,
      title: "Just For You - Personalized Event Website",
      category: "Frontend",
      status: "Ongoing",
      description: "Custom, highly interactive web templates tailored for weddings, corporate events, and tech conferences.",
      longDescription: "A suite of personalized, single-page web applications for special events. Features rich micro-animations, RSVPs with spreadsheet integration, countdown timers, event schedules, photo galleries, and guestbook submissions.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Framer Motion", "GSAP"],
      features: [
        "Custom interactive RSVP forms",
        "Countdown timers and dynamic event schedulers",
        "Embedded location maps and galleries",
        "Guestbook with Google Sheets integration"
      ],
      githubLink: "#",
      liveDemo: "#",
      image: "event_websites"
    },
    {
      id: 5,
      title: "PingDo Mobile App",
      category: "Mobile",
      status: "Ongoing",
      description: "A lightweight, unified reminder and checklist mobile application designed for personal productivity.",
      longDescription: "A native Android productivity application built with Android Studio. It integrates scheduling alerts, recurrent tasks, progress bars, and localized checklist persistence to help users manage their daily routines from a single, unified view.",
      technologies: ["Java", "Android Studio", "SQLite", "Material Design", "Notifications API"],
      features: [
        "Combined reminder alerts and nested checklists",
        "Task categorization and color-coding",
        "Recurrent task schedulers",
        "Offline SQLite database persistence",
        "Push notification reminders"
      ],
      githubLink: "#",
      liveDemo: "#",
      image: "pingdo"
    },
    {
      id: 6,
      title: "AI Integrated Student Management",
      category: "MERN",
      status: "Ongoing",
      description: "An administrative student panel leveraging machine learning to predict academic performance and automate scheduling.",
      longDescription: "An AI-driven management portal built on the MERN stack. Integrates Python-based machine learning pipelines to analyze past grades and attendance, predicting students at risk of low scores or high absenteeism. Features admin panels, student/parent portals, and automated report generators.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Python", "scikit-learn", "REST APIs"],
      features: [
        "Centralized student/staff information panels",
        "Predictive academic success analytics (ML)",
        "Automated attendance tracking and alert triggers",
        "Dynamic scheduling and report card exporting",
        "Student/Teacher chat channels"
      ],
      githubLink: "#",
      liveDemo: "#",
      image: "student_management"
    }
  ],
  experience: [
    {
      role: "DevOps Engineer Intern",
      company: "Codingrim Technology Solutions",
      duration: "Jun 2026 - Present",
      description: "Working on streamlining software delivery pipelines, containerizing applications, and automating cloud infrastructure to enhance deployment speed, reliability, and security.",
      highlights: [
        "Automated deployment workflows using GitHub Actions CI/CD pipelines, reducing manual deployment efforts.",
        "Containerized full-stack web applications with Docker to ensure cross-environment consistency.",
        "Monitored and maintained cloud resources on AWS and Render to optimize application performance."
      ]
    },
    {
      role: "Red Hat Intern Trainee",
      company: "Advantage Pro (on behalf of Red Hat)",
      duration: "Aug 2024",
      description: "Conducted specialized technical training sessions at Sri Sairam Engineering College, preparing students and staff for their official Red Hat Certified System Administrator (RHCSA) examination credentials.",
      highlights: [
        "Delivered structured lessons on Linux core administration, user permissions, and storage configuration.",
        "Facilitated hands-on command-line terminal labs simulating RHCSA exam environments.",
        "Supported and mentored participants to resolve complex system configuration issues."
      ]
    },
    {
      role: "Full Stack Development & Automation Intern",
      company: "Codingrim Technology Solutions",
      duration: "Dec 2023 - May 2024",
      description: "Worked on modernizing core web panels, building automated workflows using Node.js and REST APIs, and integrating third-party messaging services. Refactored existing UI features to React, improving mobile responsiveness and page speed.",
      highlights: [
        "Integrated the official WhatsApp Business API for customer notification systems.",
        "Created reusable UI components in React, reducing codebase size by 20%.",
        "Managed database schema structures in MongoDB to optimize queries by 15%."
      ]
    }
  ],
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "P.S.R.Engineering College, Sivakasi-626140",
      duration: "2022 - 2027",
      status: "Final Year Student",
      details: "Focusing on Software Engineering, Database Management Systems, Web Technology, and Artificial Intelligence. Actively engaged in technical clubs, hackathons, and laboratory projects."
    }
  ],
  certifications: [
    {
      title: "Red Hat Certified System Administrator",
      organization: "Advantage Pro",
      date: "Oct 2023",
      credentialLink: "#"
    },
    {
      title: "UI/UX Designing using FIGMA",
      organization: "Meta Blueprint / Partner Academy",
      date: "Jan 2025",
      credentialLink: "#"
    },
    {
      title: "MERN Stack Developer Certification",
      organization: "Evoreia",
      date: "Feb 2025",
      credentialLink: "#"
    }
  ]
};
