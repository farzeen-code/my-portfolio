function Contact(){
    return(
        <section id="contact" style={styles.section}>
            <p style={styles.label}>What's next?</p>
            <h2 style={styles.heading}>Get In Touch</h2>
            <p style={styles.description}>
                I am currently looking for internship opportunities. 
                Whether you have a question, a project in mind, or just 
                want to say hello, my inbox is always open.
            </p>
            
            <a href="mailto:shahzadafzreen9@gmail.com" style={styles.button}>
                    Say Hello
            </a>

            <div style={styles.socials}>
                <p style={styles.socialLink}>shahzadfarzeen9@gmail.com</p>
                <a href="https://www.linkedin.com/in/farzeen-shahzad5/" target="blank" style={styles.socialLink}>
                    LinkedIn
                </a>
                <a href="https://github.com/farzeen-code" target="blank" style={styles.socialLink}>
                    Github
                </a>
                

            </div>
        </section>
    );
}

const styles = {
    section: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 40px",
        backgroundcolor: "#0f0f0f",

    },

    heading: {
        color: "#ccd6f6",
        marginBottom: "24px",
        fontSize: "48px",
    },

    label: {
        color: "#63ffda",
        fontSize: "20px",
        fontFamily: "monospace",
        marginBottom: "24px",
    },

    description: {
        color: "#8892b0",
        marginBottom: "48px",
        maxWidth: "540px",
        fontSize: "20px",
        lineHeight: 1.4,
    },

    button: {
        color: "#64ffda",
        fontSize: "14px",
        fontFamily: "monospace",
        border: "1px solid #64ffda",
        padding: "16px 32px",
        marginBottom: "48px",
        textDecoration: "none",
    },

    socials: {
        display: "flex",
        gap: "32px",
    },

    socialLink: {
        color: "#8892b0",
        textDecoration: "none",
        fontFamily: "monospace",
        fontSize: "14px",
    },

};

export default Contact;

