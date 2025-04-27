import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Priyanshi Rana</Link>
        </div>
        <ul className={styles.navLinks}>
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
                <p className={styles.buttonStyle}>
                  Contact Us
                </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
