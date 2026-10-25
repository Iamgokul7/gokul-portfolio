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
    description: "ResumeTailor AI turns a single master resume into a version tailored to any job description, ready for both ATS filters and human recruiters. It analyzes the job posting, lets you choose which keywords to prioritize, and uses Google Gemini to rewrite your bullets, summary, and project descriptions around them. The finished resume is exported as a clean PDF built with Jinja2 and WeasyPrint.\n\nThe main goal was accuracy. A Resume Completeness Validator checks the output against your original resume, so nothing is dropped and nothing is invented. Every line in the tailored version traces back to something you actually did.",
    details: [
      "Built the full tailoring pipeline from scratch, from job description analysis to PDF export.",
      "Integrated Google Gemini for recruiter-style rewriting with context-aware keyword placement.",
      "Added a Completeness Validator that rejects any output with missing or invented sections.",
      "Designed a three-panel keyword picker: master, JD-aligned, and gap keywords.",
      "Created a scoring dashboard covering ATS match, readability, and capability fit.",
      "Blocked 200+ soft-skill buzzwords so only real technical keywords surface.",
      "Rendered ATS-safe PDFs with Jinja2 and WeasyPrint in reverse chronological order.",
      "Deployed on Render with Docker, session login, and IP-based rate limiting."
    ],
    tags: ["Python", "FastAPI", "Google Gemini", "Jinja2", "WeasyPrint", "HTML", "CSS", "JavaScript", "Docker", "Render", "ATS Optimization"],
    year: "2026",
    typeLabel: "INDEPENDENT PROJECT // 2026",
    github: "https://github.com/Iamgokul7/ResumeTailor-AI",
    link: "/projects/resumetailor-ai",
    liveDemo: "https://resume-tailor-j5zl.onrender.com/login",
    demoBadge: "🔒 Password Protected (to prevent API abuse)",
    problem: "Most AI resume tools rewrite resumes by introducing unsupported skills, fabricated projects, or generic recruiter buzzwords that never appeared in the candidate\'s original experience. This erodes hiring credibility and creates liability during background checks. Existing tools also fail at ATS compatibility — dumping keywords without context or semantic relevance. The core challenge was to build a resume tailoring engine that genuinely improves ATS compatibility and recruiter readability while ensuring every generated statement remains traceable to factual content in the original master resume.",
    solution: "ResumeTailor AI solves this through a structured, multi-stage pipeline. Users upload a master resume and paste a target job description. The backend performs semantic JD analysis, extracts and classifies ATS keywords into three categories — keywords from the master resume, keywords present in the JD, and gap keywords the master supports — and presents an interactive selection interface. Users choose which keywords to prioritize. The AI then rewrites experience bullets, project descriptions, and the professional summary in recruiter-quality language, integrating selected keywords naturally. A Resume Completeness Validator cross-checks the output against every factual section of the uploaded resume and rejects any tailored version that drops or fabricates information. The validated resume is then exported as a professionally formatted, ATS-friendly PDF with hyperlinked GitHub, LinkedIn, and portfolio URLs.",
    architectureDescription: "ResumeTailor AI is a FastAPI application split into focused modules, so the web layer, the AI logic, and PDF rendering each stay independent and easy to change.",
    architectureBullets: [
      "FastAPI routes handle the four core jobs: keyword analysis, resume generation, text extraction, and PDF download.",
      "gemini_service.py holds every Gemini call, from tailoring and keyword analysis to bullet checks and summary fitting, so AI logic never leaks into the routes.",
      "pdf_service.py renders Jinja2 templates through WeasyPrint and trims content until the resume fits on a single page.",
      "storage.py keeps the resume bank and session data in memory across the multi-step generation flow.",
      "Session middleware protects every page, and a sliding-window rate limiter caps requests per IP to keep Gemini costs under control.",
      "Docker packages the app for Render, with the API key, session secret, and site passwords injected as environment variables.",
    ],
    techStackGroups: [
      {
        category: "Backend",
        technologies: ["Python 3.10+", "FastAPI", "Uvicorn", "Starlette"]
      },
      {
        category: "Artificial Intelligence",
        technologies: ["Google Gemini API", "Semantic JD Matching", "Prompt Engineering"]
      },
      {
        category: "PDF Generation",
        technologies: ["Jinja2 Templates", "WeasyPrint", "HTML Resume Templates"]
      },
      {
        category: "Frontend",
        technologies: ["HTML", "CSS", "Vanilla JavaScript"]
      },
      {
        category: "Infrastructure",
        technologies: ["Docker", "Render", "Environment Variables"]
      },
      {
        category: "Security",
        technologies: ["Session Middleware", "Rate Limiting", "Password Auth"]
      }
    ],
    features: [
      "Semantic job description analysis that picks up intent and required skills, not just matching words.",
      "Three-panel keyword selector with master, JD-aligned, and gap keywords you can toggle.",
      "Gemini rewriting of bullets, summaries, and project descriptions in recruiter-style language.",
      "Completeness Validator that rejects any resume missing a section from the master.",
      "Prompt and validation checks that stop invented skills, projects, or experience.",
      "Scoring dashboard for ATS match, readability, and capability fit.",
      "Soft-skill blocklist that keeps 200+ generic buzzwords out of the keyword list.",
      "Bullet quality checks that run before the PDF is rendered.",
      "Page-fit optimization that trims bullets to keep the resume on one page.",
      "ATS-friendly PDF export with clickable GitHub, LinkedIn, and portfolio links.",
      "PDF and DOCX resume uploads with built-in text extraction.",
      "Password login and per-IP rate limiting to protect the Gemini API."
    ],
    modules: [
      "Step 1: Upload Resume (PDF or DOCX)",
      "Step 2: Paste Target Job Description",
      "Step 3: Semantic Keyword Analysis",
      "Step 4: Interactive Keyword Prioritization",
      "Step 5: AI Resume Generation",
      "Step 6: Completeness Validation",
      "Step 7: Scoring Dashboard Review",
      "Step 8: ATS PDF Download"
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
    lessonsLearned: "The hardest part of ResumeTailor AI was not the Gemini integration. It was making the output trustworthy. Early versions sometimes dropped sections like certifications or internships without any warning, and a resume with missing sections is worse than no resume at all. Adding a completeness validator that checks every section against the master resume, and regenerates automatically when something is missing, fixed that.\n\nPrompt design mattered more than I expected. The same Gemini model behaved very differently depending on how the instructions were laid out. Splitting the persona, the factual constraints, and the formatting rules into separate prompt blocks gave far more consistent results than one long instruction.\n\nThe keyword picker taught me a product lesson. People trust a tool more when they can see and control what it is optimizing for, so the three-panel layout turned a black box into a set of choices the user makes.\n\nDeployment had its own surprises. WeasyPrint needs system fonts and GTK libraries, so getting PDF rendering to work inside Docker took more effort than the rendering code itself. The biggest takeaway is that an AI tool is only as reliable as the checks around the model, and those checks deserve as much engineering time as the model call.",
    sidebarFields: [
      { label: "TIMELINE", value: "JUN 2026 – JUL 2026" },
      { label: "PROJECT TYPE", value: "Independent Project" },
      { label: "ROLE", value: "Full Stack Developer" },
      { label: "STATUS", value: "Completed" },
      { label: "DEPLOYMENT", value: "Render (Docker)" },
      { label: "REPOSITORY", value: "GitHub" }
    ]
  },
  {
    id: "erpilot",
    title: "ERPilot AI",
    description: "ERPilot AI is a multi-tenant ERP platform for small businesses. One deployment serves many companies, and each company gets its own employees, inventory, suppliers, sales orders, reports, and notifications behind a single dashboard.\n\nIt also includes an AI assistant powered by Gemini 2.5 Flash. Instead of building a report or writing a query, a manager can ask a question like which products are low on stock, and get an answer based on that company's live data. The whole system is built in Python and Flask, as an independent project after graduation.",
    details: [
      "Built a multi-tenant ERP from scratch, with every query scoped to the signed-in company.",
      "Covered employees, inventory, suppliers, sales, reports, and notifications in one dashboard.",
      "Connected Gemini 2.5 Flash to live company data so staff can ask questions in plain English.",
      "Enforced Admin, Manager, and Employee permissions with a reusable role decorator.",
      "Made sales checkout deduct and restore stock atomically, with low-stock alerts.",
      "Wrote 37 pytest cases covering auth, CRUD, stock logic, exports, and role restrictions."
    ],
    tags: ["Python", "Flask", "SQLite", "Gemini AI", "Multi-Tenant SaaS", "RBAC", "Reporting Engine"],
    year: "2026",
    typeLabel: "INDEPENDENT PROJECT // 2026",
    github: "https://github.com/Iamgokul7/ERPilot-AI",
    link: "/projects/erpilot",
    problem: "Small businesses often run employees, stock, suppliers, and sales out of separate spreadsheets. Numbers drift out of sync, reports take manual effort, and nobody has one clear view of the business. Getting answers from that data usually needs someone who can write queries, which most operations teams cannot do.",
    solution: "ERPilot AI puts the core business modules in one application. A company registers once, gets its own workspace, and manages staff, products, suppliers, and orders from a shared dashboard. Every record carries a tenant ID, so companies stay separate even though they share one database.\n\nSales and inventory are connected: placing an order checks stock and deducts it in the same step, and cancelling or deleting an order puts the stock back. Low stock raises a notification. On top of this data, the AI assistant lets people ask questions in plain language and get answers without writing any SQL.",
    architectureDescription: "ERPilot AI is a Flask application organized into blueprints, with one shared database where every record belongs to a tenant.",
    architectureBullets: [
      "Flask blueprints split the app into nine modules: auth, dashboard, employees, inventory, suppliers, sales, reports, notifications, and the AI assistant.",
      "A before-request guard blocks every route except login, register, and the landing page, and a role decorator checks permissions on each action.",
      "Every table carries a tenant ID, and every query filters on the tenant stored in the user's session.",
      "The AI module loads the tenant's data as JSON, sends it to Gemini 2.5 Flash as context, and retries up to three times on rate limits or outages.",
      "Reports are generated on demand, with openpyxl for Excel files and ReportLab for PDFs.",
      "Docker Compose runs the app on Gunicorn next to a PostgreSQL container, while local development uses SQLite."
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
        technologies: ["Role-Based Access", "Password Hashing", "Session Auth"]
      },
      {
        category: "Deploy & Test",
        technologies: ["Docker Compose", "Gunicorn", "PostgreSQL", "Pytest"]
      }
    ],
    features: [
      "Company self-registration that creates a new tenant and its first admin.",
      "Tenant-scoped data, so one company never sees another company's records.",
      "Employee directory with departments, designations, and unique employee IDs.",
      "Inventory catalog with SKUs, reorder levels, and low-stock alerts.",
      "Supplier directory for vendor contacts and addresses.",
      "Sales orders that check and deduct stock at checkout and restore it on cancel or delete.",
      "Dashboard with KPI cards, a monthly revenue chart, stock distribution, and an activity timeline.",
      "AI assistant that answers questions about the company's own data in plain English.",
      "Retry handling for Gemini rate limits and outages, plus a log of every AI query.",
      "CSV, Excel, and PDF exports for employees, inventory, suppliers, and sales.",
      "Notification bell for new orders and inventory changes.",
      "Role-based permissions for Admin, Manager, and Employee users."
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
      { src: "/images/projects/erpilot/12_AI_Assistant_Module.png", alt: "Gemini-powered AI Assistant Interface", label: "12. Conversational Agent & Database Sync Panel" },
      { src: "/images/projects/erpilot/13_Notifications_Page.png", alt: "Enterprise Notifications Logs", label: "13. System Alerts & Transaction Notifications" },
      { src: "/images/projects/erpilot/14_Reports_Page.png", alt: "Analytical Reports Generator", label: "14. Enterprise Ledger Reports Panel" },
      { src: "/images/projects/erpilot/15_Database_File_View.png", alt: "Database Schema Logs", label: "15. Relational SQLite Schema Explorer" }
    ],
    lessonsLearned: "The biggest lesson was how much a multi-tenant system depends on discipline. Isolation here comes from filtering every query by tenant, so a single missed filter would leak data between companies. That pushed me to keep tenant lookups in one place and to write tests for the places where mistakes would hurt most.\n\nSales and inventory taught me to treat stock as something that has to stay correct. Creating, editing, cancelling, and deleting an order each change stock differently, and getting those paths consistent took more care than building the screens.\n\nThe AI assistant was easier to build than to trust. Sending the company's data as context and keeping the temperature low gave steady answers, but the model can still be slow or rate limited, so retries and query logging mattered as much as the prompt.\n\nIf I extended this project, I would move secrets fully into environment variables, add a proper audit trail for every write, and switch production to PostgreSQL with migrations.",
    sidebarFields: [
      { label: "TIMELINE", value: "APR 2026 – JUN 2026" },
      { label: "PROJECT TYPE", value: "Independent Project" },
      { label: "ROLE", value: "Sole Developer" },
      { label: "STACK", value: "Python • Flask • SQLite • Gemini AI" },
      { label: "ARCHITECTURE", value: "Multi-Tenant SaaS ERP" },
      { label: "MODULES", value: "7 core modules" }
    ]
  },
  {
    id: "graphical-password",
    title: "Graphical Password Authentication With Data Hiding",
    description: "This project replaces the usual username and password login with three checks in a row: your credentials, a verification image, and a four-digit PIN picked from images instead of typed. It was built as a final year project at Anand Institute of Higher Technology, in a team of two.\n\nOnce logged in, users can upload files that are encrypted with AES before they are stored. Other users can request a file, and they can only open it after the owner approves. The work was also written up and published as a research paper.",
    details: [
      "Built a three-stage login: email and password, image verification, then an image-based PIN.",
      "Used Haar DWT steganography to hide the user's email inside their verification image.",
      "Matched login images with OpenCV colour histograms, accepting a similarity of 0.9 or higher.",
      "Encrypted every uploaded file with AES-128 in EAX mode, using a fresh key per file.",
      "Added a request and approval flow, so only approved users can view or download a file.",
      "Published the work as a research paper in IJARCCE, April 2025."
    ],
    tags: ["Python", "Flask", "OpenCV", "AES Encryption", "DWT Steganography", "SQLite"],
    year: "2025",
    typeLabel: "FINAL YEAR PROJECT // 2025",
    github: "https://github.com/Iamgokul7/Graphical-Password-Authentication-With-Data-Hiding",
    link: "/projects/graphical-password",
    problem: "Text passwords are easy to guess, reuse, phish, or watch over someone's shoulder, and most file sharing tools protect files with little more than HTTPS. Once a login is broken, everything behind it is exposed.\n\nThe goal was a login that is harder to break but still easy for a person to remember, combined with file storage that stays protected even if someone gets into the database.",
    solution: "Login runs in three stages. First, the user signs in with email and password. Second, they upload their verification image, and the system compares it with the one registered. Third, they enter a four-digit PIN by choosing images instead of typing numbers. Each stage only opens if the previous one passed.\n\nAfter login, every uploaded file is encrypted with AES before it is stored. To share a file, another user sends a request, and the owner has to approve it. Only then can the file be decrypted and opened.",
    architectureDescription: "A Flask application with a single SQLite database, split into authentication, image processing, encryption, and file sharing logic.",
    architectureBullets: [
      "Registration happens in two steps: profile and verification image first, then the image-based PIN.",
      "Login runs the three checks in order, and each stage redirects back to login if the earlier one is missing.",
      "The user's email is embedded in the green channel of the verification image using a one-level Haar DWT, then saved as a lossless PNG.",
      "Uploads are encrypted with PyCryptodome (AES-EAX), and the ciphertext, key, nonce, and tag are stored in SQLite.",
      "View and download routes check ownership or an approved request, then decrypt and verify the authentication tag before sending anything.",
      "A viewer page previews decrypted text and image files in the browser, and other files download directly."
    ],
    techStackGroups: [
      {
        category: "Backend",
        technologies: ["Python", "Flask", "SQLite"]
      },
      {
        category: "Security",
        technologies: ["AES-128 (EAX)", "PyCryptodome", "DWT Steganography"]
      },
      {
        category: "Image Processing",
        technologies: ["OpenCV", "PyWavelets", "NumPy"]
      },
      {
        category: "Frontend",
        technologies: ["HTML", "CSS", "JavaScript"]
      }
    ],
    features: [
      "Three-stage login covering credentials, a verification image, and an image-based PIN.",
      "Verification image that carries the user's email hidden inside it with DWT steganography.",
      "Image matching with OpenCV colour histograms and a 0.9 similarity threshold.",
      "PIN entry from a grid of images instead of typed numbers.",
      "Registration with name, email, date of birth, phone, address, and gender.",
      "Passwords stored as SHA-256 hashes, never as plain text.",
      "AES-128 encryption for every uploaded file, with a unique key per file.",
      "Uploads for documents, images, and zip folders.",
      "File requests that the owner must approve before anyone else can open the file.",
      "Integrity check on every decryption, so a tampered file is rejected.",
      "In-browser preview for decrypted text and image files, and direct download for the rest.",
      "User dashboard for uploads, requests, and account details."
    ],
    screenshots: [
      { src: "/images/projects/graphical-password/1_Starting_Page.png", alt: "Application landing page", label: "01. Landing Page" },
      { src: "/images/projects/graphical-password/2_Registration_Page.png", alt: "Registration form with verification image upload", label: "02. Registration and Profile Setup" },
      { src: "/images/projects/graphical-password/3_Stegnography_Page.png", alt: "Image-based PIN setup screen", label: "03. Image-Based PIN Setup" },
      { src: "/images/projects/graphical-password/4_Login_Page.png", alt: "Login stage one with email and password", label: "04. Login, Stage 1: Credentials" },
      { src: "/images/projects/graphical-password/5_Image_Verification_Page.png", alt: "Login stage two image verification", label: "05. Login, Stage 2: Image Verification" },
      { src: "/images/projects/graphical-password/6_Steganography_PIN_Verification_Page.png", alt: "Login stage three PIN verification", label: "06. Login, Stage 3: PIN Verification" },
      { src: "/images/projects/graphical-password/7_Dashboard_Page.png", alt: "User dashboard", label: "07. User Dashboard" },
      { src: "/images/projects/graphical-password/8_Secure_File_Requests_Page.png", alt: "File requests and approvals", label: "08. File Requests and Approvals" },
      { src: "/images/projects/graphical-password/9_Secure_File_Upload_Page.png", alt: "Encrypted file upload page", label: "09. Encrypted File Upload" }
    ],
    lessonsLearned: "Building this showed me that adding layers does not automatically make a system secure. Each stage had to be simple enough for a person to finish, and the order mattered, because every stage only unlocks the next one.\n\nDWT steganography was where I learned the most. Hiding data in wavelet coefficients is easy to describe, but getting the embedding, the image format, and the capacity checks right took a lot of testing. Saving the image as lossless PNG was essential, because compression destroys the hidden bits.\n\nEncryption taught me that the algorithm is only half the problem. AES-EAX gave us encryption and tamper detection in one step, but where the keys are stored matters just as much.\n\nIf I built a second version, I would hash passwords with a salted algorithm like bcrypt, hash the PIN too, keep encryption keys apart from the files they protect, and use the hidden image data as part of the login check.",
    sidebarFields: [
      { label: "TIMELINE", value: "JAN 2025 – MAY 2025" },
      { label: "PROJECT TYPE", value: "Final Year Project" },
      { label: "ROLE", value: "Co-Developer, Team of 2" },
      { label: "STACK", value: "Python • Flask • OpenCV • SQLite" },
      { label: "SECURITY", value: "AES-128 + DWT Steganography" },
      { label: "AUTHENTICATION", value: "3-Stage Verification" }
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate Management System",
    description: "A PHP and MySQL web platform where visitors browse and filter property listings, registered users post and manage their own listings, and an admin panel controls the whole catalogue.\n\nBuilt as a three-member academic project on an open-source PHP codebase, it covers the full listing workflow from registration to admin moderation, backed by a eight-table relational database.",
    details: [
      "Public site with property grid, filters by type, sale or rent and city, state-wise browsing, and a detail page for every listing.",
      "User accounts for three roles (user, agent, builder) with registration, login and profile pages.",
      "Logged-in users can post, update and delete their own properties with image uploads and floor plans.",
      "Admin panel with a dashboard of live counts and CRUD screens for properties, users, agents, builders, cities, states, feedback and contact messages.",
      "Extras on the public side: instalment calculator, agent directory, contact form and a feedback form."
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    year: "2024",
    typeLabel: "ACADEMIC PROJECT // 2024",
    github: "https://github.com/Iamgokul7/Real-Estate-Management-System",
    link: "/projects/real-estate",
    problem: "Property details, enquiries and owner records are often kept in registers and spreadsheets. Buyers cannot search them, and owners cannot update a listing without going through someone else.\n\nAdmins also struggle to keep listings current, because there is no single place to see users, properties and messages together.",
    solution: "The system puts listings, users and enquiries in one MySQL database behind a PHP web app. Visitors search and filter listings on their own. Registered users add and edit their own properties.\n\nAdmins get a separate panel with a live dashboard and edit screens for every table, so the catalogue stays accurate without touching the database directly.",
    architectureDescription: "A classic three-tier PHP application running on XAMPP. Bootstrap pages render in the browser, PHP scripts handle each request, and a MySQL database named realestatephp stores the data.",
    architectureBullets: [
      "Presentation layer of Bootstrap, jQuery and Font Awesome pages served by Apache.",
      "One PHP script per page, sharing a single config.php for the MySQL connection.",
      "Session variables separate site users (uid) from admins (auser) with their own login pages.",
      "Eight tables: user, property, admin, state, city, about, contact and feedback.",
      "Property images and floor plans saved to the admin/property upload folder.",
      "A separate admin folder with its own header, dashboard and CRUD pages."
    ],
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
      "Registration with profile photo and a choice of user, agent or builder role.",
      "Login for users and a separate login for administrators.",
      "Property grid with filters for type, sale or rent, and city.",
      "State-wise property browsing from the home page.",
      "Property detail page with images, floor plans, features and owner contact.",
      "Users can add, update and delete their own listings.",
      "Image upload for up to five photos and three plan images per property.",
      "Instalment calculator on each property page.",
      "Agent directory and contact form that stores messages.",
      "Feedback form that admins review before it is shown.",
      "Admin dashboard with live counts of users, agents, builders and properties by type.",
      "Admin CRUD for properties, users, cities, states and site content."
    ],
    modules: [
      "Authentication",
      "Property Listings",
      "Search and Filters",
      "User Profiles",
      "Agents and Builders",
      "Admin Dashboard",
      "Contact and Feedback",
      "Location Management"
    ],
    screenshots: [
      { src: "/images/projects/real-estate/1_Dashboard_Page.png", alt: "Home page with search and featured properties", label: "01. Home Page" },
      { src: "/images/projects/real-estate/2_About_Page.png", alt: "About page", label: "02. About Page" },
      { src: "/images/projects/real-estate/3_Properties_Page.png", alt: "Property listing grid", label: "03. Property Listings" },
      { src: "/images/projects/real-estate/4_Login_Page.png", alt: "User login page", label: "04. User Login" },
      { src: "/images/projects/real-estate/5_Registration_Page.png", alt: "Registration page", label: "05. Registration" },
      { src: "/images/projects/real-estate/6_User_Listed_Property_Page.png", alt: "My listed properties", label: "06. My Listed Properties" },
      { src: "/images/projects/real-estate/7_Agent_Page.png", alt: "Agent directory", label: "07. Agent Directory" },
      { src: "/images/projects/real-estate/8_Submit_Property_Page.png", alt: "Submit property form", label: "08. Submit Property" },
      { src: "/images/projects/real-estate/9_Admin_Login_Page.png", alt: "Admin login page", label: "09. Admin Login" },
      { src: "/images/projects/real-estate/10_Admin_Dashboard_Page.png", alt: "Admin dashboard", label: "10. Admin Dashboard" }
    ],
    lessonsLearned: "This project taught me how a full listing workflow fits together: a relational schema, session based login, file uploads and an admin panel on the same database. Working in a team of three, I saw how much a shared schema matters before anyone writes pages.\n\nReading and testing the code also showed me where it falls short. Queries are built by joining raw input into SQL, passwords are hashed with unsalted SHA-1, and the database login is hard-coded. I would use prepared statements, password_hash and environment based config next time.",
    sidebarFields: [
      { label: "TIMELINE", value: "APR – MAY 2024" },
      { label: "PROJECT TYPE", value: "Academic Project" },
      { label: "ROLE", value: "Team Member" },
      { label: "STACK", value: "PHP • MySQL" },
      { label: "DATABASE", value: "MySQL" },
      { label: "ARCHITECTURE", value: "3-Tier Web App" }
    ]
  }
]
