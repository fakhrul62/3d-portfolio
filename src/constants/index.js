export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'CodeChronic – Trend-Focused Tech Blog',
      desc: 'CodeChronic is a performance-optimized tech and astrology blog designed to deliver daily trending content. It provides news, insights, and tutorials in a highly responsive, fast, and user-friendly interface.',
      subdesc:
        'Built using React, React Router, Firebase, Tailwind CSS, and Context API, CodeChronic is SEO-optimized with Yoast Premium and designed for scalability, performance, and consistent publishing.',
      href: 'https://codechronic.com',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
        { id: 3, name: 'Firebase', path: '/assets/firebase.svg' },
        { id: 4, name: 'Context API', path: '/assets/api.svg' },
      ],
    },
    {
      title: 'ShopSync – eCommerce & POS Invoice System',
      desc: 'ShopSync is an integrated solution that connects online WordPress stores and offline POS systems. It enables invoice generation and delivery through SMS or email, offering seamless retail and inventory management.',
      subdesc:
        'Built using WordPress, WooCommerce, PHP, and SMS Gateway APIs, ShopSync bridges digital and physical store operations with automated invoicing and streamlined sales tracking.',
      href: 'https://your-ecommerce-demo.com',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        { id: 1, name: 'WordPress', path: '/assets/wordpress.svg' },
        { id: 2, name: 'WooCommerce', path: '/assets/woocommerce.svg' },
        { id: 3, name: 'PHP', path: '/assets/php.svg' },
        { id: 4, name: 'API Integration', path: '/assets/api.svg' },
      ],
    },
    {
      title: 'Vision3D – Interactive 3D Model Viewer',
      desc: 'Vision3D is a web-based application for rendering interactive 3D models in real time. Users can explore animated scenes with seamless camera control and environment effects.',
      subdesc:
        'Created using React, Three.js, Tailwind CSS, and Vite, this project highlights advanced front-end rendering techniques and optimization for 3D visualization in the browser.',
      href: 'https://github.com/fakhrul62/vision3d',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        { id: 1, name: 'Three.js', path: '/assets/three.png' },
        { id: 2, name: 'React.js', path: '/assets/react.svg' },
        { id: 3, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
        { id: 4, name: 'Vite', path: '/assets/vite.svg' },
      ],
    },
    {
      title: 'DeepSight – Deepfake Detection System',
      desc: 'DeepSight is an AI-driven research tool for detecting deepfakes using visual and audio analysis. Built for academic simulation, it focuses on raising awareness of deepfake-related cyber threats.',
      subdesc:
        'Developed using Python, TensorFlow, OpenCV, and the AV-Deepfake1M dataset, DeepSight simulates real-time threat detection with a custom-built classification and reporting interface.',
      href: 'https://github.com/fakhrul62/deepsight',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        { id: 1, name: 'Python', path: '/assets/python.svg' },
        { id: 2, name: 'TensorFlow', path: '/assets/tensorflow.svg' },
        { id: 3, name: 'OpenCV', path: '/assets/opencv.svg' },
        { id: 4, name: 'AV-Deepfake1M', path: '/assets/ai.svg' },
      ],
    },
    {
      title: 'EduVerse – University Course Portal',
      desc: 'EduVerse is a student-first academic portal for accessing materials, submitting assignments, and managing course schedules with real-time updates.',
      subdesc:
        'Built using React, Firebase Auth, Firestore, and Tailwind CSS, EduVerse offers a clean dashboard with role-based access control and dynamic data syncing.',
      href: 'https://eduverse-demo.web.app',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'Firebase', path: '/assets/firebase.svg' },
        { id: 3, name: 'Firestore', path: '/assets/firestore.svg' },
        { id: 4, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      ],
    }
  ]
  ;
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.07,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 2, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-35, 10, 0] : isTablet ? [-42, 10, 0] : [-44, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];