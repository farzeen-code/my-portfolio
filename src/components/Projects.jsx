function ProjectCard({ title, description, tech, github, liveDemo }){
    return(
        <div style={styles.card}>
            <h3 style={styles.cardTitle}>{title}</h3>
            <p style={styles.cardDescription}>{description}</p>
            <div style={styles.techList}>
                {tech.map((item, index) => (
                    <span key={index} style={styles.techTag}>{item}</span>
                ))}
            </div>

            <div style={styles.links}>
                <a href={github} target="_blank" style={styles.githubLink}>
                    View on GitHub
                </a>
                {liveDemo && (
                    <a href={liveDemo} target="_blank" style={styles.demoLink}>
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    )
}

const projects = [
    {
        id: 1,
        title: "Disease-Prediction-Model",
        description: "An end-to-end classification model built to predict the presence of cardiovascular disease using clinical diagnostic metrics from the UCI Heart Disease dataset.",
        tech: ["Python", "Jupyter Notebook", "Machine Learning", "Scikit-learn", "FastAPI", "Classification", "Healthcare"],
        github: "https://github.com/farzeen-code/Disease-Prediction-Model",
        liveDemo: "https://disease-prediction-model-pi.vercel.app/",
    },

    {
        id: 2,
        title: "Full Stack E-commerce Platform",
        description: "A full-stack e-commerce application built during my internship at DevelopersHub. Features product listings, shopping cart, user authentication and order management.",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "TailwindCSS"],
        github: "https://github.com/farzeen-code/ecommerce-fullstack-design",
        liveDemo: "https://ecommerce-fullstack-design-olive.vercel.app/",
    },

    {
        id: 3,
        title: "Circuit-Simulator",
        description: "High-performance C++ digital logic circuit simulator featuring Kahn's Topological Sorting algorithm for dependency evaluation and a custom chunked memory pool allocator for zero-overhead node allocation.",
        tech: ["C++", "Digital Logic", "Kahn's Algorithm", "Memory Pool"],
        github: "https://github.com/farzeen-code/Circuit-Simulator",
    },

    {
        id: 4,
        title: "Credit-Scoring-Model",
        description: "End-to-end Machine Learning credit scoring pipeline with EDA, preprocessing, model training, and permutation feature importance.",
        tech: ["Python", "Jupyter Notebook", "Machine Learning", "Pandas", "Scikit-learn"],
        github: "https://github.com/farzeen-code/Credit-Scoring-Model",
    },

    {
        id: 5,
        title: "Library Management System",
        description: "A console-based C++ application using OOP principles. Features a multi-tiered user hierarchy with Students, Teachers and Staff, each with distinct borrowing limits.",
        tech: ["C++", "OOP", "Inheritance", "Polymorphism", "STL"],
        github: "https://github.com/farzeen-code/Library-Management-System",
    },
];

function Projects() {
    return(
        <section id="projects" style={styles.section}>
            <h2 style={styles.heading}> Projects</h2>
            <p style={styles.subheading}> Things I have built: </p>
            <div style={styles.grid}>
                { projects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        github={project.github}
                        liveDemo={project.liveDemo}
                    />
                ))}
            </div>
        </section>
    )
};

const styles = {
    section: {
        padding: "100px 60px",
        backgroundColor: "#000000",
    },
    heading: {
        color: "#ccd6f6",
        fontSize: "32px",
        marginBottom: "19px",

    },
    subheading: {
        color: "#64ffda",
        fontSize: "14px",
        fontFamily: "monospace",
        marginBottom: "48px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
        gap: "16px",
    },

    card: {
        backgroundColor: "#112240",
        borderRadius: "10px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },
    cardTitle: {
        color: "#ccd6f6",
        fontSize: "20px",
        margin: 0,
    },
    cardDescription: {
        color: "#8892b0",
        fontSize: "15px",
        lineHeight: 1.7,
        margin: 0,
    },
    techList: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "auto",
        gap: "8px",
        
    },
    techTag: {
        color: "#64ffda",
        fontSize: "12px",
        fontFamily: "monospace",
        border: "1px solid #64ffda",
        padding: "4px 10px",
        borderRadius: "4px",
    },
    links: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
    },
    githubLink: {
        color: "#ccd6f6",
        fontSize: "14px",
        textDecoration: "none",
        fontFamily: "monospace",
        border: "4px solid #9f1b1b",
        padding: "4px 10px",
        width: "fit-content",
    },
    demoLink: {
        color: "#000000",
        fontSize: "14px",
        textDecoration: "none",
        fontFamily: "monospace",
        border: "4px solid #64ffda",
        backgroundColor: "#64ffda",
        padding: "4px 10px",
        width: "fit-content",
        fontWeight: "bold",
    },

    

};




export default Projects;

