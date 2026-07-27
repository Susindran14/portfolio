// Susindran N - Developer Portfolio Data parsed from resume.pdf
import profileImg from './image.jpeg';

export const personalData = {
  name: "Susindran N",
  role: "Aspiring Software Engineer",
  subhead: "Computer Science Undergrad | Full-Stack Web & Mobile Developer",
  email: "susindran.natarajan@gmail.com",
  phone: "+91 6374331697",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/susindran-n-72b9022ab/",
  github: "https://github.com/Susindran14",
  profileImage: profileImg,
  status: "Available for Software Engineering Internships & Roles",
  objective: "Motivated and detail-oriented aspiring Software Engineer with a solid foundation in Computer Science and Engineering. Committed to deepening my expertise in the field while contributing to innovative software development initiatives within a forward-thinking organization.",
  about: [
    "I am a Computer Science and Engineering student at Dr. Mahalingam College of Engineering and Technology with a strong CGPA of 8.2. My journey spans full-stack web application development, mobile engineering with React Native, and embedded IoT systems.",
    "Driven by analytical thinking and problem-solving, I thrive on crafting performant applications, engineering clean RESTful APIs, and implementing scalable cloud databases like MongoDB Atlas and MySQL.",
    "Whether it is reverse engineering mobile apps, building smart IoT hardware logic, or presenting award-winning research on sustainable tech, I bring technical curiosity and dedication to every project."
  ],
  stats: [
    { label: "B.E. CGPA", value: "8.2", sub: "Dr. MCET Coimbatore" },
    { label: "Projects Completed", value: "3+", sub: "Web, Mobile & IoT" },
    { label: "Paper Presentation", value: "1st Place", sub: "Net Zero Energy Concept" },
    { label: "Certifications", value: "4+", sub: "NPTEL & Infosys" }
  ]
};

export const interestsData = [
  {
    title: "Web Development",
    desc: "Building dynamic, responsive full-stack applications with React, JavaScript, HTML/CSS, Python, and Django.",
    icon: "Layout"
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Designing efficient algorithm logic, problem-solving, and optimizing system performance.",
    icon: "Code2"
  },
  {
    title: "Cloud Computing & DevOps",
    desc: "Deploying cloud databases (MongoDB Atlas), version control with Git, and exploring scalable architectures.",
    icon: "Cloud"
  }
];

export const skillsData = {
  programming: [
    { name: "Java", level: "Advanced", icon: "Coffee", color: "from-amber-500 to-orange-600" },
    { name: "Python", level: "Advanced", icon: "FileCode", color: "from-blue-500 to-indigo-600" },
    { name: "C Language", level: "Intermediate", icon: "Cpu", color: "from-slate-400 to-slate-600" },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "Zap", color: "from-yellow-400 to-amber-500" }
  ],
  webAndMobile: [
    { name: "HTML5 / CSS3", level: "Advanced", icon: "Globe", color: "from-orange-500 to-red-500" },
    { name: "React Native", level: "Intermediate", icon: "Smartphone", color: "from-cyan-400 to-blue-500" },
    { name: "Django Framework", level: "Intermediate", icon: "Server", color: "from-emerald-500 to-teal-700" },
    { name: "RESTful APIs", level: "Advanced", icon: "Network", color: "from-purple-500 to-pink-500" }
  ],
  databasesAndTools: [
    { name: "MySQL", level: "Advanced", icon: "Database", color: "from-blue-600 to-cyan-600" },
    { name: "MongoDB / Atlas", level: "Intermediate", icon: "Layers", color: "from-emerald-600 to-green-500" },
    { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", color: "from-rose-500 to-red-600" },
    { name: "Arduino / C++ IoT", level: "Intermediate", icon: "HardDrive", color: "from-teal-500 to-emerald-600" }
  ],
  softSkills: [
    { name: "Verbal & Written Communication", desc: "Good clarity in technical discussions and documentation." },
    { name: "Analytical Thinking", desc: "Structured approach to debugging and algorithmic problem solving." },
    { name: "Adaptability & Learning", desc: "Quick to grasp new tech stacks and production frameworks." }
  ]
};

export const experienceData = [
  {
    role: "Full-Stack Web Development Intern",
    company: "Training Tranis",
    location: "Erode, Tamil Nadu",
    period: "2 Weeks Intensive Training",
    type: "Internship",
    description: "Developed full-stack web applications using Python, Django, HTML, CSS, and JavaScript, bridging front-end and back-end architectures.",
    highlights: [
      "Built dynamic, database-driven web applications with a strong focus on performance and scalability.",
      "Engineered clean RESTful APIs to handle seamless front-end and back-end communication.",
      "Improved overall site user experience by implementing fully responsive interfaces across devices."
    ],
    tech: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "REST APIs"]
  }
];

export const projectsData = [
  {
    id: "olio-mobile",
    title: "Olio Reverse Engineering Mobile Application",
    category: "Mobile App",
    tagline: "React Native & MongoDB Atlas clone with real-time features and cloud storage",
    description: "Recreated a functional clone of the Olio mobile application using React Native and MongoDB Atlas. Implemented core production features with a modular architecture and cloud data handling mirroring real-world application design.",
    features: [
      "User authentication & session management",
      "Item listings with cloud image upload workflows",
      "Request / Response interactive flow between users",
      "Real-time messaging system & interaction modules",
      "Scalable MongoDB Atlas backend structure"
    ],
    tech: ["React Native", "MongoDB Atlas", "Node.js", "Cloud Storage", "REST APIs"],
    github: "https://github.com/Susindran14",
    demo: "https://github.com/Susindran14",
    featured: true,
    badge: "Featured Mobile Project"
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation & Soil Moisturizing System",
    category: "IoT / Hardware",
    tagline: "Automated Arduino-powered smart water conservation system",
    description: "Designed and implemented an intelligent automated irrigation system using Arduino that continuously monitors soil moisture levels and triggers automatic watering cycles to eliminate water wastage.",
    features: [
      "Custom sensor interface and soil moisture monitoring",
      "Automated control logic for smart relay switching",
      "Precision circuitry built for 100% testing success rate",
      "Delivered low-cost, eco-friendly solution for agricultural efficiency"
    ],
    tech: ["Arduino", "C/C++", "Soil Moisture Sensors", "Relay Circuitry", "Embedded C"],
    github: "https://github.com/Susindran14",
    demo: "https://github.com/Susindran14",
    featured: true,
    badge: "Hardware & Automation"
  },
  {
    id: "hospital-mgmt",
    title: "Hospital Management System",
    category: "Python / Database",
    tagline: "Centralized Python & MySQL application for medical record & billing operations",
    description: "Developed a Python-based Hospital Management System to centrally manage patient records, doctor appointments, billing computations, and staff data with high data accuracy.",
    features: [
      "Centralized patient record management & billing logic",
      "Structured MySQL database schema with optimized queries",
      "Backend business logic for processing user requests",
      "Efficient data retrieval and secure information display"
    ],
    tech: ["Python", "MySQL", "Database Architecture", "SQL Queries"],
    github: "https://github.com/Susindran14",
    demo: "https://github.com/Susindran14",
    featured: true,
    badge: "Desktop & Database"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Dr. Mahalingam College of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "2023 - 2027",
    score: "CGPA: 8.2",
    details: "Focusing on Software Engineering, Data Structures & Algorithms, Web Technologies, Database Systems, and DevOps."
  },
  {
    degree: "Higher Secondary Certificate (Matriculation)",
    institution: "Vivekananda Higher Secondary School",
    location: "Paramathi Velur",
    period: "2022 - 2023",
    score: "Percentage: 86%",
    details: "Completed Higher Secondary education with distinction in Mathematics and Computer Science."
  },
  {
    degree: "Secondary School Leaving Certificate (Matriculation)",
    institution: "Vivekananda School",
    location: "Paramathi Velur",
    period: "2020 - 2021",
    score: "Status: Pass",
    details: "Foundational education in Science, Mathematics, and Languages."
  }
];

export const achievementsData = [
  {
    title: "1st Place - Paper Presentation",
    organization: "Technical Symposium",
    description: "Won First Price in Paper Presentation for delivering a comprehensive presentation on 'Net Zero Energy Concept' and sustainable engineering solutions.",
    icon: "Trophy",
    type: "Award"
  }
];

export const certificationsData = [
  {
    name: "Psychology of Learning",
    issuer: "NPTEL",
    badge: "NPTEL Certified"
  },
  {
    name: "Environment and Development",
    issuer: "NPTEL",
    badge: "NPTEL Certified"
  },
  {
    name: "Environmental Impact Assessment",
    issuer: "NPTEL",
    badge: "NPTEL Certified"
  },
  {
    name: "Python Bootcamp",
    issuer: "Infosys Springboard",
    badge: "Infosys Certified"
  }
];

export const languagesData = [
  { name: "English", proficiency: "Read, Write, and Speak (Professional)" },
  { name: "Tamil", proficiency: "Read, Write, and Speak (Native)" }
];
