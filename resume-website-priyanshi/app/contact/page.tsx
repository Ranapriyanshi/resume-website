"use client";

import "./contact.css";

export default function Contact() {
  return (
    <main className="contact-container">
      <h1>Get in Touch</h1>
      <p>Always open for exciting collaborations!</p>

      <div className="contact-links">
        <a href="mailto:priyanshirana78@gmail.com" className="contact-link">
          📧 Email: priyanshirana78@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/your-github"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>
        <a
          href="https://leetcode.com/your-leetcode"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧠 LeetCode
        </a>
      </div>

      <button
        className="contact-button"
        onClick={() =>
          (window.location.href = "mailto:priyanshirana78@gmail.com")
        }
      >
        Contact Me
      </button>
    </main>
  );
}
