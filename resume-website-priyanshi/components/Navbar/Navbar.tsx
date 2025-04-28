import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div>
          <ul className={styles.navLinks}>
            <Link href="/">
              <img src="/logo.png" alt="Logo" className={styles.logo} />
            </Link>
            <li>
              <Link href="/about" className={styles.navLinkItem}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={styles.navLinkItem}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/experience" className={styles.navLinkItem}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLinkItem}>
                <p className={styles.buttonStyle}>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">
              <img src="/github.png" alt="Logo" className={styles.demologo} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="/linkedin.png" alt="Logo" className={styles.demologo} />
            </Link>
          </li>
          <li>
            <Link href="/experience" className={styles.navLinkItem}>
              GER | EN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
