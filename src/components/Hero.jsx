function Hero() {
    return(
        <section style={styles.section}>
            <p style={styles.intro}>Hi, my name is</p>
            <h1 style={styles.name}>Farzeen Shahzad</h1>
            <h2 style={styles.tagline}>I build things for the web and beyond.</h2>
            <p style={styles.description}>
                I'm a Computer Science student at SZABIST with hands-on experience 
                in MERN stack development and C++ OOP systems. I enjoy building 
                clean, efficient software that solves real problems.
            </p>

            <div style={styles.buttons}>
                <a href="#projects" style={styles.primarybtn}>Projects</a>
                <a href="#contact" style={styles.secondarybtn}>Contact</a>

            </div>
            
        </section>
    );
}


const styles = {
    section: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "1px",
        minHeight: "100vh",
        justifyContent: "center",
        padding: "0px 40px",
        backgroundColor: "#000000",
        
    },

    intro: {
        color: "#09eeb5",
        fontSize: "16px",
        marginBottom: "16px",
        fontFamily: "monospace",

    },

    name: {
        color: "#ccd6f6",
        fontSize: "64px",
        margin: 0,
        lineHeight: 1.1,

    },

    tagline: {
        color: "#8892b0",
        fontSize: "48px",
        margin: "8px 0 24px 0",
        lineHeight: 1.1,

    },

    description: {
        color: "#8892b0",
        fontSize: "16px",
        maxWidth: "540px",
        lineHeight: 1.8,
        marginBottom: "40px",

    },

    buttons: {
        display: "flex",
        gap: "16px",
    },

    primarybtn: {
        padding: "14px 28px",
        border: "1px solid #64ffda",
        color: "#64ffda",
        textDecoration: "none",
        fontSize: "14px",
        fontFamily: "monospace",
        backgroundColor: "transparent",
        cursor: "pointer",
    },

    secondarybtn: {
        padding: "14px 28px",
        border: "1px solid #8892b0",
        color: "#8892b0",
        textDecoration: "none",
        fontSize: "14px",
        fontFamily: "monospace",
        backgroundColor: "transparent",
        cursor: "pointer",
    },

};

export default Hero;