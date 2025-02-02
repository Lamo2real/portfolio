import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>My Portfolio</div>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/projects" className={styles.link}>Projects</Link></li>
        <li><Link to="/education" className={styles.link}>Education</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;