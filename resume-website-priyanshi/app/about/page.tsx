// page.tsx
import styles from "./about.module.scss";

export default function About() {
  return (
    <main className={styles.aboutContainer}>
      <section className={styles.sectionStyle}>
        <img src="/Edu.png" alt="Priyanshi Rana" className={styles.imageStyle} />
      </section>

      <section className={styles.sectionStyle}>
        <h1 className={styles.headingStyle}>About Me</h1>
        <p className={styles.paragraphStyle}>
          I&apos;m Priyanshi Rana, a Full Stack Developer passionate about
          building scalable, elegant applications.
        </p>
        <p className={styles.paragraphStyle}>
          🎓 <strong>Education:</strong> B.Tech in CS (Software Product
          Engineering) from Lovely Professional University (Expected 2026) |
          CGPA 9.03
        </p>
        <p className={styles.paragraphStyle}>
          🌐 <strong>Languages:</strong> English (Fluent), Hindi (Native),
          German (A2 - learning)
        </p>
        <p className={styles.paragraphStyle}>
          🎯 <strong>Hobbies:</strong> Music, Badminton (Inter-hostel winner
          🏸), Member of AIESEC
        </p>
      </section>
    </main>
  );
}
