import { Github, Linkedin, FileText, Code, Mail } from 'lucide-react';

export const PROFILE = {
  name: "Sanjay Kumar Purohit",
  role: "Full Stack Developer & AI Engineer",
  bio: "A Full Stack Engineer specializing in the MERN stack and AI/ML. I build context-aware systems, from secure financial dashboards to RAG-powered legal assistants.",
  location: "Chennai, Tamil Nadu, India",
  email: "sanjayrajgurupurohit@gmail.com",
  phone: "+91 6382608836",
  availability: "Open to opportunities",
  
  // Quick access skills for the Profile Card
  skills: [
    "React", "Node.js", "MongoDB", "Express", 
    "Python", "FastAPI", "TensorFlow", "Tailwind", 
    "Next.js", "Docker", "Prisma", "RAG"
  ],

  social: [
    { name: "GitHub", url: "https://github.com/Sanjay9176", icon: Github }, 
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sanjaypurohit9/", icon: Linkedin }, 
    { name: "Resume", url: "/Sanjay-Resume.pdf", icon: FileText }, 
    { name: "LeetCode", url: "https://leetcode.com/u/sanjay9176/", icon: Code } 
  ]
};

// 🟢 RESTORED: This was causing the error
export const SKILLS = [
  { 
    category: "Frontend Engineering", 
    items: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Shadcn/UI", "Bootstrap 5"] 
  },
  { 
    category: "Backend Architecture", 
    items: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT Security", "Microservices"] 
  },
  { 
    category: "Database Systems", 
    items: ["MongoDB", "PostgreSQL", "ChromaDB (Vector)", "SQL Optimization"] 
  },
  { 
    category: "AI & Machine Learning", 
    items: ["RAG Systems", "Google Gemini API", "TensorFlow", "Keras", "OpenCV", "NLP / Spacy", "Python"] 
  }
];

export const PROJECTS = [
  {
    id: "gen-vidhik",
    title: "Gen-Vidhik Sahayak",
    tagline: "AI-Powered Legal Assistant",
    type: "Flagship AI",
    description: `Architected a Multimodal Legal AI Agent: Designed and built a "Reasoning Engine" that doesn't just chat but actively guides users through Indian legal procedures (Bail, Affidavits) using a gamified "Quest Log" interface.\n
• Engineered a High-Performance Backend: Migrated from Node.js to FastAPI (Python) to leverage asynchronous (async/await) processing, enabling the server to handle concurrent AI reasoning and OCR tasks with near-zero latency.\n
• Implemented "Trinity of Truth" Verification: Integrated Google Cloud Vision API to extract text from raw evidence (scanned FIRs, handwritten notes) and cross-reference it against user statements using Google Gemini Pro, detecting contradictions in real-time.\n
• Solved "AI Amnesia" with Lazy Persistence: Built a robust state-management system that syncs chat history, draft progress, and current case steps to MongoDB in the background, allowing users to pause and resume complex legal tasks without data loss.\n
• Developed an Automated Drafting Engine: Created a template-injection service that maps extracted case facts into court-compliant legal documents (Vakalatnama, Bail Applications), featuring a custom React-based document editor for final polish.\n
• Secured Enterprise-Grade Authentication: Implemented a custom JWT-based auth system with Role-Based Access Control (RBAC) and a secure "Forgot Password" flow using SMTP and environment-variable protection for sensitive credentials.`,
    tech: ["Python (FastAPI)", "React+Vite", "MongoDB", "Google Gemini Pro", "RAG"],
    links: { 
      demo: "#", 
      code: "https://github.com/Sanjay9176/GENAI-Legal-Assistant-",
      post: "#" 
    },
    featured: true, 
    gallery: [
      "/images/Legal-Gen-AI/genai-img1.png",
      "/images/Legal-Gen-AI/genai-img2.png",
      "/images/Legal-Gen-AI/genai-img3.png",
      "/images/Legal-Gen-AI/genai-img4.png"
    ]
  },
  {
    id: "stock-analysis",
    title: "Stock Analysis Dashboard",
    tagline: "Real-Time Market Analytics",
    type: "Full Stack",
    description: `Built a full-stack Stock Analysis Web Application using the MERN stack to visualize real-time and historical stock market data in an interactive dashboard.\n
• Implemented JWT-based authentication with bcrypt password hashing, ensuring secure user access and protected routes.\n
• Integrated real-time stock APIs and developed a side-by-side stock comparison feature to analyze multiple stocks within a single view.\n
• Designed a responsive and modern UI using React (Vite) and Tailwind CSS, with enhanced interactivity using Three.js.\n
• Optimized API handling and frontend rendering to improve performance and ensure smooth user experience.`,
    tech: ["React", "Three.js", "Node.js", "MongoDB", "Recharts"],
    links: { 
      demo: "#", 
      code: "https://github.com/Sanjay9176/StockAnalysis-Webpage", 
      post: "https://www.linkedin.com/posts/sanjaypurohit9_excited-to-share-my-latest-project-i-recently-activity-7369030998010785796-zZcq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-weDwByWZ6c7Lnu3QiuPgRcJEZVhRRkeA" 
    },
    featured: true,
    gallery: [
      "/images/StockAnalysis/StockAnalysis-img1.png",
      "/images/StockAnalysis/StockAnalysis-img2.png",
      "/images/StockAnalysis/StockAnalysis-img3.png"
    ]
  },
  {
    id: "singitronic",
    title: "Singitronic",
    tagline: "Electronics eCommerce & Admin Dashboard",
    type: "Full Stack",
    description: `Developed a full-stack, responsive electronics eCommerce platform and comprehensive admin dashboard from scratch using a custom design.\n
• Implemented a robust backend architecture using Node.js and MySQL, utilizing Prisma ORM for database migrations and efficient data modeling.\n
• Followed the Waterfall (Cascade) software engineering model, producing 40 pages of detailed documentation covering system architecture, use case diagrams, and milestones.\n
• Executed a rigorous testing lifecycle including Ad Hoc, Unit, and Integration testing, identifying and resolving over 100 errors to ensure system reliability.\n
• Applied Black Box (Equivalence Partitioning, BVA) and White Box (Statement/Decision Coverage) testing techniques, achieving 72.8% error detection efficiency during the unit testing phase.\n
• Integrated secure authentication and role-based access control to allow administrators to manage orders, products, categories, and user data.`,
    tech: ["Next.js", "Node.js", "MySQL", "Prisma", "Tailwind CSS"],
    links: { 
      demo: "#", 
      code: "https://github.com/Sanjay9176/Electronics-eCommerce-Website", 
      post: "https://www.linkedin.com/posts/sanjaypurohit9_prodigyinfotech-nextjs-nodejs-activity-7354847059406925824-BYEY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-weDwByWZ6c7Lnu3QiuPgRcJEZVhRRkeA" 
    },
    featured: true,
    gallery: [
      "/images/E-Commerce-Web/Ecomweb-img1.jpg",
      "/images/E-Commerce-Web/Ecomweb-img2.jpg",
      "/images/E-Commerce-Web/Ecomweb-img3.jpg",
      "/images/E-Commerce-Web/Ecomweb-img4.jpg"
    ]
  },
  {
    id: "landmark",
    title: "Landmark Detection",
    tagline: "Image Classification AI",
    type: "AI Model",
    description: `One of my recent projects was focused on building an image classification model using deep learning in Python with Jupyter Notebooks. I worked with a custom dataset where the images were organized inside a "photos" folder, divided into class-based hexa file folders.\n
• Started with data preprocessing, loading the data from a train.csv file, filtering based on image IDs, and visualizing class distributions.\n
• Used TensorFlow and Keras, building on top of the VGG19 architecture. Added batch normalization and dense layers, and set up training parameters like learning rate, momentum, and decay.\n
• Created functions for resizing images, generating data batches, and splitting the dataset into training and validation sets.\n
• Training was done using TensorFlow’s GradientTape, and once the model was trained, I saved it and evaluated its performance on the validation data.`,
    tech: ["Python", "Keras", "VGG19", "Computer Vision"],
    links: { 
      demo: "#", 
      code: "https://github.com/Sanjay9176/LandMarkDetectionModel", 
      post: "https://www.linkedin.com/posts/sanjaypurohit9_internship-machinelearning-deeplearning-activity-7206611868801499137-bsIV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-weDwByWZ6c7Lnu3QiuPgRcJEZVhRRkeA" 
    },
    featured: false,
    gallery: [
      "/images/LandmarkDetection/LD-img1.png",
      "/images/LandmarkDetection/LD-img2.png",
      "/images/LandmarkDetection/LD-img3.png"
    ]
  },
  {
    id: "pet-classification",
    title: "Pet Face Classification",
    tagline: "Deep Learning Model",
    type: "AI Model",
    description: `This project focuses on building a machine learning model in Jupyter Notebook to classify pet images into different breeds using deep learning techniques.\n
• Started by setting up the environment—installing and importing libraries like pandas, NumPy, matplotlib, TensorFlow, and others.\n
• The dataset included images of 22 pet breeds, with around 200 images per breed. Wrote custom code to extract image file names and labels from the directory, then encoded the labels into numerical values for training.\n
• Each image was resized and preprocessed using TensorFlow’s image processing tools, and the data was split into training, validation, and testing sets, selecting 17 breeds for model analysis.\n
• Used ResNet50 via transfer learning, combined with data augmentation techniques like flipping and rotation to improve generalization.`,
    tech: ["Python", "TensorFlow", "ResNet50", "Deep Learning"],
    links: { 
      demo: "#", 
      code: "https://github.com/Sanjay9176/PetFace_ClassificationModel", 
      post: "https://www.linkedin.com/posts/sanjaypurohit9_machinelearning-deeplearning-imageclassification-activity-7206608111334305792-v2hX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-weDwByWZ6c7Lnu3QiuPgRcJEZVhRRkeA" 
    },
    featured: false,
    gallery: [
      "/images/PetClassification/Pet-img1.png",
      "/images/PetClassification/Pet-img2.png",
      "/images/PetClassification/Pet-img3.png"
    ]
  },
  {
    id: "cognit",
    title: "Cognit Symposium",
    tagline: "Official College Event Portal",
    type: "Frontend",
    description: `Developed the official website for Cognit, the flagship symposium of the CSE department at our college.\n
• Built using React + Vite for high performance and fast load times, the site features a modern, responsive UI powered by Tailwind CSS and Bootstrap, with engaging animations and smooth navigation.\n
• The platform includes detailed pages for 14+ technical and non-technical events, complete with event descriptions and rules.\n
• Additional features include a participant registration system, integrated Google Maps for easy venue access, and dedicated Contact and About Us pages.\n
• The project follows a modular code structure with reusable components, ensuring scalability and maintainability.`,
    tech: ["React", "Vite", "Tailwind CSS", "Bootstrap"],
    links: { 
      demo: null,
      code: "https://github.com/Sanjay9176/Cognit_Sympo_WebPage", 
      post: "https://www.linkedin.com/posts/sanjaypurohit9_reactjs-webdevelopment-tailwindcss-activity-7314884399269863424-7ihq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-weDwByWZ6c7Lnu3QiuPgRcJEZVhRRkeA" 
    },
    featured: false,
    gallery: [
      "/images/Cognit25/Cognit-img1.png",
      "/images/Cognit25/Cognit-img2.png",
      "/images/Cognit25/Cognit-img3.png"
    ]
  },
  {
    id: "book-quote",
    title: "Book Quote Shorts",
    tagline: "High-Engagement Web App",
    type: "Frontend",
    description: `Developed "Book Quote Shorts," a high-engagement web application inspired by Instagram Reels and TikTok, designed for seamless consumption of literary content.\n
• Engineered a 3D Flip-Card Animation system using React state management and CSS 3D transforms to simulate the tactile experience of flipping through physical book pages.\n
• Implemented Dynamic Contextual Theming, where the UI background and color palette automatically adapt based on the book's genre or author.\n
• Integrated a "Story-style" Progress Bar and auto-play functionality to create a lean-back viewing experience, optimized with precise JavaScript timing functions.\n
• Architected a Responsive, Mobile-First UI with swipe gesture support and keyboard navigation (arrow keys), ensuring a native-app feel across all devices.`,
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    links: { 
      demo: "#", 
      code: "https://github.com/Sanjay9176/book-quote", 
      post: "#" 
    },
    featured: false,
    gallery: [
      "/images/BooksortWeb/Book-img1.png",
      "/images/BooksortWeb/Book-img2.png",
      "/images/BooksortWeb/Book-img3.png"
    ]
  }
];

export const EXPERIENCE = [
  {
    id: "prodigy",
    company: "Prodigy InfoTech",
    role: "Full-Stack Web Development Intern",
    period: "Jul 2025 - Jul 2025",
    location: "Chennai, Tamil Nadu, India",
    type: "Remote",
    description: `During my internship at Prodigy InfoTech, I dove head-first into the world of full-stack development, gaining invaluable hands-on experience with the MERN stack. My role was focused on building complete, real-world applications from concept to completion, which allowed me to sharpen my technical skills and my ability to solve complex problems in a fast-paced environment.\n
• Architected and built four end-to-end web applications, including a secure e-commerce platform for electronics, a dynamic social media website, and a comprehensive Employee Management System.\n
• Focused on creating modern and responsive user interfaces using React and Tailwind CSS to ensure an excellent, intuitive user experience across all devices.\n
• Implemented robust security features, including a secure user authentication and verification system using JSON Web Tokens (JWT).\n
• Integrated third-party REST APIs (such as a real-time stock data feed from RapidAPI) to fetch, parse, and display dynamic data, enhancing the functionality and value of the applications.`,
    tech: ["MERN Stack", "React", "JWT", "Tailwind"],
    // 🟢 Matches public/Experiences/Prodigy.png
    gallery: [
      "/Experiences/Prodigy.png"
    ]
  },
  {
    id: "personifwy",
    company: "Personifwy",
    role: "Intern",
    period: "Apr 2024 - Jun 2024",
    location: "Bengaluru, Karnataka, India",
    type: "Remote",
    description: `During my internship, I completed three significant projects that greatly enhanced my skills in neural networks and machine learning:\n
• Minor Project: Text Classification - Developed a text classification model. Learned about natural language processing techniques and model evaluation metrics.\n
• Major Project: Pet Classification - Created a pet classification model to identify different types of pets from images. Gained practical experience with image processing, convolutional neural networks (CNNs), and transfer learning.\n
• Major Project: Landmark Detection - Built a landmark detection system to identify and classify landmarks in images. Enhanced my understanding of deep learning frameworks, computer vision techniques, and data augmentation.\n
• Overall, this internship provided me with valuable experience, allowing me to apply theoretical knowledge to real-world problems and significantly improve my expertise in AI and machine learning.`,
    tech: ["Python", "TensorFlow", "CNN", "NLP"],
    // 🟢 Matches public/Experiences/Personifwy-img1.png & img2.png
    gallery: [
      "/Experiences/Personifwy-img1.png",
      "/Experiences/Personifwy-img2.png"
    ]
  },
  {
    id: "ebixcash",
    company: "EbixCash",
    role: "Customer Service Executive",
    period: "Jul 2022 - Oct 2022",
    location: "Chennai, Tamil Nadu, India",
    type: "On-site",
    description: `Worked full-time in the TVS Loan Department at EbixCash after completing my 12th. My main responsibilities included:\n
• Handling inbound customer calls related to TVS loan services.\n
• Assisting customers with EMI details, loan status, and issue resolution.\n
• Maintaining a professional tone and providing clear and accurate information.\n
• Managing daily call logs and escalating unresolved issues when necessary.\n
• Completed 1 month of professional training before joining live customer support.\n
• This role significantly improved my communication skills, patience, and confidence in a fast-paced service environment.`,
    tech: ["Communication", "Loan Services", "CRM"],
    // 🟢 Matches public/Experiences/ebixcash-img1.jpg & img2.jpg
    gallery: [
      "/Experiences/ebixcash-img1.jpg",
      "/Experiences/ebixcash-img2.jpg"
    ]
  }
];

export const CERTIFICATES = [
  {
    id: "fullstack-prodigy",
    title: "Full-Stack Web Development Internship",
    issuer: "Prodigy InfoTech",
    date: "Aug 2025",
    // 🟢 Matches public/Certificates/Prodigy.png
    image: "/Certificates/Prodigy-internship.png", 
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    issuer: "NPTEL",
    date: "2024",
    // 🟢 Matches public/Certificates/Ethical-Hacking.png
    image: "/Certificates/Ethical-Hacking.png", 
  },
  {
    id: "personifwy-intern",
    title: "AI-ML Internship Certificate",
    issuer: "Personifwy / 1Stop.ai",
    date: "May 2024",
    // 🟢 Matches public/Certificates/Personifwy-img1.png
    image: "/Certificates/Personifwy-internship-img1.png", 
  },
  {
    id: "personifwy-project",
    title: "Project Completion Certificate",
    issuer: "Personifwy / 1Stop.ai",
    date: "May 2024",
    // 🟢 Matches public/Certificates/Personifwy-img2.png
    image: "/Certificates/Personifwy-project-complettion-img2.png", 
  },
  {
    id: "ai-participation",
    title: "Participation Certificate",
    issuer: "1Stop.ai / Wissenaire IIT",
    date: "Apr 2024",
    // 🟢 Matches public/Certificates/1stop.png
    image: "/Certificates/1stop-ai-participtation-certificate.png", 
  },
  {
    id: "iot-pantech",
    title: "Internet of Things Bootcamp",
    issuer: "Pantech eLearning",
    date: "Nov 2023",
    // 🟢 Matches public/Certificates/IOT.png
    image: "/Certificates/IOT.png", 
  },
  {
    id: "c-pantech",
    title: "C Programming Bootcamp",
    issuer: "Pantech eLearning",
    date: "Nov 2023",
    // 🟢 Matches public/Certificates/C programing.png (Note: 'programing' one m)
    image: "/Certificates/C-programing.png", 
  },
  {
    id: "digital-google",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    date: "May 2023",
    // 🟢 Matches public/Certificates/Digital-Marketing.png
    image: "/Certificates/Digital-Marketing.png", 
  },
];