export const resumeData = {
  basics: {
    name: "Deekshitha GR",
    initials: "DGR",
    title: "Full Stack Developer | FinTech",
    summary:
      "Full Stack Developer with almost 2 years of experience delivering secure, scalable web applications in Banking domain using Angular, TypeScript, Oracle and .NET Core. Proven expertise in performance optimization, clean architecture, and RESTful API development. Strong track record of cross-functional collaboration and end-to-end ownership of critical modules, delivering enterprise-grade solutions aligned with business objectives.",
    location: "Bangalore, India",
    email: "deekshithagr30@gmail.com",
    phone: "6363743450",
    linkedin: "https://www.linkedin.com/in/deekshitha-g-r1b9a66212",
  },

  topImpact: [
    { metric: "60%", label: "Fraud Incident Reduction", icon: "shield" },
    { metric: "45%", label: "Performance Improvement", icon: "zap" },
    { metric: "8.56", label: "Engineering CGPA", icon: "award" },
  ],

  experience: [
    {
      company: "Atyati Technologies Pvt Ltd",
      role: "Full Stack Developer",
      dates: "June 2024 – Present",
      location: "Bangalore, India",
      modules: [
        {
          title: "Fraud Prevention & Device Integration",
          icon: "shield",
          color: "teal",
          metrics: ["60% fraud reduction"],
          bullets: [
            "Led end-to-end front-end development and backend integration for a banking operations platform, ensuring seamless communication between application layers.",
            "Integrated GPS tracking devices (UGR-86, OPL, Tatvik) with server-side validation logic to enable real-time device-level authentication.",
            "Designed and implemented fraud detection validation rules based on device telemetry data.",
            "Developed core operational modules including Document Management, Issuer RRN Enquiry, and User Profile Download to streamline internal banking workflows.",
            "Achieved a 60% reduction in fraud incidents through GPS-based device validation and strengthened transaction traceability.",
          ],
        },
        {
          title: "Frontend Performance Optimization",
          icon: "zap",
          color: "gold",
          metrics: ["45% performance boost"],
          bullets: [
            "Optimized Angular-based front-end modules by refactoring component lifecycle handling, lazy loading, and API call management, improving application load time.",
            "Redesigned UI architecture using a modular, reusable component structure to accelerate feature development and reduce code redundancy.",
            "Improved state management and rendering performance to enhance responsiveness across high-traffic banking workflows.",
            "Collaborated with backend teams to streamline API consumption and minimize unnecessary payload processing.",
            "Delivered a 45% performance improvement and significantly enhanced user experience in a production-scale banking application.",
          ],
        },
        {
          title: "UI Refactoring & Stability Enhancement",
          icon: "layers",
          color: "purple",
          metrics: ["Cross-browser compatibility"],
          bullets: [
            "Refactored legacy UI components to improve system stability, reduce technical debt, and enhance long-term maintainability.",
            "Standardized component structure and improved code reusability to support scalable feature enhancements.",
            "Collaborated closely with QA and product teams to identify UI inconsistencies and resolve cross-browser compatibility issues.",
            "Optimized rendering behaviour and responsiveness to ensure consistent performance across production environments.",
            "Improved platform reliability, reduced production UI defects, and enhanced cross-browser user experience.",
          ],
        },
        {
          title: "Full Stack Ownership & Production Deployment",
          icon: "server",
          color: "blue",
          metrics: ["Zero downtime", "End-to-end ownership"],
          bullets: [
            "Led complete end-to-end development and deployment of an enterprise banking platform, independently managing frontend (Angular), backend (.NET Core), database (Oracle), and production infrastructure setup.",
            "Designed and configured Linux (RHEL 9.6) production environments within the bank's infrastructure, installing and optimizing Nginx, Redis, .NET 8 SDK, Node.js, and PM2 for scalable application hosting.",
            "Architected and deployed secure RESTful APIs for critical banking modules including eKYC onboarding, user lifecycle management, bulk operations, and regional/branch administration.",
            "Implemented AES-GCM encryption and decryption mechanisms to ensure data-level security compliance aligned with financial-grade standards.",
            "Designed and optimized Oracle database schemas, including stored procedures, triggers, functions, and views to improve data integrity and query performance.",
            "Built a scalable Angular-based Admin Portal using Reactive Forms and RxJS with modular architecture, improving UI responsiveness and long-term maintainability.",
            "Managed API routing, versioning, and endpoint optimization while securely hosting Admin APIs and General APIs in production.",
            "Conducted comprehensive end-to-end validation across UI, API, and database layers to ensure performance benchmarks and functional accuracy.",
            "Diagnosed and resolved production issues using log analysis and query profiling, maintaining stable deployments and zero downtime.",
            "Collaborated in Agile ceremonies with QA and business stakeholders to deliver secure, high-quality releases within sprint timelines.",
          ],
        },
      ],
    },
  ],

  skills: [
    {
      category: "Languages",
      icon: "code",
      items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SQL", "C#"],
    },
    {
      category: "Frameworks & Libraries",
      icon: "layers",
      items: ["Angular", "Bootstrap", ".NET Core"],
    },
    {
      category: "Tools & Technologies",
      icon: "tool",
      items: [
        "Visual Studio",
        "VS Code",
        "Postman",
        "WinSCP",
        "PuTTY",
        "RDP",
        "Git",
        "Azure DevOps (CI/CD Pipelines)",
        "PM2",
        "Redis",
        "Nginx",
      ],
    },
    {
      category: "Core Concepts",
      icon: "cpu",
      items: [
        "Microservices Architecture",
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
      ],
    },
    {
      category: "Databases",
      icon: "database",
      items: ["Oracle", "SQL Server"],
    },
    {
      category: "Operating Systems",
      icon: "monitor",
      items: ["Linux", "Windows"],
    },
    {
      category: "Software Practices",
      icon: "git-branch",
      items: [
        "Agile Development",
        "RESTful API Design",
        "Secure Coding (AES-GCM)",
        "Application Deployment & Monitoring",
      ],
    },
  ],

  education: [
    {
      institution: "Vidya Vikas Institute of Engineering and Technology",
      location: "Mysuru, Karnataka",
      degree: "Bachelor of Engineering in Computer Science",
      cgpa: "8.56",
      dates: "December 2020 – May 2024",
    },
  ],

  achievements: [
    {
      title: "Rising Star Award",
      description:
        "Awarded as Rising Star for making impactful contributions to the company (FY Q3 2024-2025).",
      type: "award",
      icon: "star",
    },
    {
      title: "IEEE National Level Flagship Event (Ideathon) 2022 – First Place",
      description:
        "IEEE National Level Flagship Event (Ideathon) 2022 — secured First Place.",
      type: "competition",
      icon: "trophy",
    },
  ],
};
