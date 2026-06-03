function Navbar() {
    return(
        <nav style={styles.nav}>
            <h2 style={styles.logo}>Farzeen.</h2>
            <ul style={styles.links}>
                <li><a href="#about" style={styles.link}>About</a></li>
                <li><a href="#projects" style={styles.link}>Projects</a></li>
                <li><a href="#skills" style={styles.link}>Skills</a></li>
                <li><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
        </nav>
    );
}

const styles = {

    nav: {
        display: "flex",
        justifyContent: "space-between",
        
        alignItems: "center",
        padding: "16px 40px",
        backgroundColor: "#0f0f0f",
        position: "sticky",
        top: 0,
    },

    logo: {
        color: "#64ffda",
        margin: 0,
        fontSize: "24px",
    },

    links: {
        display: "flex",
        gap: "32px",
        listStyle: "none",
        margin: 0,
        padding: 0,
    },

    link: {
        color: "#ccd6f6",
        textDecoration: "none",
        fontSize: "15px",
    }

}

export default Navbar;