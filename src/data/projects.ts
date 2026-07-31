export interface Screenshot {
  src: string
  alt: string
  label: string
}

export interface SidebarField {
  label: string
  value: string
}

export interface TechStackGroup {
  category: string
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  details: string[]
  tags: string[]
  github?: string
  link?: string
  liveDemo?: string
  demoBadge?: string
  year: string
  typeLabel: string
  problem: string
  solution: string
  architectureDescription: string
  architectureBullets?: string[]
  techStackGroups?: TechStackGroup[]
  features: string[]
  modules?: string[]
  screenshots: Screenshot[]
  lessonsLearned: string
  sidebarFields: SidebarField[]
}

export const projects: Project[] = [
  {
    id: "resumetailor-ai",
    title: "ResumeTailor AI",
    description: "ResumeTailor AI is an AI-powered resume customization platform that transforms a master resume into an ATS-optimized, recruiter-ready version tailored to any job description. The application combines semantic job analysis, intelligent keyword prioritization, AI-assisted content refinement, and secure PDF generation while enforcing strict factual accuracy through validation mechanisms that prevent unsupported information from being introduced. The result is a professional, ATS-safe resume that preserves the candidate's original experience while improving relevance for the target role.",
    details: [
      "Semantic keyword analysis",
      "AI-powered resume rewriting",
      "ATS optimization",
      "Interactive keyword selection",
      "Professional PDF rendering",
      "Resume scoring dashboard",
      "Resume completeness validation",
      "Hallucination prevention",
      "Secure authentication",
      "Production deployment"
    ],
    tags: ["Python", "FastAPI", "Google Gemini", "Jinja2", "WeasyPrint", "HTML", "CSS", "JavaScript", "Docker", "Render", "ATS Optimization"],
    year: "2026",
    typeLabel: "INDEPENDENT PROJECT // 2026",
    github: "https://github.com/Iamgokul7/ResumeTailor-AI",
    link: "/projects/resumetailor-ai",
    liveDemo: "https://resume-tailor-j5zl.onrender.com/login",
    demoBadge: "Password Protected (to prevent API abuse)",
    problem: "Most AI resume tools rewrite resumes by introducing unsupported skills, generic recruiter buzzwords, or fabricated experience. This reduces trustworthiness and may negatively impact hiring outcomes. The goal of ResumeTailor AI was to build a resume tailoring engine that improves ATS compatibility while ensuring every generated statement remains traceable to the user's original resume.",
    solution: "Developed a complete AI-powered resume customization workflow where users upload a master resume and a target job description. The application performs semantic analysis, extracts relevant keywords, allows users to prioritize keyword integration, generates recruiter-quality resume content using Google Gemini, validates outputs against the original resume to prevent hallucinations, and exports a professional ATS-friendly PDF.",
    architectureDescription: "ResumeTailor AI follows a modular FastAPI architecture designed for performance and reliability.",
    techStackGroups: [
      {
        category: "Frontend",
        technologies: ["HTML", "CSS", "JavaScript"]
      },
      {
        category: "Backend",
        technologies: ["Python", "FastAPI"]
      },
      {
        category: "Artificial Intelligence",
        technologies: ["Google Gemini API", "Semantic Job Description Matching"]
      },
      {
        category: "PDF",
        technologies: ["Jinja2", "WeasyPrint"]
      },
      {
        category: "Infrastructure",
        technologies: ["Docker", "Render"]
      },
      {
        category: "Authentication",
        technologies: ["Starlette Session Middleware", "Rate Limiting"]
      }
    ],
    features: [
      "AI Resume Tailoring",
      "ATS Optimization",
      "Semantic Job Description Analysis",
      "Keyword Selection Interface",
      "Resume Match Scoring",
      "Recruiter Readability Analysis",
      "Capability Match Analysis",
      "Resume Completeness Validation",
      "PDF Resume Generation",
      "Password Protected Access",
      "Session Authentication",
      "Rate Limiting",
      "Hallucination Prevention",
      "Responsive Interface"
    ],
    modules: [
      "Upload Resume",
      "Paste Job Description",
      "Analyze Keywords",
      "Select Priority Keywords",
      "Generate Tailored Resume",
      "Validate Resume",
      "Generate ATS PDF",
      "Download Final Resume"
    ],
    screenshots: [
      { src: "/images/projects/resumetailor-ai/LOGIN.png", alt: "ResumeTailor AI Login Interface", label: "01. Authentication Portal" },
      { src: "/images/projects/resumetailor-ai/UPLOADING THE RESUME AND THE JOB DESCRIPTION PAGE.png", alt: "Upload Resume and JD", label: "02. Input Analysis Interface" },
      { src: "/images/projects/resumetailor-ai/SELECTED KEYWORD PAGE.png", alt: "Keyword Selection", label: "03. Interactive Keyword Prioritization" },
      { src: "/images/projects/resumetailor-ai/TAILORED RESUME DOWNLOAD PAGE 1.png", alt: "Download Resume", label: "04. ATS-Optimized PDF Export" },
      { src: "/images/projects/resumetailor-ai/TAILORED RESUME DOWNLOAD PAGE 1  AND PREVIEW.png", alt: "Preview 1", label: "05. Resume Match Dashboard" },
      { src: "/images/projects/resumetailor-ai/TAILORED RESUME DOWNLOAD PAGE 2 AND PREVIEW.png", alt: "Preview 2", label: "06. Capability Match Analysis" },
      { src: "/images/projects/resumetailor-ai/TAILORED RESUME DOWNLOAD PAGE 3 AND PREVIEW.png", alt: "Preview 3", label: "07. Recruiter Readability Scoring" },
      { src: "/images/projects/resumetailor-ai/TAILORED RESUME DOWNLOAD PAGE 4 AND PREVIEW.png", alt: "Preview 4", label: "08. Resume Completeness Validation" },
      { src: "/images/projects/resumetailor-ai/TAILORED RESUME DOWNLOAD PAGE 5 AND PREVIEW.png", alt: "Preview 5", label: "09. Final Preview and Export" }
    ],
    lessonsLearned: "Building ResumeTailor AI highlighted the complexities of balancing generative AI capabilities with strict factual accuracy. Implementing hallucination prevention mechanisms required careful prompt engineering and post-generation validation. The integration of WeasyPrint and Jinja2 proved highly effective for programmatically generating pixel-perfect PDFs. Overall, the project reinforced best practices in building secure, user-centric AI applications optimized for real-world hiring constraints.",
    sidebarFields: [
      { label: "TIMELINE", value: "JUN 2026 – JUL 2026" },
      { label: "PROJECT TYPE", value: "Independent Project" },
      { label: "ROLE", value: "Full Stack Developer" },
      { label: "STATUS", value: "Completed" },
      { label: "DEPLOYMENT", value: "Render" },
      { label: "REPOSITORY", value: "GitHub" }
    ]
  },
  {
    id: "erpilot",
    title: "ERPilot AI",
    description: "ERPilot AI is a full-stack AI-powered Enterprise Resource Planning (ERP) platform developed as an independent post-graduation project. The system centralizes employee management, inventory tracking, supplier management, sales operations, reporting, and AI-assisted business insights within a secure multi-tenant SaaS architecture.\n\nBuilt using Python and Flask, the platform demonstrates enterprise software engineering principles including role-based access control, tenant-level data isolation, automated reporting, inventory monitoring, and conversational AI integration powered by Google's Gemini models.",
    details: [
      "Designed and developed a complete multi-tenant ERP SaaS architecture from scratch.",
      "Implemented employee, inventory, supplier, sales, reporting, and notification modules.",
      "Integrated Gemini AI for conversational business analytics and operational assistance.",
      "Built role-based access control supporting Admin, Manager, and Employee roles.",
      "Developed export functionality for CSV, Excel, and PDF business reports.",
      "Implemented automated inventory alerts, audit logging, and secure tenant-scoped data access."
    ],
    tags: ["Python", "Flask", "SQLite", "Gemini AI", "Multi-Tenant SaaS", "RBAC", "Reporting Engine"],
    year: "2026",
    typeLabel: "POST-GRADUATION PROJECT // 2026",
    github: "https://github.com/Iamgokul7/ERPilot-AI",
    link: "/projects/erpilot",
    problem: "Small and medium-sized businesses often manage employees, inventory, suppliers, and sales data across disconnected spreadsheets and isolated software tools. This fragmentation leads to poor visibility, duplicated work, reporting delays, and inefficient operational decision-making. Additionally, extracting business insights typically requires technical expertise, making data analysis inaccessible to many operational teams.",
    solution: "ERPilot AI addresses these challenges through a centralized ERP platform that combines operational management with AI-assisted decision support. The system introduces secure multi-tenant architecture, enabling multiple organizations to operate independently within a shared platform while maintaining strict data isolation. Business modules are integrated into a unified workflow, allowing users to manage employees, inventory, suppliers, sales transactions, reports, and notifications from a single dashboard. Gemini AI integration enables natural-language interaction with business data, helping users obtain operational insights without requiring SQL knowledge or advanced reporting skills.",
    architectureDescription: "ERPilot AI follows a modular Flask blueprint architecture designed for scalability and maintainability.",
    architectureBullets: [
      "Multi-Tenant SaaS Design with tenant-level database isolation.",
      "Flask Blueprint-based modular architecture.",
      "SQLite database engine with PostgreSQL-ready structure.",
      "Gemini AI conversational assistant integrated through dedicated AI service modules.",
      "Role-Based Access Control (RBAC) system for Admin, Manager, and Employee permissions.",
      "Automated reporting engine supporting CSV, Excel, and PDF exports.",
      "Notification system for operational alerts and inventory monitoring.",
      "Secure authentication using password hashing and session management."
    ],
    techStackGroups: [
      {
        category: "Backend",
        technologies: ["Python", "Flask", "SQLite"]
      },
      {
        category: "Frontend",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "Chart.js"]
      },
      {
        category: "AI",
        technologies: ["Google Gemini AI"]
      },
      {
        category: "Reporting",
        technologies: ["OpenPyXL", "ReportLab"]
      },
      {
        category: "Security",
        technologies: ["RBAC", "Password Hashing", "Session Authentication"]
      },
      {
        category: "Deployment Ready",
        technologies: ["Docker", "Gunicorn", "PostgreSQL Migration Support"]
      }
    ],
    features: [
      "Multi-Tenant SaaS Architecture",
      "Employee Management System",
      "Inventory Management & Stock Monitoring",
      "Supplier Directory Management",
      "Sales Order Processing",
      "AI-Powered Business Assistant",
      "CSV, Excel & PDF Report Generation",
      "Notification & Alert System",
      "Dashboard Analytics & KPI Tracking",
      "Role-Based Access Control (Admin / Manager / Employee)",
      "Tenant-Level Data Isolation",
      "Secure Authentication & Session Management",
      "Audit Logging & Activity Tracking"
    ],
    screenshots: [
      { src: "/images/projects/erpilot/01_Login_Page.png", alt: "ERPilot AI Login Interface", label: "01. Authentication Entry Portal" },
      { src: "/images/projects/erpilot/02_Register_Company_Page.png", alt: "Company Registration and Org Setup", label: "02. Multi-Tenant Enterprise Onboarding" },
      { src: "/images/projects/erpilot/03_Dashboard_Page.png", alt: "ERPilot AI Core Dashboard", label: "03. Central Analytics & Activity Dashboard" },
      { src: "/images/projects/erpilot/04_Employees_Module.png", alt: "HR & Employee Directory Module", label: "04. HR Management & Staff Directory" },
      { src: "/images/projects/erpilot/05_Add_Employee_Form.png", alt: "Employee Enrollment Form Layout", label: "05. Employee Profile Creation Form" },
      { src: "/images/projects/erpilot/06_Inventory_Module.png", alt: "Warehouse Stock and Inventory Logs", label: "06. Stock Inventory Catalog System" },
      { src: "/images/projects/erpilot/07_Add_Product_Form.png", alt: "Add Product Catalog Form", label: "07. Stock Item Registry Form" },
      { src: "/images/projects/erpilot/08_Suppliers_Module.png", alt: "Suppliers Directory List", label: "08. Supplier Directory & Vendor Registry" },
      { src: "/images/projects/erpilot/09_Add_Supplier_Form.png", alt: "Add Supplier Form Interface", label: "09. Vendor Profile Onboarding Form" },
      { src: "/images/projects/erpilot/10_Sales_Module.png", alt: "Sales Records and Transaction Logs", label: "10. Invoicing & Sales Ledger Module" },
      { src: "/images/projects/erpilot/11_Create_Sales_Order.png", alt: "Create Sales Order Transaction", label: "11. Sales Order Creation Pipeline" },
      { src: "/images/projects/erpilot/12_AI_Assistant_Module.png", alt: "LangChain AI Conversational Agent Interface", label: "12. Conversational Agent & Database Sync Panel" },
      { src: "/images/projects/erpilot/13_Notifications_Page.png", alt: "Enterprise Notifications Logs", label: "13. System Alerts & Transaction Notifications" },
      { src: "/images/projects/erpilot/14_Reports_Page.png", alt: "Analytical Reports Generator", label: "14. Enterprise Ledger Reports Panel" },
      { src: "/images/projects/erpilot/15_Database_File_View.png", alt: "Database Schema Logs", label: "15. Relational SQLite Schema Explorer" }
    ],
    lessonsLearned: "Building ERPilot AI reinforced the importance of modular architecture, data isolation, and scalable system design. The project provided hands-on experience in designing enterprise-grade workflows, implementing RBAC security models, integrating AI into business applications, and managing complex relational data structures. It also highlighted the challenges of balancing AI flexibility with operational reliability in production-style software systems.",
    sidebarFields: [
      { label: "TIMELINE", value: "APR 2026 – JUN 2026" },
      { label: "PROJECT TYPE", value: "Independent Project-Personal Initiative" },
      { label: "ROLE", value: "Sole Developer & System Architect" },
      { label: "STACK", value: "Python • Flask • SQLite • Gemini AI" },
      { label: "ARCHITECTURE", value: "Multi-Tenant SaaS ERP" },
      {
        label: "MODULES",
        value: "Employees\nInventory\nSuppliers\nSales\nReports\nAI Assistant\nNotifications"
      }
    ]
  },
  {
    id: "graphical-password",
    title: "Graphical Password Authentication With Data Hiding",
    description: "A multi-layer authentication and secure file sharing platform developed as a Final Year Engineering Project. The system combines traditional credential verification, DWT-based image authentication, graphical PIN validation, AES-encrypted file protection, and controlled file sharing workflows to strengthen user security and data privacy.\n\nThe platform was designed to address common weaknesses in traditional password-based systems while providing a secure environment for encrypted file storage, sharing, and access management through a user-friendly web application.",
    details: [
      "Developed a three-stage authentication workflow consisting of email/password verification, DWT-based verification image matching, and graphical PIN validation.",
      "Integrated Discrete Wavelet Transform (DWT) steganography techniques to securely embed and validate authentication information within user-selected verification images.",
      "Implemented AES encryption and decryption mechanisms to protect uploaded files and shared documents from unauthorized access.",
      "Designed a secure file request and approval system allowing controlled access to encrypted resources between users.",
      "Built a complete Flask-based web application using Python, OpenCV, SQLite, HTML, CSS, and JavaScript with administrative monitoring capabilities."
    ],
    tags: ["Python", "Flask", "OpenCV", "AES Encryption", "DWT Steganography", "SQLite"],
    year: "2025",
    typeLabel: "FINAL YEAR PROJECT // 2025",
    github: "https://github.com/Iamgokul7/Graphical-Password-Authentication-With-Data-Hiding",
    link: "/projects/graphical-password",
    problem: "Traditional authentication systems rely heavily on text-based passwords, making them vulnerable to brute-force attacks, credential reuse, phishing attempts, shoulder-surfing, and database breaches. Additionally, many file-sharing platforms lack strong authentication mechanisms and advanced encryption controls, exposing sensitive information to unauthorized access.\n\nThe challenge was to design a secure authentication framework that improves user verification while simultaneously protecting uploaded files through encryption and controlled access management.",
    solution: "The proposed solution introduces a multi-layer authentication framework that combines traditional credentials with graphical security techniques. Users must successfully complete email-password verification, verification image validation through DWT-based matching, and graphical PIN authentication before gaining access to the system.\n\nOnce authenticated, users can securely upload files that are automatically encrypted using AES. The platform also incorporates a request-based file-sharing workflow, ensuring that only approved users can access protected resources. By combining authentication, steganography, and encryption, the system delivers enhanced protection against unauthorized access and data exposure.",
    architectureDescription: "The application follows a modular Flask-based architecture composed of Authentication, Dashboard, File Sharing, AES Encryption, DWT Steganography, Security Monitoring, and Administration modules.\n\nUser credentials, verification images, graphical PIN mappings, encrypted files, and access requests are managed through a centralized SQLite database. OpenCV and PyWavelets are utilized for image processing and DWT operations, while AES cryptography secures file storage and transfer workflows. The architecture supports secure authentication, encrypted data management, and controlled file access through an integrated web interface.",
    techStackGroups: [
      {
        category: "Backend",
        technologies: ["Python", "Flask", "SQLite"]
      },
      {
        category: "Security & Cryptography",
        technologies: ["AES Encryption", "DWT Steganography", "PyWavelets"]
      },
      {
        category: "Frontend & Image Processing",
        technologies: ["HTML", "CSS", "JavaScript", "OpenCV"]
      }
    ],
    features: [
      "Three-stage authentication using password verification, image validation, and graphical PIN matching.",
      "DWT-based steganography for secure verification image processing and authentication validation.",
      "AES encryption and decryption for uploaded files and shared resources.",
      "Secure file upload, approval-based sharing, and protected download workflows.",
      "User account management and profile administration.",
      "Request-based access control system for secure file sharing.",
      "Administrative monitoring of user activities and system operations.",
      "SQLite-powered backend for credential management, encrypted file storage, and authentication records.",
      "Secure dashboard for managing files, requests, and account information.",
      "Enhanced protection against unauthorized access, shoulder-surfing, and credential compromise."
    ],
    screenshots: [
      { src: "/images/projects/graphical-password/1_Starting_Page.png", alt: "System Welcome & Navigation", label: "01. Application Landing Portal" },
      { src: "/images/projects/graphical-password/2_Registration_Page.png", alt: "User Profile Signup Layout", label: "02. Profile Registration & Enrollment" },
      { src: "/images/projects/graphical-password/3_Stegnography_Page.png", alt: "Steganography Cover Selection", label: "03. Cover Image Steganographic Setup" },
      { src: "/images/projects/graphical-password/4_Login_Page.png", alt: "Graphical Matrix Grid selection interface", label: "04. Grid Coordinates Authentication" },
      { src: "/images/projects/graphical-password/5_Image_Verification_Page.png", alt: "Image Payload Verification", label: "05. Cover Image Verification Panel" },
      { src: "/images/projects/graphical-password/6_Steganography_PIN_Verification_Page.png", alt: "PIN and Steganography Verification Screen", label: "06. Decryption & PIN Validation Console" },
      { src: "/images/projects/graphical-password/7_Dashboard_Page.png", alt: "Secure User Account Dashboard", label: "07. Authenticated User Dashboard Area" },
      { src: "/images/projects/graphical-password/8_Secure_File_Requests_Page.png", alt: "File Requests Log Console", label: "08. Secure File Transfer Log" },
      { src: "/images/projects/graphical-password/9_Secure_File_Upload_Page.png", alt: "Secure File Upload Portal", label: "09. Cryptographic Document Ingest" }
    ],
    lessonsLearned: "Building this project provided valuable hands-on experience in cybersecurity-focused software development, secure authentication design, image processing, cryptography, and web application architecture.\n\nThe implementation demonstrated how multiple security layers can significantly strengthen authentication workflows compared to traditional password-only systems. Integrating DWT steganography with AES encryption highlighted the practical challenges of balancing usability, security, and system performance while handling sensitive user data and file-sharing operations.\n\nThe project also reinforced the importance of secure storage practices, access control mechanisms, and modular software design when developing applications intended to protect confidential information.",
    sidebarFields: [
      { label: "TIMELINE", value: "JAN 2025 – MAY 2025" },
      { label: "PROJECT TYPE", value: "Final Year Major Project" },
      { label: "ROLE", value: "Sole Developer" },
      { label: "STACK", value: "Python • Flask • OpenCV • SQLite" },
      { label: "SECURITY", value: "AES Encryption + DWT Steganography" },
      { label: "AUTHENTICATION", value: "3-Level Security Verification" },
      {
        label: "MODULES",
        value: "Authentication\nGraphical PIN\nImage Verification\nFile Sharing\nAES Encryption\nAdmin Dashboard"
      }
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate Management System",
    description: "A web-based property management platform developed to simplify property discovery, listing management, client inquiries, and administrative operations. The system enables users to browse available properties, register accounts, search listings using multiple filters, submit inquiries, and interact with property managers through a centralized digital platform.\n\nThe project was designed to replace manual property management workflows with an accessible online solution that improves operational efficiency, enhances customer experience, and provides a structured database-driven environment for managing real estate information.",
    details: [
      "Developed a responsive property management platform using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Implemented user registration, authentication, property search, inquiry management, and administrative control modules.",
      "Built dynamic property listings with filtering options based on location, property type, and pricing criteria.",
      "Designed a centralized database structure to manage users, properties, inquiries, and administrative records.",
      "Created dedicated dashboards for administrators and users to streamline property management workflows."
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    year: "2024",
    typeLabel: "ACADEMIC PROJECT // 2024",
    github: "https://github.com/Iamgokul7/Real-Estate-Management-System",
    link: "/projects/real-estate",
    problem: "Traditional property management processes often rely on manual record keeping, paper-based documentation, and disconnected communication channels. These approaches make it difficult to maintain accurate property information, manage customer inquiries efficiently, and provide real-time access to available listings.\n\nProperty seekers frequently face challenges in locating suitable properties, while administrators struggle with maintaining updated records, handling inquiries, and tracking property availability across multiple channels.",
    solution: "The Real Estate Management System provides a centralized online platform where users can search and explore available properties, register accounts, submit inquiries, and access property information from any location.\n\nAdministrators can manage listings, monitor inquiries, update property information, and maintain platform operations through a dedicated management interface. By digitizing property management activities, the platform improves accessibility, operational efficiency, and customer engagement.",
    architectureDescription: "The application follows a traditional web-based architecture utilizing HTML, CSS, and JavaScript for the front-end interface, PHP for server-side processing, and MySQL as the primary relational database.\n\nThe system incorporates authentication modules, property listing management, inquiry handling, administrative controls, and database-driven property retrieval. User requests are processed through PHP services and synchronized with MySQL tables to ensure efficient data management and consistent system performance.",
    techStackGroups: [
      {
        category: "Frontend",
        technologies: ["HTML", "CSS", "JavaScript"]
      },
      {
        category: "Backend & Database",
        technologies: ["PHP", "MySQL"]
      },
      {
        category: "Environment",
        technologies: ["XAMPP"]
      }
    ],
    features: [
      "User registration and secure login system.",
      "Property listing catalogue with detailed property information.",
      "Dynamic property search and filtering capabilities.",
      "Property inquiry and contact request submission.",
      "Admin dashboard for property and user management.",
      "Property inventory management system.",
      "Agent and property information management.",
      "Database-driven content retrieval and updates.",
      "Responsive web interface for desktop and mobile devices.",
      "Centralized management of property records and customer interactions."
    ],
    modules: [
      "User Authentication",
      "Property Listings Management",
      "Property Search & Filtering",
      "Customer Inquiry Management",
      "Admin Dashboard",
      "User Registration",
      "Property Information Management",
      "Database Administration"
    ],
    screenshots: [
      { src: "/images/projects/real-estate/1_Dashboard_Page.png", alt: "User Landlord dashboard", label: "01. Real Estate Operations Console" },
      { src: "/images/projects/real-estate/2_About_Page.png", alt: "About Page and platform details", label: "02. Platform Overview & Bio" },
      { src: "/images/projects/real-estate/3_Properties_Page.png", alt: "Property inventory catalogue", label: "03. Property Listing Search Grid" },
      { src: "/images/projects/real-estate/4_Login_Page.png", alt: "Landlord Tenant login page", label: "04. User Role Credentials Portal" },
      { src: "/images/projects/real-estate/5_Registration_Page.png", alt: "New User Registration Screen", label: "05. User Profile Registration" },
      { src: "/images/projects/real-estate/6_User_Listed_Property_Page.png", alt: "My Listed Properties List", label: "06. Dynamic Property Portfolio Manager" },
      { src: "/images/projects/real-estate/7_Agent_Page.png", alt: "Real Estate Agent profiles list", label: "07. Agent Directory Console" },
      { src: "/images/projects/real-estate/8_Submit_Property_Page.png", alt: "Landlord submit property form", label: "08. Listing Creation Form" },
      { src: "/images/projects/real-estate/9_Admin_Login_Page.png", alt: "Admin Panel login page", label: "09. System Administrator Credentials" },
      { src: "/images/projects/real-estate/10_Admin_Dashboard_Page.png", alt: "Admin Panel dashboard controls", label: "10. System Administrator Dashboard" }
    ],
    lessonsLearned: "Developing the Real Estate Management System provided practical experience in full-stack web development, database design, user authentication, and administrative workflow management. The project strengthened understanding of relational database modeling, CRUD operations, session management, and responsive web application design. It also highlighted the importance of structured database architecture and user-centric design when building business-oriented web applications.",
    sidebarFields: [
      { label: "TIMELINE", value: "APR 2024 – MAY 2024" },
      { label: "PROJECT TYPE", value: "Academic Mini Project" },
      { label: "ROLE", value: "Team Member & Full-Stack Developer" },
      { label: "STACK", value: "HTML • CSS • JavaScript • PHP • MySQL" },
      { label: "DATABASE", value: "MySQL" },
      { label: "ARCHITECTURE", value: "Web-Based Client Server System" },
      {
        label: "MODULES",
        value: "Authentication\nProperty Listings\nProperty Search\nUser Management\nAdmin Dashboard\nInquiry Management"
      }
    ]
  }
]
