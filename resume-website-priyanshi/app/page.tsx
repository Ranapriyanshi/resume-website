import Link from "next/link";
import styles from "./page.module.scss";
import About from "./about/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <section className={styles.heroContent}>
          <h1 className={styles.heading}>
            Hello,
            <br /> I&apos;m Priyanshi 👋
          </h1>
          <p className={styles.subText}>
            Jr. Full Stack Engineer | Building High-Performance, User-Friendly
            Web Apps
          </p>

          <p className={styles.subText2}>
            I&apos;m a Junior Full Stack Engineer passionate about crafting web
            applications that excel in both speed and design. I utilize the
            latest technologies and prioritize a user-centric approach to build
            scalable, responsive, and secure frontend architectures for
            businesses.
            <br />
            <br />
            Looking to elevate your web app&apos;s performance and user experience? I
            can help you achieve that.
          </p>
          <ul className={styles.subText2}>
            <li>Full Stack Development</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Mobile App Development</li>
            <li>...and more</li>
          </ul>
          <section className={styles.buttonContainer}>
            <Link href="/contact" className={styles.linkItem}>
              <p className={styles.roundButtonStyleDark}>
                <img className={styles.buttonLogo} src="/calendar-day.png" />
                Schedule a meeting
              </p>
            </Link>
            <Link href="/contact" className={styles.linkItem}>
              <p className={styles.buttonStyle}>
                <img className={styles.buttonLogo} src="/download.png" /> Resume
              </p>
            </Link>
          </section>
        </section>
        <section className={styles.HeroImage}>
          <img className={styles.image} src="/hello.png" alt="Priyanshi Rana" />
        </section>
      </section>
      <About/>
    </main>
  );
}
