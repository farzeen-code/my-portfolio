const skills = {
    Languages: ["C++", "Javascript", "HTML", "CSS"],
    Frameworks: ["React", "Node.js", "Express.js"],
    Tools: ["Git", "Github", "Dev C++", "VS Code"],
    Concepts: ["OOP", "DSA", "RESTful APIs"], 
};

function Skills() {
    return(
        <section id="skills" style={styles.section}>
            <h2 style={styles.heading}>Skills</h2>
            <p style={styles.subheading}>Technologies I work with:</p>
            <div style={styles.grid}>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} style={styles.card}>
                        <h3 style={styles.category}>{category}</h3>
                        <div style={styles.tagList}>
                            {items.map((item, index) => (
                                <span key={index} style={styles.tag}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))

                }
            </div>

        </section>
    )
};

const styles = {
    section: {
        padding: "110px 40px",
        backgroundColor: "#0a192f",

    },
    heading: {
        color: "#64ffda",
        fontSize: "32px",
        marginBottom: "10px",
    },
    subheading: {
        color: "#64ffda",
        fontSize: "16px",
        fontFamily: "monospace",
        marginBottom: "48px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",

    },

    card: {
        backgroundColor: "#112240",
        padding: "28px",
        borderRadius: "8px",
        borderTop: "2px solid #64ffda",
    },

    category: {
        color: "#8a1884",
        fontSize: "16px",
        fontFamily: "monospace",
        marginBottom: "16px",
    },

    tagList: {
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
    },

    tag: {
        color: "#224cc8",
        fontSize: "13px",
        backgroundColor: "#0a192f",
        padding: "4px 12px",
        borderRadius: "4px",
    },
};


export default Skills;