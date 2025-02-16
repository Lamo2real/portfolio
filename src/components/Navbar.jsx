import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import styles from "./Navbar.module.css";
import kakashi from "../assets/kakashi.png";

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={kakashi} alt="kakashi logo" width="90" />
        <span>Ali Kouravand (Lámo)</span>
      </div>

      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={styles.hamburgerLine} />
        <div className={styles.hamburgerLine} />
        <div className={styles.hamburgerLine} />
      </button>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/projects" className={styles.link}>Projects</Link></li>
        <li><Link to="/education" className={styles.link}>Education</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
