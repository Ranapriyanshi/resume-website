export default function Projects() {
    return (
      <main style={projectsContainer}>
        <section style={sectionStyle}>
          <h1 style={headingStyle}>Projects</h1>
          <div style={projectsGrid}>
            <div style={projectCard}>
              <h2 style={projectTitle}>Ornate (Design Sharing Platform)</h2>
              <p style={techStack}><strong>Stack:</strong> React.js, Node.js, Express, MongoDB</p>
              <p style={projectDescription}>
                Built a full-stack platform for designers to showcase and rate creative work.
                Selected for demonstration at Indian Science Congress Association (ISCA).
                Deployed on Netlify with optimized performance (20% faster loading).
              </p>
            </div>
            <div style={projectCard}>
              <h2 style={projectTitle}>Nidana (Pet Clinic Management Software)</h2>
              <p style={techStack}><strong>Stack:</strong> NestJS, PostgreSQL</p>
              <p style={projectDescription}>
                Developed scalable backend services to streamline operations for over 50+ veterinary clinics.
                Implemented master-slave database replication and OTP authentication.
              </p>
            </div>
            <div style={projectCard}>
              <h2 style={projectTitle}>Slippy (Microservices Integration)</h2>
              <p style={techStack}><strong>Stack:</strong> Node.js, API Integrations (Zapier, Make, Loop)</p>
              <p style={projectDescription}>
                Designed high-performance RESTful microservices for seamless third-party service integrations.
                Enhanced platform flexibility and real-time data transfer capabilities.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  const projectsContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    minHeight: 'calc(100vh - 80px)',
  };
  
  const sectionStyle = {
    maxWidth: '1000px',
    width: '100%',
  };
  
  const headingStyle = {
    fontSize: '36px',
    color: '#111111',
    marginBottom: '40px',
    textAlign: 'center' as const,
  };
  
  const projectsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  };
  
  const projectCard = {
    padding: '20px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.05)',
  };
  
  const projectTitle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#111111',
  };
  
  const techStack = {
    fontSize: '16px',
    color: '#2563eb',
    marginBottom: '10px',
  };
  
  const projectDescription = {
    fontSize: '16px',
    color: '#666666',
    lineHeight: 1.5,
  };
  