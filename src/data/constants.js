import { Plus } from "lucide-react"

export const COURSES = [
  {
    id: '1',
    slug: 'ai-plus-python-fullstack-development',
    title: 'AI + Python Fullstack Development',
    shortDesc: 'Build production-ready AI applications using Python, React, Node.js & LangChain',
    category: 'AI + Fullstack Development',
    duration: '4 - 8 Weeks',
    hours: 60,
    mode: 'Live ',
    price: 2999,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 1243,
    students: 3821,
    isTrending: true,
    isFeatured: true,
    color: '#6C3DEB',
    level: 'Advanced',
    image: '/course-ai-python-fullstack.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tags: ['Python', 'React', 'Node.js', 'OpenAI', 'LangChain', 'MongoDB'],
    instructor: { name: 'Rajesh Kumar', title: 'Senior AI Engineer', exp: '12 yrs', avatar: null },
    highlights: ['Industry Projects', 'Internship', 'Placement', 'Certificate', 'Live Classes'],
    pricingTiers: [
      { duration: '4 Weeks', price: 2999 },
      { duration: '6 Weeks', price: 4499 },
      { duration: '8 Weeks', price: 5999 },
    ],
  },
  {
    id: '2',
    slug: 'ai-plus-python-web-development',
    title: 'AI + Python Web Development',
    shortDesc: 'Build modern AI-powered web applications with Python, Django, React & APIs',
    category: 'Web Development',
    duration: '4 - 8 Weeks',
    hours: 60,
    mode: 'Live',
    price: 2999,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 987,
    students: 2654,
    isTrending: true,
    isFeatured: true,
    color: '#00D9B0',
    level: 'Intermediate',
    image: '/course-ai-python-web.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tags: ['Python', 'MongoDB', 'React', 'API', 'HTML/CSS', 'JavaScript'],
    instructor: { name: 'Priya Anand', title: ' Senior Web Developer', exp: '9 yrs', avatar: null },
    highlights: ['Responsive Web Apps', 'API Development', 'Portfolio Project', 'Certificate', 'Live Classes'],
    pricingTiers: [
      { duration: '4 Weeks', price: 2999 },
      { duration: '6 Weeks', price: 4499 },
      { duration: '8 Weeks', price: 5999 },
    ],
  },
  {
    id: '3',
    slug: 'java-ai-fullstack-development',
    title: 'Java + AI Fullstack Development',
    shortDesc: 'Build enterprise AI web applications with Java, Spring Boot, React & AI integration',
    category: 'Web Development',
    duration: '4 - 8 Weeks',
    hours: 60,
    mode: 'Live + Recorded',
    price: 2999,
    originalPrice: 5999,
    rating: 4.7,
    reviews: 1108,
    students: 4210,
    isTrending: false,
    isFeatured: true,
    color: '#FF6B35',
    level: 'Intermediate',
    image: '/course-java-ai-fullstack.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    tags: ['Java', 'Spring Boot', 'React', 'AI', 'APIs', 'Docker'],
    instructor: { name: 'Senthil Kumar', title: 'Full Stack Architect', exp: '11 yrs', avatar: null },
    highlights: ['Enterprise Projects', 'AI Integration', 'Portfolio Development', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 2999 },
      { duration: '6 Weeks', price: 4499 },
      { duration: '8 Weeks', price: 5999 },
    ],
  },
  {
    id: '4',
    slug: 'java-ai-web-development',
    title: 'Java + AI Web Development',
    shortDesc: 'Build AI-powered enterprise web applications with Java, Spring Boot, React & intelligent APIs',
    category: 'Web Development',
    duration: '4 - 8 Weeks',
    mode: 'Live',
    hours: 60,
    price: 2999,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 756,
    students: 1890,
    isTrending: true,
    isFeatured: false,
    color: '#EF4444',
    level: 'Intermediate',
    image: '/course-java-ai-web.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    tags: ['Java', 'Spring Boot', 'HTML/CSS', 'AI', 'APIs', 'Docker'],
    instructor: { name: 'Vijay Prakash', title: 'AI Web Dev Specialist', exp: '8 yrs', avatar: null },
    highlights: ['AI Web Apps', 'Spring Boot APIs', 'Portfolio Project', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 2999 },
      { duration: '6 Weeks', price: 4499 },
      { duration: '8 Weeks', price: 5999 },
    ],
  },
  {
    id: '5',
    slug: 'ai-data-analyst',
    title: 'AI + Data Analyst',
    shortDesc: 'Build intelligent analytics dashboards with Python, AI, Excel & business data modeling',
    category: 'Data & Analytics',
    duration: '4 - 8 Weeks',
    hours: 60,
    mode: 'Live + Recorded',
    price: 3499,
    originalPrice: 6999,
    rating: 4.9,
    reviews: 1567,
    students: 5230,
    isTrending: true,
    isFeatured: true,
    color: '#F59E0B',
    level: 'Beginner',
    image: '/course-ai-data-analyst.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tags: ['Python', 'Pandas', 'Excel', 'AI Analytics', 'Power BI', 'SQL'],
    instructor: { name: 'Iyappan K.', title: 'AI Analytics Lead', exp: '10 yrs', avatar: null },
    highlights: ['AI Analytics', 'Business Reporting', 'Portfolio Project', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 3499 },
      { duration: '6 Weeks', price: 4999 },
      { duration: '8 Weeks', price: 6999 },
    ],
  },
  {
    id: '6',
    slug: 'ai-data-science',
    title: 'AI + Data Science',
    shortDesc: 'Learn AI-driven data science with Python, ML pipelines, visualization & business insights',
    category: 'Data & Analytics',
    duration: '4 - 8 Weeks',
    hours: 60,
    mode: 'Live + Recorded',
    price: 3499,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 720,
    students: 1980,
    isTrending: true,
    isFeatured: false,
    color: '#3B82F6',
    level: 'Intermediate',
    image: '/course-ai-data-science.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tags: ['Python', 'ML', 'Pandas', 'Visualization', 'Tableau', 'SQL'],
    instructor: { name: 'Arun Dhas', title: 'AI Data Science Lead', exp: '10 yrs', avatar: null },
    highlights: ['ML Pipeline Projects', 'Data Storytelling', 'AI Automation', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 3499 },
      { duration: '6 Weeks', price: 4999 },
      { duration: '8 Weeks', price: 6999 },
    ],
  },
  {
    id: '7',
    slug: 'ui-ux-design',
    title: 'UI/UX Design Professional',
    shortDesc: 'Figma, design systems, user research, prototyping & design thinking',
    category: 'Design',
    duration: '4 - 8 Weeks',
    hours: 60,
    mode: 'Live',
    price: 2499,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 890,
    students: 2780,
    isTrending: false,
    isFeatured: false,
    color: '#EC4899',
    level: 'Beginner',
    image: '/course-ui-ux-design.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'UX Research', 'Design Systems'],
    instructor: { name: 'Prasanth Selva', title: 'Senior UI Designer', exp: '8 yrs', avatar: null },
    highlights: ['Portfolio Projects', 'Internship', 'Placement', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 2499 },
      { duration: '6 Weeks', price: 4299 },
      { duration: '8 Weeks', price: 5999 },
    ],
  },
  {
    id: '8',
    slug: 'software-testing-qa',
    title: 'Software Testing & QA',
    shortDesc: 'Manual + Automation testing with Selenium, Cypress, JMeter & Postman',
    category: 'Testing',
    duration: '4 - 8 Weeks',
    hours: 210,
    mode: 'Live + Recorded',
    price: 4999,
    originalPrice: 12000,
    rating: 4.7,
    reviews: 712,
    students: 2134,
    isTrending: false,
    isFeatured: false,
    color: '#22C55E',
    level: 'Intermediate',
    image: '/course-software-testing-qa.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
    tags: ['Selenium', 'Cypress', 'JMeter', 'Postman', 'JIRA', 'Agile'],
    instructor: { name: 'Thennarasu P.', title: 'QA Lead Engineer', exp: '9 yrs', avatar: null },
    highlights: ['Manual + Automation', 'ISTQB Prep', 'Placement', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 4999 },
      { duration: '6 Weeks', price: 7999 },
      { duration: '8 Weeks', price: 9999 },
    ],
  },
  {
    id: '9',
    slug: 'machine-learning-ai',
    title: 'Machine Learning & AI',
    shortDesc: 'Master advanced ML algorithms, deep learning models, and real-world AI deployments.',
    category: 'AI & ML',
    duration: '6 - 12 Weeks',
    hours: 80,
    mode: 'Live',
    price: 3999,
    originalPrice: 8999,
    rating: 4.9,
    reviews: 642,
    students: 1540,
    isTrending: true,
    isFeatured: true,
    color: '#8B5CF6',
    level: 'Advanced',
    image: '/course-ml-ai.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Deep Learning'],
    instructor: { name: 'Karthik R.', title: 'AI Research Scientist', exp: '10 yrs', avatar: null },
    highlights: ['Deep Learning Projects', 'Model Deployment', 'Placement', 'Certificate'],
    pricingTiers: [
      { duration: '6 Weeks', price: 3999 },
      { duration: '8 Weeks', price: 5999 },
      { duration: '12 Weeks', price: 8999 },
    ],
  },
  {
    id: '10',
    slug: 'prompt-engineering-genai',
    title: 'Generative AI & Prompt Engineering',
    shortDesc: 'Learn to build powerful applications using ChatGPT, Claude, LLMs, and advanced prompting.',
    category: 'AI & ML',
    duration: '2 - 4 Weeks',
    hours: 30,
    mode: 'Live + Recorded',
    price: 1999,
    originalPrice: 4999,
    rating: 4.8,
    reviews: 890,
    students: 3102,
    isTrending: true,
    isFeatured: false,
    color: '#14B8A6',
    level: 'Beginner',
    image: '/course-prompt-engineering.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg',
    tags: ['ChatGPT', 'LLMs', 'Prompting', 'LangChain', 'AI Agents'],
    instructor: { name: 'Sowmya M.', title: 'GenAI Specialist', exp: '6 yrs', avatar: null },
    highlights: ['AI Prompt Crafting', 'Agent Building', 'Portfolio', 'Certificate'],
    pricingTiers: [
      { duration: '2 Weeks', price: 1999 },
      { duration: '4 Weeks', price: 2999 },
    ],
  },
  {
    id: '11',
    slug: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    shortDesc: 'Master AWS, Azure, Docker, Kubernetes, and CI/CD pipeline automation.',
    category: 'Security & DevOps',
    duration: '4 - 8 Weeks',
    hours: 70,
    mode: 'Live',
    price: 4500,
    originalPrice: 9999,
    rating: 4.7,
    reviews: 512,
    students: 1205,
    isTrending: false,
    isFeatured: false,
    color: '#0EA5E9',
    level: 'Intermediate',
    image: '/course-cloud-devops.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    instructor: { name: 'Arjun P.', title: 'Cloud Architect', exp: '14 yrs', avatar: null },
    highlights: ['Live Cloud Servers', 'Pipeline Setup', 'Placement', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 4500 },
      { duration: '8 Weeks', price: 8500 },
    ],
  },
  {
    id: '12',
    slug: 'cybersecurity-ethical-hacking',
    title: 'Cybersecurity & Ethical Hacking',
    shortDesc: 'Learn network security, penetration testing, and ethical hacking from scratch.',
    category: 'Security & DevOps',
    duration: '4 - 8 Weeks',
    hours: 60,
    mode: 'Live + Recorded',
    price: 3999,
    originalPrice: 8999,
    rating: 4.8,
    reviews: 730,
    students: 1840,
    isTrending: false,
    isFeatured: true,
    color: '#EF4444',
    level: 'Beginner',
    image: '/course-cybersecurity.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    tags: ['Kali Linux', 'Pen Testing', 'Network Sec', 'OWASP'],
    instructor: { name: 'Mohammed A.', title: 'Security Analyst', exp: '9 yrs', avatar: null },
    highlights: ['Live Attacks simulation', 'CEH Prep', 'Internship', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 3999 },
      { duration: '8 Weeks', price: 7999 },
    ],
  },
  {
    id: '13',
    slug: 'embedded-systems-c-arm',
    title: 'Embedded Systems with C & ARM',
    shortDesc: 'Learn low-level programming, ARM architecture, RTOS basics and interfacing for embedded products.',
    category: 'Hardware & Embedded',
    duration: '6 - 12 Weeks',
    hours: 80,
    mode: 'Live',
    price: 3999,
    originalPrice: 8999,
    rating: 4.7,
    reviews: 128,
    students: 420,
    isTrending: false,
    isFeatured: false,
    color: '#FF8A65',
    level: 'Intermediate',
    image: '/course-embedded-systems.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg',
    tags: ['C', 'ARM', 'RTOS', 'Microcontrollers', 'Embedded C'],
    instructor: { name: 'Arjun P.', title: 'Embedded Systems Lead', exp: '12 yrs', avatar: null },
    highlights: ['Hands-on Boards', 'RTOS Projects', 'Product Development', 'Certificate'],
    pricingTiers: [
      { duration: '6 Weeks', price: 3999 },
      { duration: '8 Weeks', price: 5999 },
      { duration: '12 Weeks', price: 8999 },
    ],
  },
  {
    id: '14',
    slug: 'iot-raspberrypi-arduino',
    title: 'IoT with Raspberry Pi & Arduino',
    shortDesc: 'Build connected devices, sensors and dashboards using Raspberry Pi, Arduino and MQTT.',
    category: 'Hardware & Embedded',
    duration: '4 - 8 Weeks',
    hours: 60,
    mode: 'Live',
    price: 3499,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 210,
    students: 980,
    isTrending: true,
    isFeatured: false,
    color: '#4ADE80',
    level: 'Beginner',
    image: '/course-iot-raspberrypi-arduino.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
    tags: ['Raspberry Pi', 'Arduino', 'MQTT', 'Sensors', 'Cloud'],
    instructor: { name: 'Vijay Prakash', title: 'IoT Engineer', exp: '8 yrs', avatar: null },
    highlights: ['Device Projects', 'Cloud Integration', 'Dashboarding', 'Certificate'],
    pricingTiers: [
      { duration: '4 Weeks', price: 3499 },
      { duration: '6 Weeks', price: 4999 },
    ],
  },
  {
    id: '15',
    slug: 'fpga-digital-design',
    title: 'FPGA & Digital Design',
    shortDesc: 'Learn VHDL/Verilog, FPGA workflows, timing and hardware acceleration for high-performance systems.',
    category: 'Hardware & Embedded',
    duration: '6 - 10 Weeks',
    hours: 70,
    mode: 'Live + Lab',
    price: 4499,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 96,
    students: 310,
    isTrending: false,
    isFeatured: false,
    color: '#A78BFA',
    level: 'Advanced',
    image: '/course-fpga-digital-design.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vhdl/vhdl-original.svg',
    tags: ['Verilog', 'VHDL', 'FPGA', 'Hardware Acceleration', 'Timing'],
    instructor: { name: 'Prasanth Selva', title: 'FPGA Architect', exp: '11 yrs', avatar: null },
    highlights: ['Lab Kits', 'Hardware Projects', 'Acceleration', 'Certificate'],
    pricingTiers: [
      { duration: '6 Weeks', price: 4499 },
      { duration: '10 Weeks', price: 7999 },
    ],
  },
  {
    id: '16',
    slug: 'robotics-mechatronics',
    title: 'Robotics & Mechatronics',
    shortDesc: 'Design and program robotic systems, sensors, actuators, control systems and mobile robots.',
    category: 'Hardware & Embedded',
    duration: '8 - 12 Weeks',
    hours: 100,
    mode: 'Live + Lab',
    price: 5999,
    originalPrice: 12999,
    rating: 4.7,
    reviews: 142,
    students: 640,
    isTrending: true,
    isFeatured: false,
    color: '#FB923C',
    level: 'Advanced',
    image: '/course-robotics-mechatronics.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/robotframework/robotframework-original.svg',
    tags: ['Robotics', 'Control', 'Actuators', 'Sensors', 'ROS'],
    instructor: { name: 'Mohammed A.', title: 'Robotics Lead', exp: '10 yrs', avatar: null },
    highlights: ['Mobile Robot Projects', 'ROS', 'Industrial Interfaces', 'Certificate'],
    pricingTiers: [
      { duration: '8 Weeks', price: 5999 },
      { duration: '12 Weeks', price: 9999 },
    ],
  },
  {
    id: '17',
    slug: 'industrial-iot-plc-automation',
    title: 'Industrial IoT & PLC Automation',
    shortDesc: 'Learn PLC programming, SCADA, industrial networking and IIoT integration for manufacturing automation.',
    category: 'Hardware & Embedded',
    duration: '6 - 10 Weeks',
    hours: 80,
    mode: 'Live',
    price: 5499,
    originalPrice: 11999,
    rating: 4.5,
    reviews: 64,
    students: 280,
    isTrending: false,
    isFeatured: false,
    color: '#06B6D4',
    level: 'Intermediate',
    image: '/course-industrial-iot-plc.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/siemens/siemens-original.svg',
    tags: ['PLC', 'SCADA', 'IIoT', 'Industrial Networks', 'Modbus'],
    instructor: { name: 'Thennarasu P.', title: 'Automation Engineer', exp: '9 yrs', avatar: null },
    highlights: ['PLC Labs', 'SCADA Projects', 'Industry Interfaces', 'Certificate'],
    pricingTiers: [
      { duration: '6 Weeks', price: 5499 },
      { duration: '10 Weeks', price: 8999 },
    ],
  },
]

export const CATEGORIES = [
  { id: 'all', label: 'All Courses', icon: '🎓' },
  { id: 'AI & ML', label: 'AI & ML', icon: '🤖' },
  { id: 'Web Development', label: 'Web Dev', icon: '💻' },
  { id: 'Data & Analytics', label: 'Data Science', icon: '📊' },
  { id: 'Security & DevOps', label: 'Security', icon: '🛡' },
  { id: 'Hardware & Embedded', label: 'Hardware', icon: '🛠' },
  { id: 'Design', label: 'Design', icon: '🎨' },
  { id: 'Marketing', label: 'Marketing', icon: '📈' },
  { id: 'Testing', label: 'Testing', icon: '🧪' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Subramaniam',
    role: 'Full Stack Developer',
    company: 'TCS',
    course: 'Java + AI Fullstack Development',
    rating: 5,
    text: "Synovers completely transformed my career. I went from a non-IT background to landing an 8.5 LPA role at TCS in just 6 months! The mentors are incredibly patient and the curriculum is exactly what industry needs.",
    avatar: null,
    batch: 'Jan 2026',
  },
  {
    id: 2,
    name: 'Rahul',
    role: 'Data Scientist',
    company: 'Zoho',
    course: 'AI + Data Analyst',
    rating: 5,
    text: "The AI + Data Analyst course at Synovers is hands down the best in Chennai. The curriculum is always current, and the placement support team worked tirelessly to get me my dream job at Zoho.",
    avatar: null,
    batch: 'Feb 2026',
  },
  {
    id: 3,
    name: 'Anitha Krishnan',
    role: 'Digital Marketing Manager',
    company: 'Infosys',
    course: 'Digital Marketing Master',
    rating: 5,
    text: "I was a B.Com graduate with zero tech knowledge. Synovers's structured approach and amazing instructors made me job-ready in 3 months. The Google Ads certification and portfolio were game changers!",
    avatar: null,
    batch: 'Mar 2026',
  },
  {
    id: 4,
    name: 'Karthik Rajan',
    role: 'AI Engineer',
    company: 'Amazon',
    course: 'AI + Python Fullstack Development',

    rating: 5,
    text: "The AI + Python Fullstack program is phenomenal. Real projects using GPT-4 and LangChain, mentored by engineers from top companies. Synovers's internship component was the key differentiator that got me into Amazon.",
    avatar: null,
    batch: 'Dec 2025',
  },
  {
    id: 5,
    name: 'Sowmya Devi',
    role: 'UI/UX Designer',
    company: 'Wipro',
    course: 'UI/UX Design Professional',

    rating: 5,
    text: "I changed careers from teaching to UX design at 31 — Synovers made it possible. The portfolio guidance and internship helped me build real-world experience that companies actually want.",
    avatar: null,
    batch: 'Jan 2026',
  },
  {
    id: 6,
    name: 'Mohammed Asif',
    role: 'Cyber Security Analyst',
    company: 'IBM',
    course: 'Java + AI Web Development',
    rating: 5,
    text: "The AI-powered web development training at Synovers is next-level. I built a real application with Spring Boot and React and got my offer from IBM within 4 months.",
    avatar: null,
    batch: 'Feb 2026',
  },
]

export const PRODUCTS = [
  {
    title: 'ERP & Business Systems',
    badge: 'Enterprise',
    icon: '🧠',
    description: 'Custom ERP solutions designed to streamline operations, automate daily workflows, and connect business functions in one place.',
    features: ['Finance & inventory modules', 'HR & payroll automation', 'Real-time reporting'],
  },
  {
    title: 'Web & App Platforms',
    badge: 'Digital',
    icon: '🌐',
    description: 'Fast, modern web and mobile experiences built for scaling education, services, and customer engagement.',
    features: ['Responsive design', 'API integrations', 'Secure deployment'],
  },
  {
    title: 'CRM & Customer Growth',
    badge: 'Growth',
    icon: '📈',
    description: 'Customer relationship tools that help teams manage leads, nurture relationships, and improve follow-ups.',
    features: ['Lead tracking', 'Client engagement', 'Automated workflows'],
  },
  {
    title: 'Analytics & Reporting',
    badge: 'Insight',
    icon: '📊',
    description: 'Clear dashboards and reporting systems that make performance easier to understand and act on.',
    features: ['Live dashboards', 'Business insights', 'Executive summaries'],
  },
]

export const STATS = [
  { value: '7,500+', label: 'Students Trained', icon: '🎓' },
  { value: '150+', label: 'Placements', icon: '💼' },
  { value: '5+', label: 'Hiring Partners', icon: '🏢' },
  { value: '97%', label: 'Placement Rate', icon: '🚀' },
]

export const MENTORS = [
  { id: 1, name: 'Rajesh Kumar', title: 'AI Engineer', exp: '12 yrs', specialty: 'AI Full Stack', rating: 4.9 },
  { id: 2, name: 'Priya Anand', title: 'Data Scientist', exp: '9 yrs', specialty: 'Data Science', rating: 4.8 },
  { id: 3, name: 'Senthil Kumar', title: 'Full Stack Architect', exp: '11 yrs', specialty: 'MERN Stack', rating: 4.9 },
  { id: 4, name: 'Iyappan K.', title: 'Marketing Head', exp: '10 yrs', specialty: 'Digital Marketing', rating: 4.9 },
  { id: 5, name: 'Vijay Prakash', title: 'Security Analyst', exp: '8 yrs', specialty: 'Cyber Security', rating: 4.7 },
  { id: 6, name: 'Prasanth Selva', title: 'Senior UI Designer', exp: '8 yrs', specialty: 'UI/UX Design', rating: 4.9 },
]

export const HIRING_PARTNERS = [
  'Infosys', 'TCS', 'Wipro', 'Accenture', 'IBM',
]

export const BLOG_POSTS = [
  {
    id: 0,
    title: 'Java Microservices in 2026: Building Scalable Enterprise APIs',
    excerpt: 'A practical guide to structuring Java microservices for reliability, performance, and fast delivery in modern enterprise environments.',
    category: 'Java',
    readTime: '7 min',
    date: 'Jul 20, 2026',
    slug: 'java-microservices-scalable-enterprise-apis-2026',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Developer working with Java code on a laptop screen',
    highlight: 'Strong Java architecture still powers scalable enterprise APIs in 2026',
    content: `Java remains a dominant choice for enterprise backends because of its stability, strong tooling, and mature microservices frameworks. In 2026, modern Java teams are pairing Spring Boot and Quarkus with Kubernetes, observability, and event-driven patterns to build APIs that scale without sacrificing developer productivity.

### Why Java still matters
Enterprise systems rely on Java for its robustness, performance, and backward compatibility. Developers can build resilient services with well-defined contracts, strict typing, and powerful JVM optimizations. That makes Java especially valuable for mission-critical domains like finance, healthcare, logistics, and large-scale SaaS products.

### Microservices best practices
A solid microservices design starts with clear service boundaries, lightweight APIs, and consistent observability. Java frameworks now make it easier to create fast startup times, low memory overhead, and out-of-the-box health checks. Teams should use contract-first APIs, distributed tracing, and automated deployment pipelines to keep services reliable as they grow.

### Practical steps for learners
If you want to specialize in Java backend development, focus on building real microservices with Spring Boot or Quarkus, connecting them through API gateways, and deploying them with Docker and Kubernetes. Learn how to design data models, handle retries, and surface meaningful metrics so you can ship systems that work well in production.

A strong Java engineer in 2026 is not only fluent in code, but also in service design, automation, and operational readiness. That combination is what makes enterprise Java teams fast, dependable, and easy to maintain.
`
  },
  {
    id: 1,
    title: 'How AI Copilots Are Reshaping Software Engineering in 2026',
    excerpt: 'From code generation to autonomous review workflows, modern teams are using AI copilots to move faster without sacrificing quality.',
    category: 'AI & ML',
    readTime: '7 min',
    date: 'Jul 18, 2026',
    slug: 'ai-copilots-software-engineering-2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Developer working with AI-assisted coding tools',
    highlight: 'AI copilots + engineering judgment = the new edge',
    content: `Software teams are no longer asking whether AI should be used in development. They are asking how to adopt it responsibly and scale it without losing quality.

### Why this matters
Modern engineers are pairing with copilots for code drafting, test generation, documentation, bug triage, and release summaries. The biggest gains are not only speed, but also consistency across large teams. When repetitive work is reduced, developers can spend more time solving meaningful problems and building better product experiences.

High-quality engineering is not just about writing code faster. It is also about making fewer mistakes, maintaining clarity across the team, and keeping product delivery dependable under pressure. That is why AI tools are becoming valuable only when they are used with discipline and structure.

### What high-performing teams do
High-performing teams treat AI as a collaborative tool rather than a shortcut. They use it to generate boilerplate, improve documentation, and accelerate testing, but they still keep architecture decisions, code review standards, and system ownership in human hands. This balance keeps delivery fast while protecting quality and long-term maintainability.

They also measure success with better outcomes, not just faster output. A team that ships fewer bugs, reviews code more effectively, and keeps knowledge in the system will always outperform a team that simply produces more lines of code in less time. In many companies, the real advantage is not speed alone, but reliability under pressure.

### A practical mindset for developers
The strongest developers in 2026 will not be the ones who blindly accept every AI suggestion. They will be the ones who can evaluate, refine, and challenge the output intelligently. That means understanding prompts clearly, validating logic, checking edge cases, and knowing where automation should stop.

The real advantage comes from combining technical depth with judgment. A developer who understands architecture, debugging, and system behavior can use AI as a multiplier instead of relying on it blindly. In practice, that means becoming more intentional with your work and more confident in your decisions.

### What learners should focus on
If you want to stay relevant in 2026, build fluency in prompt design, API integration, debugging workflows, and system design. The best candidates combine technical depth with judgment. They know when AI helps, when it should be questioned, and when human reasoning is still the real differentiator.

For students and job seekers, the best approach is simple: learn the fundamentals well, build practical projects, and use AI to speed up your workflow without giving up your own understanding. The goal is not to replace skill with automation, but to become faster and sharper with the help of the right tools.
`
  },
  {
    id: 2,
    title: 'How to Get a Data Science Job in 90 Days (Roadmap)',
    excerpt: 'A step-by-step practical guide to landing your first data science role — from Python basics to your first offer letter.',
    category: 'Data Science',
    readTime: '8 min',
    date: 'Jul 8, 2026',
    slug: 'data-science-job-90-days',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Data analytics dashboard and charts',
    highlight: 'Build depth, then present your story clearly',
    content: `This 90-day roadmap is designed for practical progress, not just inspiration. The goal is to build momentum through a structured plan that helps you grow from beginner level to job-ready confidence in a short span of time.

### Week plan
During the first three weeks, focus on Python fundamentals, Pandas, SQL, and data cleaning. Build small scripts that help you understand real data, not just theoretical concepts. By the end of this phase, you should be comfortable reading datasets, writing simple transformations, and solving basic analysis problems.

In weeks four to six, shift your attention to statistics, feature engineering, and basic machine learning models with scikit-learn. This is where you start connecting data understanding with problem-solving. The aim is to move from collecting data to making useful predictions and drawing meaningful insights. This stage matters because it teaches you how to think like an analyst rather than just follow instructions.

The best learners in this phase do not try to study everything at once. They focus on one concept at a time, practice daily, and make sure their notebooks and scripts are clear enough to explain to someone else.

In the final stretch, build one strong capstone project that includes data collection, model training, evaluation, and a polished presentation. It should tell a clear story: the problem, your approach, the model, and the business value. A strong portfolio project can often matter more than a long list of certificates.

You should also prepare your GitHub profile, resume, and interview stories before the last week. Employers will remember how clearly you explain your decisions, not just how many tools you know.

### Interview tip
Prioritize depth over breadth, and prepare a clear case-study that demonstrates problem, approach, and impact. Employers want to see that you can think clearly, explain your decisions, and connect technical work to real-world outcomes.

Consistency matters more than speed. A learner who practices regularly, builds small projects, and improves every week will always stand out more than someone who only studies for a few days and stops. The strongest candidates are usually the ones who show steady progress over time.
`
  },
  {
    id: 3,
    title: 'MERN vs MEAN Stack: Which Should You Learn in 2026?',
    excerpt: 'A practical guide to choosing the right full-stack path for your career, based on projects, learning style, and job goals.',
    category: 'Web Dev',
    readTime: '6 min',
    date: 'Jul 5, 2026',
    slug: 'mern-vs-mean-2026',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Full-stack web development setup with modern coding workspace',
    highlight: 'Pick the stack that helps you build faster and think more clearly',
    content: `Choosing between MERN and MEAN is not just about technology. It is about finding the learning path that fits your mindset, your project goals, and the kind of applications you want to build in the future.

### Why this comparison matters
MERN uses React for the front end, while MEAN uses Angular. Both are strong options, but they offer different experiences. React is often preferred by developers who enjoy flexibility, reusable components, and a large ecosystem of libraries. Angular is better suited for teams that want a more structured and opinionated framework.

The important part is not to chase trends blindly. You should choose the stack that matches the kind of projects you want to create and the kind of development experience you enjoy most.

### When MERN is a better choice
MERN is a great option if you want to build modern, interactive web apps with a strong community, faster UI development, and lots of learning resources. It is especially popular for startups, product teams, and freelance developers who need speed and flexibility. If your goal is to build stylish interfaces quickly and experiment freely, MERN often feels more natural.

It also gives you a lot of freedom to choose libraries and tools that fit your workflow, which can be very helpful when learning independently. Many developers enjoy MERN because it lets them move quickly from idea to working prototype.

### When MEAN makes more sense
MEAN is a strong choice if you prefer a framework with clear architecture, built-in patterns, and consistency across large projects. It can be a smarter option for enterprise teams that want long-term maintainability and a more standardized approach. If you enjoy following strict conventions and building scalable internal systems, MEAN can be a very practical choice.

This structure can save time later because the codebase stays organized and the team can work with fewer surprises.

### What employers really care about
At the end of the day, recruiters are not just looking for a stack name on your resume. They want to see that you can build real features, connect frontend and backend smoothly, design APIs, handle authentication, and deploy complete applications confidently. Your portfolio matters far more than whether you picked one stack over another.

A candidate who can explain their project decisions clearly and demonstrate strong problem-solving skills will always stand out more than someone who only mentions a framework name. Employers want to see whether you can think like a builder, not just a learner.

### Final advice
If you are just starting out, choose the stack that helps you stay consistent and finish projects. If you enjoy flexibility, go with MERN. If you prefer structure and long-term organization, MEAN is a solid path. The best choice is the one that helps you learn deeply, build confidently, and keep improving over time. In the end, the stack matters less than your ability to build useful things and keep learning.
`
  },
  {
    id: 4,
    title: 'Why Python Still Matters for Careers in 2026',
    excerpt: 'Python remains one of the most practical languages for automation, data work, AI, and fast product development.',
    category: 'Programming',
    readTime: '5 min',
    date: 'Jul 2, 2026',
    slug: 'why-python-still-matters-2026',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Python code on a laptop screen',
    highlight: 'Simple syntax, strong ecosystem, and endless use cases',
    content: `Python continues to be one of the most valuable programming languages for beginners and professionals alike. Its simple syntax makes it approachable, while its ecosystem supports everything from automation to machine learning and backend development.

### Why it remains strong
The reason Python remains relevant is that it fits real-world needs. Teams use it for scripts, web services, data analysis, AI workflows, and even DevOps tasks. Because of that, Python is often the first language students learn and the last one many professionals stop using.

It is also a language that grows with you. You can begin with small scripts and gradually move into serious projects, which makes it highly practical for long-term career growth.

### Where it shines
Python is especially powerful in fast-moving environments. It helps developers build prototypes quickly, test ideas efficiently, and connect different systems with less complexity. For students and startups, that speed can make a huge difference.

It is particularly useful when you want to turn an idea into a working solution without spending weeks setting up the basics first. That practical advantage is one reason Python keeps appearing in modern product teams and automation projects.

### What to learn next
If you are learning Python, do not stop at syntax alone. Focus on libraries, debugging, writing clean functions, and using Python in practical projects such as automation tools, dashboards, APIs, or simple AI applications. The more you connect theory to real projects, the stronger your confidence will become. A practical learner often grows faster than someone who only consumes tutorials without building anything.
`
  },
  {
    id: 5,
    title: 'How to Build a Strong Portfolio for Tech Jobs',
    excerpt: 'A portfolio is often more powerful than a certificate when employers evaluate real-world readiness.',
    category: 'Career Tips',
    readTime: '6 min',
    date: 'Jun 28, 2026',
    slug: 'build-strong-portfolio-tech-jobs',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Developer presenting a portfolio project',
    highlight: 'Projects show skill better than resumes alone',
    content: `A strong portfolio can often make the difference between getting noticed and being overlooked. Employers want proof that you can solve problems, build solutions, and communicate your thinking clearly.

### What should be in your portfolio
Your portfolio should include a few well-explained projects that show variety and depth. Each project should explain the problem, the approach, the tools used, and the final outcome. A simple project with a strong story often performs better than a large project with no explanation.

A good portfolio does not need to look flashy. It needs to feel thoughtful, clear, and realistic.

### How to present it well
Keep your writing simple and direct. Add screenshots, live links, short videos, or a GitHub repository. The goal is not to impress people with complexity, but to show that you understand the process from idea to implementation.

If possible, include a short note about what you learned from each project. That makes your work feel more mature and reflective. Employers often prefer thoughtful presentations over overly polished but shallow work.

### Final tip
Choose projects that reflect the kind of job you want. If you want web development work, show useful frontend and backend projects. If you want data roles, focus on analysis, dashboards, and clear insights. Your portfolio should feel like a story of your growth, not just a list of completed tasks. Employers remember clarity and purpose more than sheer volume.
`
  },
  {
    id: 6,
    title: 'The Rise of Cloud Skills in Modern Tech Careers',
    excerpt: 'Cloud knowledge is becoming a core skill for developers, analysts, and IT professionals across industries.',
    category: 'Cloud',
    readTime: '5 min',
    date: 'Jun 24, 2026',
    slug: 'rise-of-cloud-skills',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cloud computing and digital infrastructure concept',
    highlight: 'Cloud skills are now part of everyday tech work',
    content: `Cloud computing has moved from a niche specialty to a core requirement in many tech roles. Companies now expect professionals to understand how applications are deployed, managed, and scaled in online environments.

### Why it matters
Cloud platforms make it easier to host services, manage data, and support teams remotely. Professionals who understand cloud basics can contribute more effectively to product delivery and infrastructure planning.

This is one of those skills that becomes valuable across many jobs, not just in IT or infrastructure roles.

### Skills worth learning
Start with concepts such as virtual machines, storage, networking, deployment pipelines, and basic security. As you grow, you can move into areas such as serverless services, containerization, and monitoring.

Even a basic understanding of cloud concepts can make you more confident when working on real projects or discussing deployment with a team. That confidence becomes especially useful when you are collaborating with developers, operations teams, or product managers.

### Why it helps your career
Cloud skills make you more flexible. They open doors in development, operations, analytics, and product support, which makes them valuable across many career paths. In a modern workplace, that flexibility can be a major advantage. People with cloud awareness often become easier to trust on real-world projects because they understand how systems are actually delivered.
`
  },
  {
    id: 7,
    title: 'UI/UX Design Basics Every Developer Should Know',
    excerpt: 'Good developers understand that clean interfaces and thoughtful design improve both user experience and product value.',
    category: 'Design',
    readTime: '5 min',
    date: 'Jun 20, 2026',
    slug: 'ui-ux-design-basics',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Team discussing UI UX design ideas',
    highlight: 'Design thinking makes your work more useful and memorable',
    content: `Good product development is not only about code. It is also about how users experience the interface and how easily they can complete their goals.

### Why design matters
Developers who understand the basics of UI and UX make better decisions with layouts, navigation, and user flow. This leads to applications that are easier to use and more enjoyable to interact with.

A simple interface often creates a stronger experience than a visually crowded one, especially when users are trying to complete a task quickly.

### Key principles
Keep interfaces simple, make actions obvious, and reduce friction wherever possible. Good design helps users feel confident and helps teams build trust in the product.

Small changes in spacing, labels, and visual hierarchy can improve the experience far more than many people expect. A thoughtful layout can make even a simple product feel premium and easy to use.

### What to learn
Start with layout basics, typography, color, spacing, accessibility, and user feedback. These ideas are useful whether you are building a website, dashboard, or mobile app. Strong design thinking makes your work more useful and more memorable. Even small design improvements can make a product feel far more professional.
`
  },
  {
    id: 8,
    title: 'Why Cybersecurity Awareness Matters for Every Learner',
    excerpt: 'Security is no longer only a specialist topic; it is part of everyday digital responsibility.',
    category: 'Cybersecurity',
    readTime: '5 min',
    date: 'Jun 16, 2026',
    slug: 'cybersecurity-awareness-every-learner',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cybersecurity concept with digital protection',
    highlight: 'Safe habits matter as much as technical knowledge',
    content: `Cybersecurity is no longer something only specialists need to worry about. In a digital world, every student and professional should understand basic online safety habits.

### Why this matters
Small habits such as using strong passwords, updating software, and checking suspicious links can prevent many problems. Many security issues start with simple mistakes rather than advanced attacks.

A strong security habit can protect personal data, career work, and even company systems without requiring advanced technical knowledge.

### What to practice
Focus on password management, two-factor authentication, phishing awareness, safe browsing, and data privacy. These basics are useful for both personal and professional life.

The more familiar you are with these habits, the less likely you are to fall for common digital traps. Good security awareness is often the difference between a smooth workday and a preventable problem.

### Final advice
Security is a mindset. The more careful and consistent you are, the lower the risk of losing important data or becoming a victim of avoidable mistakes. Good digital habits are one of the most practical skills you can build. In the long run, safe habits can protect both your reputation and your work.
`
  },
  {
    id: 9,
    title: 'How Freelancing Can Build Real Tech Experience',
    excerpt: 'Freelancing can help learners grow faster by turning theory into practical client-facing work.',
    category: 'Career Tips',
    readTime: '6 min',
    date: 'Jun 12, 2026',
    slug: 'freelancing-tech-experience',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Freelancer working remotely on computer',
    highlight: 'Client work builds confidence, discipline, and delivery skills',
    content: `Freelancing is one of the best ways to turn learning into real experience. It teaches you how to manage deadlines, communicate clearly, and solve problems beyond classroom exercises.

### Why it helps
When you work for real clients, you learn how to balance quality, speed, and expectations. That experience is extremely valuable for future full-time roles as well.

It also helps you understand how professional work feels outside a classroom or training program.

### What to start with
Begin with small projects such as landing pages, basic automation scripts, simple web apps, or design support tasks. Focus on reliability and communication before taking on larger work.

Even a few well-delivered projects can build your confidence faster than months of passive learning. Real client work teaches you discipline, timing, and the kind of details that classroom practice often misses.

### Final advice
Freelancing is not just about earning money. It is also about building confidence and proving that you can deliver value in a professional environment. Over time, that experience becomes a strong foundation for your career. Real experience often matters more than theory when companies evaluate readiness.
`
  },
  {
    id: 10,
    title: 'The Future of AI in Education and Learning',
    excerpt: 'AI is changing how students study, how teachers teach, and how learning tools are designed.',
    category: 'AI & ML',
    readTime: '5 min',
    date: 'Jun 8, 2026',
    slug: 'future-of-ai-in-education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Students learning with digital technology',
    highlight: 'AI can personalize learning when used thoughtfully',
    content: `AI is beginning to reshape education by making learning more personalized, accessible, and interactive. Students can now use tools that explain concepts, generate practice questions, and support revision in real time.

### Why it matters
The real value of AI in education is not just convenience. It can help learners move at their own pace, revisit weak topics, and get feedback more quickly than before.

This can make learning more efficient, especially for students who need extra support or want to practice outside class hours.

### What to watch for
The best use of AI is not to replace learning, but to support it. Students should still build their own understanding, practice problem solving, and develop critical thinking skills.

AI should help people think better, not stop them from thinking at all. The real goal is to improve learning, not weaken the habit of independent thinking.

### Final advice
Used carefully, AI can become a powerful learning partner. Used carelessly, it can encourage shortcuts instead of understanding. The balance matters, and that balance is what makes the difference. The best learners use AI to support growth, not replace it.
`
  },
]
