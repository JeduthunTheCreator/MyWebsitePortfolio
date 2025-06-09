import { FaReact, FaCloud, FaToolbox, FaJava, FaDatabase, FaJsSquare, FaTerminal, FaBrain, FaProjectDiagram, FaCubes, FaNetworkWired, FaMicrosoft } from "react-icons/fa";
import { SiPython, SiMongodb, SiDocker, SiKubernetes, SiLinux, SiTensorflow, SiCplusplus, SiHtml5, SiPytorch, SiRos, SiKaggle, SiJupyter, SiBootstrap, SiApachehadoop, SiApachespark } from "react-icons/si";
import { BiCodeAlt, BiGitRepoForked, BiBrain } from "react-icons/bi";
import { GiArtificialIntelligence, GiRobotGolem, GiNetworkBars } from 'react-icons/gi';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';




const skillsData = [
    {
        category: "Programming Languages",
        icon: <BiCodeAlt color="#3498DB" />,
        skills: [
            { name: "Python", icon: <SiPython color="#68A063" /> },
            { name: "Java", icon: <FaJava color="#EA2D2E" /> },
            { name: "C++", icon: <SiCplusplus color="#659AD2" /> },
            { name: "SQL", icon: <FaDatabase color="#b2beb5" /> },
            { name: "HTML/CSS", icon: <SiHtml5 color="#E34F26" /> },
            { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
            { name: "Shell Scripting", icon: <FaTerminal /> },
            { name: "MATLAB" },
        ],
    },
    {
        category: "Machine Learning",
        icon: <BiBrain color="#9B59B6" />,
        skills: [
            { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
            { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
            { name: "Deep Learning", icon: <FaBrain color="#9E9E9E" /> },
            { name: "Cognitive Computing", icon: <GiArtificialIntelligence color="#4B8BBE" /> },
        ],
    },
    {
        category: "Big Data",
        icon: <GiNetworkBars color="#2ECC71" />,
        skills: [
            { name: "Hadoop", icon: <SiApachehadoop color="#FABC0D" /> },
            { name: "MapReduce", icon: <FaProjectDiagram color="#FF7F00" /> },
            { name: "Apache Spark", icon: <SiApachespark color="#E25A1C" /> },
        ],
    },
    {
        category: "Cloud & DevOps",
        icon: <FaCloud color="white" />,
        skills: [
            { name: "Docker", icon: <SiDocker color="#2496ED" /> },
            { name: "CI/CD", icon: <BiGitRepoForked color="#6e7681" /> },
            { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
            { name: "Microsoft Azure" },
        ],
    },
    {
        category: "Robotics",
        icon: <MdOutlinePrecisionManufacturing color="#4BB1CF" />,
        skills: [
            { name: "Robot Operating System (ROS)", icon: <SiRos color="#22314E" /> },
            { name: "Rviz", icon: <FaCubes color="#3EAED9" /> },
            { name: "Gazebo", icon: <GiRobotGolem color="#35C0C0" /> },
        ]
    },
    {
        category: "Frameworks & Tools",
        icon: <FaToolbox color="#FFB300" />,
        skills: [
            { name: "React", icon: <FaReact color="#61DAFB" /> },
            { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
            { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
            { name: "Linux", icon: <SiLinux color="#FCC624" /> },
            { name: "Jupyter Notebook", icon: <SiJupyter color="#F37626" /> },
            { name: "Kaggle", icon: <SiKaggle color="#20BEFF" /> },
            { name: "Microsoft Office Suite", icon: <FaMicrosoft color="#0078D4" /> },
            { name: "Rational Software Architect", icon: <FaProjectDiagram color="#FF7F00" /> },
            { name: "REST APIs", icon: <FaNetworkWired color="#009688" /> },
        ],
    },
];

export default skillsData;