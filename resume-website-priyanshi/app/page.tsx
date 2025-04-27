export default function Home() {
  return (
    <main style={mainStyle}>
      <section style={heroSectionStyle}>
        <h1 style={headingStyle}>Hi, I&apos;m Priyanshi Rana 👋</h1>
        <p style={subTextStyle}>
          Full Stack Developer passionate about building scalable, elegant applications.
        </p>
        <div style={buttonContainerStyle}>
          <a href="/projects" style={buttonStyle}>View My Projects</a>
        </div>
      </section>
    </main>
  );
}

const mainStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 80px)',
  padding: '0 20px',
  backgroundColor: '#ffffff',
};

const heroSectionStyle = {
  textAlign: 'center' as const,
  marginTop: '80px',
};

const headingStyle = {
  fontSize: '48px',
  color: '#111111',
  marginBottom: '20px',
};

const subTextStyle = {
  fontSize: '20px',
  color: '#666666',
  marginBottom: '30px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  backgroundColor: '#2563eb',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 500,
  transition: 'background-color 0.3s ease',
};
