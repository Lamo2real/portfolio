import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import styles from './Navbar.module.css';
import kakashi from '../assets/kakashi.png'


const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar} style={{ backgroundColor: 'var(--nav-bg)' }}>
      <div className={styles.logo}><img id="kakashi" src={kakashi} alt="kakashi logo" width="90"/>Ali Kouravand (Lámo)</div>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/projects" className={styles.link}>Projects</Link></li>
        <li><Link to="/education" className={styles.link}>Education</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact</Link></li>
        <li>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;