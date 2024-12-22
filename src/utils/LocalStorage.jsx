const projectData = [
    {
      "id": 1,
      "category": "Full stack Development",
      "title": "Portfolio Website",
      "description": "A personal portfolio website to showcase my projects, experience, and skills A weather app that displays real-time weather information based on the user's location real-time weather information based on the user's location real-time weather information based on the user's location.",
      "image": "https://global.discourse-cdn.com/flex035/uploads/threejs/optimized/3X/a/a/aa87ec7839bcddc55ffeed0fe454ac1d9c8f6ba4_2_1035x646.jpeg",
      "tech_stack":  ["MongoDB", "Express.js", "React", "Node.js","MongoDB", "Express.js", "React", "Node.js"],
      "github_link": "https://github.com/username/portfolio",
      "demo_link": "https://username.github.io/portfolio"
    },
    {
      "id": 2,
      "category": "E-Commerce",
      "title": "E-Commerce Website",
      "description": "A full-fledged e-commerce platform with product listings, shopping cart, and payment gateway integration.",
      "image": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eWbNRY_UnGFJC5YqcqBSwA.jpeg",
      "tech_stack": ["MongoDB", "Express.js", "React", "Node.js","MongoDB", "Express.js", "React", "Node.js"],
      "github_link": "https://github.com/username/ecommerce",
      "demo_link": "https://ecommerce-demo.com"
    },
    {
      "id": 3,
      "category": "Mobile App",
      "title": "Task Manager App",
      "description": "A mobile app to manage and track daily tasks with notifications and progress tracking A weather app that displays real-time weather information based on the user's location real-time weather information based on the user's location real-time weather information based on the user's location.",
      "image": "https://blog.zegocloud.com/wp-content/uploads/2023/02/create-app-chat-in-easy-steps.jpg",
      "tech_stack": ["MongoDB", "Express.js", "React", "Node.js","MongoDB", "Express.js", "React", "Node.js"] ,
      "github_link": "https://github.com/username/task-manager",
      "demo_link": "https://taskmanager-demo.com"
    },
    {
      "id": 4,
      "category": "Full stack development",
      "title": "Blog Website",
      "description": "A blog website with CMS capabilities allowing users to write, edit, and publish blog posts.",
      "image": "https://blog.zegocloud.com/wp-content/uploads/2024/03/whatsapp-chat-app-768x542.jpg",
      "tech_stack": ["Gatsby", "GraphQL", "Markdown"],
      "github_link": "https://github.com/username/blog-website",
      "demo_link": "https://myblog.com"
    },
    {
      "id": 5,
      "category": "Game Development",
      "title": "2D Puzzle Game",
      "description": "A simple 2D puzzle game where users solve puzzles to advance to higher levels A weather app that displays real-time weather information based on the user's location real-time weather information based on the user's location real-time weather information based on the user's location.",
      "image": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4LI1KORJT8zXabn04i4-V4vCYDleoYEpRw&s",
      "tech_stack": ["Unity", "C#"],
      "github_link": "https://github.com/username/2d-puzzle-game",
      "demo_link": "https://puzzlegame-demo.com"
    },
    {
      "id": 6,
      "category": "Machine Learning",
      "title": "Image Classifier",
      "description": "A machine learning project that classifies images into various categories using a pre-trained model.",
      "image": "https://blog.zegocloud.com/wp-content/uploads/2024/03/telegram-chat-app-768x401.jpg",
      "tech_stack": ["Python", "TensorFlow", "Keras"],
      "github_link": "https://github.com/username/image-classifier",
      "demo_link": "https://imageclassifier-demo.com"
    },
    {
      "id": 7,
      "category": "Full stack Development",
      "title": "Weather App",
      "description": "A weather app that displays real-time weather information based on the user's location real-time weather information based on the user's location real-time weather information based on the user's location.",
      "image": "https://blog.zegocloud.com/wp-content/uploads/2024/03/signal-chat-app-768x396.jpg",
      "tech_stack": ["JavaScript", "OpenWeather API", "Bootstrap"],
      "github_link": "https://github.com/username/weather-app",
      "demo_link": "https://weatherapp-demo.com"
    },
    {
      "id": 8,
      "category": "Data Visualization",
      "title": "COVID-19 Tracker",
      "description": "A data visualization project to track global COVID-19 cases using charts and maps.",
      "image": "https://blog.zegocloud.com/wp-content/uploads/2024/03/viber-chat-app.jpg",
      "tech_stack": ["D3.js", "React", "API Integration"],
      "github_link": "https://github.com/username/covid-tracker",
      "demo_link": "https://covidtracker-demo.com"
    },
    {
      "id": 9,
      "category": "Mobile App",
      "title": "Expense Tracker App",
      "description": "A mobile app to track daily expenses and manage budget with a simple UI.",
      "image": "https://blog.zegocloud.com/wp-content/uploads/2023/01/new-project-1024x459.png",
      "tech_stack": ["Flutter", "Firebase"],
      "github_link": "https://github.com/username/expense-tracker",
      "demo_link": "https://expensetracker-demo.com"
    },
    {
      "id": 10,
      "category": "Artificial Intelligence",
      "title": "Chatbot Application",
      "description": "An AI-powered chatbot that answers questions using natural language processing.",
      "image": "https://itechindia.co/wp-content/uploads/2023/12/Artificial-Intellingence-in-Mobile-Apps-Technology-Trends-2024.jpg",
      "tech_stack": ["Python", "NLTK", "Flask"],
      "github_link": "https://github.com/username/chatbot",
      "demo_link": "https://chatbot-demo.com"
    }
  ]
  
const freelanceData= [
    {
      "id": 11,
      "category": "Web Development",
      "title": "Real Estate Website",
      "description": "A real estate platform to list and search properties for rent and sale with interactive maps and filters.",
      "image": "https://example.com/real-estate-image.jpg",
      "tech_stack": ["React", "Node.js", "MongoDB", "Mapbox"],
      "github_link": "https://github.com/username/real-estate",
      "demo_link": "https://realestate-demo.com"
    },
    {
      "id": 12,
      "category": "Mobile App",
      "title": "Fitness Tracker App",
      "description": "A mobile app to track fitness goals, workouts, and progress over time with analytics and graphs.",
      "image": "https://example.com/fitness-app-image.jpg",
      "tech_stack": ["React Native", "Redux", "Firebase"],
      "github_link": "https://github.com/username/fitness-tracker",
      "demo_link": "https://fitnesstracker-demo.com"
    },
    {
      "id": 13,
      "category": "Blockchain",
      "title": "NFT Marketplace",
      "description": "A decentralized platform for minting, buying, and selling NFTs with Ethereum integration.",
      "image": "https://example.com/nft-marketplace-image.jpg",
      "tech_stack": ["Solidity", "Ethereum", "React", "IPFS"],
      "github_link": "https://github.com/username/nft-marketplace",
      "demo_link": "https://nftmarketplace-demo.com"
    },
    {
      "id": 14,
      "category": "Web Development",
      "title": "Job Portal",
      "description": "A job portal for job seekers and employers to post and apply for jobs with a resume upload feature.",
      "image": "https://example.com/job-portal-image.jpg",
      "tech_stack": ["Next.js", "Tailwind CSS", "Express", "MongoDB"],
      "github_link": "https://github.com/username/job-portal",
      "demo_link": "https://jobportal-demo.com"
    },
    {
      "id": 15,
      "category": "Web Development",
      "title": "Restaurant Website",
      "description": "An online food ordering and reservation system for a restaurant with menu management and payment integration.",
      "image": "https://example.com/restaurant-image.jpg",
      "tech_stack": ["Vue.js", "Laravel", "Stripe"],
      "github_link": "https://github.com/username/restaurant-website",
      "demo_link": "https://restaurant-demo.com"
    },
    {
      "id": 16,
      "category": "Mobile App",
      "title": "Recipe App",
      "description": "A recipe app where users can browse, share, and save their favorite recipes with step-by-step instructions.",
      "image": "https://example.com/recipe-app-image.jpg",
      "tech_stack": ["Ionic", "Angular", "Firebase"],
      "github_link": "https://github.com/username/recipe-app",
      "demo_link": "https://recipeapp-demo.com"
    },
    {
      "id": 17,
      "category": "Artificial Intelligence",
      "title": "Sentiment Analysis Tool",
      "description": "An AI tool that analyzes text data to determine the sentiment (positive, negative, or neutral) using NLP techniques.",
      "image": "https://example.com/sentiment-analysis-image.jpg",
      "tech_stack": ["Python", "NLTK", "Flask"],
      "github_link": "https://github.com/username/sentiment-analysis",
      "demo_link": "https://sentimentanalysis-demo.com"
    },
    {
      "id": 18,
      "category": "Data Science",
      "title": "Stock Market Prediction",
      "description": "A machine learning project that predicts stock market trends based on historical data.",
      "image": "https://example.com/stock-market-prediction-image.jpg",
      "tech_stack": ["Python", "Pandas", "Scikit-learn"],
      "github_link": "https://github.com/username/stock-market-prediction",
      "demo_link": "https://stockprediction-demo.com"
    },
    {
      "id": 19,
      "category": "Game Development",
      "title": "3D Shooter Game",
      "description": "A first-person 3D shooter game with multiplayer capabilities built using a game engine.",
      "image": "https://example.com/3d-shooter-game-image.jpg",
      "tech_stack": ["Unity", "C#", "Photon"],
      "github_link": "https://github.com/username/3d-shooter-game",
      "demo_link": "https://shootergame-demo.com"
    },
    {
      "id": 20,
      "category": "IoT",
      "title": "Smart Home Automation System",
      "description": "An IoT-based project to automate home devices like lights, fans, and security systems using sensors and a mobile app.",
      "image": "https://example.com/smart-home-image.jpg",
      "tech_stack": ["Arduino", "Node.js", "MQTT"],
      "github_link": "https://github.com/username/smart-home-automation",
      "demo_link": "https://smarthome-demo.com"
    }
  ]
  
const blogsData=[
    {
      "id": 1,
      "category": "Web Development",
      "title": "The Future of Frontend Frameworks",
      "description": "An in-depth look at the future of frontend development and the rise of frameworks like React, Vue, and Svelte.",
      "image": "https://example.com/future-frontend.jpg",
      "tags": ["JavaScript", "React", "Vue", "Svelte", "Frontend"]
    },
    {
      "id": 2,
      "category": "Data Science",
      "title": "Understanding Neural Networks: A Beginner’s Guide",
      "description": "This blog covers the fundamentals of neural networks and how they are applied in various AI-driven solutions.",
      "image": "https://example.com/neural-networks.jpg",
      "tags": ["AI", "Machine Learning", "Neural Networks", "Data Science"]
    },
    {
      "id": 3,
      "category": "Mobile App Development",
      "title": "Building Cross-Platform Mobile Apps with Flutter",
      "description": "A comprehensive guide to building mobile applications using Flutter, including its pros and cons.",
      "image": "https://example.com/flutter-apps.jpg",
      "tags": ["Flutter", "Mobile Apps", "Cross-Platform", "Dart"]
    },
    {
      "id": 4,
      "category": "Cloud Computing",
      "title": "Serverless Architecture: The Future of Scalable Applications",
      "description": "Learn how serverless architecture helps in creating scalable applications with less operational overhead.",
      "image": "https://example.com/serverless-architecture.jpg",
      "tags": ["Cloud", "Serverless", "AWS", "Azure", "Scalability"]
    },
    {
      "id": 5,
      "category": "DevOps",
      "title": "CI/CD Pipelines: Automating Your Development Process",
      "description": "An overview of Continuous Integration and Continuous Delivery (CI/CD) pipelines and their importance in modern development workflows.",
      "image": "https://example.com/cicd-pipelines.jpg",
      "tags": ["DevOps", "CI/CD", "Automation", "GitHub Actions", "Jenkins"]
    }
  ]
  

// projectdata
  export const setProjectData = () => {
    localStorage.setItem('projectData', JSON.stringify(projectData));
  };
  setProjectData();
  export const getProjectData = () => {
    const data = JSON.parse(localStorage.getItem('projectData'));
    return data || []; // Return an empty array if no data is found
  };
  
// freelance
  export const setFreelanceData = ()=>{
    localStorage.setItem('freelanceData', JSON.stringify(freelanceData))
   }
   setFreelanceData();
   export const getFreelanceData = () => {
    const data = JSON.parse(localStorage.getItem('freelanceData'));
    return data || []; // Return an empty array if no data is found
  };

//blogs
 export const setBlogsData = ()=>{
  localStorage.setItem('blogsData', JSON.stringify(blogsData))
 }
setBlogsData();
export const getBlogsData = () => {
  const data = JSON.parse(localStorage.getItem('blogsData'));
  return data || []; // Return an empty array if no data is found
};
