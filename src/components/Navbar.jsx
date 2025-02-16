import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import kakashi from "../assets/kakashi.png";
import styles from "../components/Navbar.module.css"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <div className={styles.logo}>
          <img src={kakashi} alt="Logo" />
          <span>My Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
          {["Home", "Projects", "Education", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}
