export interface TimelineEvent {
  id: string
  type: "internship"
  role: string
  company: string
  location: string
  period: string
  description: string[]
  certificate: string
}

export const experienceTimeline: TimelineEvent[] = [
  {
    id: "ajashia-tech",
    type: "internship",
    role: "Android App Development Intern",
    company: "Ajashia Technologies",
    location: "Chennai, India",
    period: "February 2025 – May 2025",
    description: [
      "Developed responsive mobile application features using Java and Kotlin to enhance user experience.",
      "Integrated Firebase backend services to handle secure user authentication and real-time database management.",
      "Implemented custom UI components following Material Design guidelines for seamless screen transitions and layouts.",
      "Executed debugging, performance optimization, and rigorous testing on target devices to improve application stability."
    ],
    certificate: "/certificates/internships/AJASHIA_TECHNOLOGIES_INTERNSHIP_CERTIFICATE.pdf"
  },
  {
    id: "motion-cut",
    type: "internship",
    role: "Frontend Web Development Intern",
    company: "Motion Cut",
    location: "Remote",
    period: "January 2025 – February 2025",
    description: [
      "Engineered responsive web interfaces utilizing HTML5 and CSS3 to ensure robust layout scalability.",
      "Optimized styles for cross-browser compatibility and mobile-first responsiveness across standard devices.",
      "Translated design mockups from Figma into clean, semantic markup to maintain layout consistency.",
      "Implemented usability enhancements and refined UI elements to improve user navigation flows."
    ],
    certificate: "/certificates/internships/MOTION_CUT_INTERNSHIP_CERTIFICATE.pdf"
  },
  {
    id: "mitsogo-tech",
    type: "internship",
    role: "Skill Up Program Intern",
    company: "Mitsogo Technologies",
    location: "Chennai, Tamil Nadu, India",
    period: "July 2024 – August 2024",
    description: [
      "Built user flows, interactive wireframes, and prototypes in Figma for software feature concepts.",
      "Coded responsive web pages using semantic HTML, CSS, and modern JavaScript for layout interactivity.",
      "Collaborated in a structured Agile/Scrum environment, participating in daily stand-ups and design reviews.",
      "Developed clean frontend layouts matching exact UI design mockups and specifications."
    ],
    certificate: "/certificates/internships/MITSOGO_TECHNOLOGIES_INTERNSHIP_CERTIFICATE.pdf"
  },
  {
    id: "codebind-tech",
    type: "internship",
    role: "Web Design Intern",
    company: "Codebind Technologies",
    location: "Chennai, India",
    period: "July 2023 – August 2023",
    description: [
      "Designed and structured clean website layouts using HTML and CSS for external client showcases.",
      "Applied responsive design principles to ensure visual alignment across diverse screen resolutions.",
      "Refined web interface designs to enforce visual consistency, layout grids, and brand typography.",
      "Resolved layout bugs and improved overall usability through styling adjustments."
    ],
    certificate: "/certificates/internships/CODEBIND_TECHNOLOGIES_INTERNSHIP_CERTIFICATE.pdf"
  }
]
