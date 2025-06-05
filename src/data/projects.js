
export const projects = [
    {
        title: "Cloud Based Game Recommender System",
        description: "Cloud - powered game recommendation system that predicts your gaming preferences by learning from similar players—delivering personalized suggestions tailored to your unique taste.",
        src: "rock.jpg",
        link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
        color: "#5196fd",
        githubLink: "https://github.com/olovajs/olova",
        liveLink: "https://olova.js.org/",
    },
    {
        title: "Travel Buddy Finder",
        description: "Find travel buddies, plan trips, and explore with real-time weather updates—powered by RESTful services.",
        src: "tree.jpg",
        link: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
        color: "#5196fd",
        githubLink: "https://github.com/seraprogrammer/portfolio",
        liveLink: "https://codervai.vercel.app",
    },
    {
        title: "Video Game Chatbot",
        description: "A video game chatbot capable of conversational capabilitites, logical reasoning and image classification.",
        src: "water.jpg",
        link: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
        color: "#fff",
        githubLink: "https://github.com/seraprogrammer/codewhisperer",
        liveLink: "https://codewhisperer.vercel.app/",
    },
    {
        title: "Cloud Based File Storage",
        description: "A modern cloud file server that lets users easily store, manage, and control their files with both basic and advanced functionalities.",
        src: "house.jpg",
        link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
        color: "#ed649e",
        githubLink: "https://github.com/seraprogrammer/CodeKori",
        liveLink: "https://codekori.js.org",
    },
    {
        title: "E-Transport Marketplace",
        description: "Virtual platform for road transport that connects users all around the world to facilitate easier transactions.",
        src: "house.jpg",
        link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
        color: "#ed649e",
        githubLink: "https://github.com/seraprogrammer/CodeKori",
        liveLink: "https://codekori.js.org",
    },
    {
        title: "Student Report Management System",
        description: "Grading system that collects and stores student's details and provides the overall grade result.",
        src: "house.jpg",
        link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
        color: "#ed649e",
        githubLink: "https://github.com/seraprogrammer/CodeKori",
        liveLink: "https://codekori.js.org",
    },
    {
        title: "Maze Master: AI-Powered JetBot Navigation System",
        description: "An AI-driven robotics project that fuses real-time obstacle avoidance, object and traffic sign recognition, and SLAM to autonomously guide a JetBot through a dynamic maze. It showcases intelligent navigation at the intersection of computer vision, robotics, and machine learning.",
        src: "house.jpg",
        link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
        color: "#ed649e",
        githubLink: "https://github.com/seraprogrammer/CodeKori",
        liveLink: "https://codekori.js.org",
    },
];

export const getProjectByTitle = (title) =>
    projects.find(project => project.title === title);

export const getProjectColor = (project) =>
    project.color || "#5196fd";

export default projects;