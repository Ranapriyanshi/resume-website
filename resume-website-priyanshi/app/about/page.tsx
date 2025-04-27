export default function About() {
    return (
      <main style={aboutContainer}>
        <section style={sectionStyle}>
          <h1 style={headingStyle}>About Me</h1>
          <p style={paragraphStyle}>
            I&apos;m Priyanshi Rana, a Full Stack Developer passionate about building scalable, elegant applications.
          </p>
          <p style={paragraphStyle}>
            🎓 <strong>Education:</strong> B.Tech in CS (Software Product Engineering) from Lovely Professional University (Expected 2026) | CGPA 9.03
          </p>
          <p style={paragraphStyle}>
            🌐 <strong>Languages:</strong> English (Fluent), Hindi (Native), German (A2 - learning)
          </p>
          <p style={paragraphStyle}>
            🎯 <strong>Hobbies:</strong> Music, Badminton (Inter-hostel winner 🏸), Member of AIESEC
          </p>
        </section>
      </main>
    );
  }
  
  const aboutContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: '#ffffff',
  };
  
  const sectionStyle = {
    maxWidth: '800px',
    textAlign: 'left' as const,
  };
  
  const headingStyle = {
    fontSize: '36px',
    color: '#111111',
    marginBottom: '20px',
  };
  
  const paragraphStyle = {
    fontSize: '18px',
    color: '#666666',
    marginBottom: '15px',
    lineHeight: 1.6,
  };
  