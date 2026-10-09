function About() {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f5f7fb",
      fontFamily: "Arial, sans-serif",
      color: "#1e293b",
    },

    hero: {
      background: "linear-gradient(135deg, #1d4ed8, #60a5fa)",
      color: "white",
      textAlign: "center",
      padding: "65px 20px",
    },

    title: {
      fontSize: "38px",
      marginBottom: "15px",
    },

    subtitle: {
      fontSize: "17px",
      lineHeight: 1.8,
      maxWidth: "700px",
      margin: "0 auto",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "40px 20px",
    },

    section: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "14px",
      marginBottom: "25px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    },

    heading: {
      color: "#1d4ed8",
      fontSize: "25px",
      marginBottom: "15px",
    },

    paragraph: {
      color: "#64748b",
      fontSize: "16px",
      lineHeight: 1.9,
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginTop: "25px",
    },

    card: {
      backgroundColor: "#ffffff",
      padding: "25px",
      textAlign: "center",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
    },

    icon: {
      fontSize: "40px",
      marginBottom: "10px",
    },

    cardTitle: {
      color: "#1e40af",
      fontSize: "19px",
    },

    footer: {
      backgroundColor: "#172554",
      color: "#ffffff",
      textAlign: "center",
      padding: "22px",
      marginTop: "20px",
    },
  };

  const features = [
    {
      icon: "📚",
      title: "Quality Courses",
      description:
        "Access structured courses designed to help you learn new skills.",
    },
    {
      icon: "🎯",
      title: "Learn at Your Pace",
      description:
        "Study anytime and track your learning progress at your convenience.",
    },
    {
      icon: "💻",
      title: "Practical Learning",
      description:
        "Build your knowledge through programming and technology courses.",
    },
    {
      icon: "📈",
      title: "Track Progress",
      description:
        "Monitor your course completion and celebrate your achievements.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>About Our LMS 🎓</h1>

        <p style={styles.subtitle}>
          Welcome to our Learning Management System, a platform
          designed to make learning simple, accessible, and effective
          for everyone.
        </p>
      </section>

      <main style={styles.container}>
        {/* About Us */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Who We Are</h2>

          <p style={styles.paragraph}>
            Our LMS is an online learning platform where students
            can explore courses, develop technical skills, and
            improve their knowledge in different domains.
            We aim to provide a user-friendly learning experience
            that helps learners grow personally and professionally.
          </p>
        </section>

        {/* Mission and Vision */}
        <div style={styles.grid}>
          <section style={styles.card}>
            <div style={styles.icon}>🚀</div>
            <h2 style={styles.cardTitle}>Our Mission</h2>

            <p style={styles.paragraph}>
              To make quality education accessible and help students
              develop practical, career-oriented skills.
            </p>
          </section>

          <section style={styles.card}>
            <div style={styles.icon}>🌟</div>
            <h2 style={styles.cardTitle}>Our Vision</h2>

            <p style={styles.paragraph}>
              To create a learning environment where everyone can
              explore opportunities and achieve their goals.
            </p>
          </section>
        </div>

        {/* Features */}
        <section style={{ marginTop: "35px" }}>
          <h2 style={styles.heading}>Why Choose Our LMS?</h2>

          <div style={styles.grid}>
            {features.map((feature) => (
              <div key={feature.title} style={styles.card}>
                <div style={styles.icon}>{feature.icon}</div>

                <h3 style={styles.cardTitle}>{feature.title}</h3>

                <p style={styles.paragraph}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section
          style={{
            ...styles.section,
            marginTop: "35px",
            textAlign: "center",
            backgroundColor: "#eff6ff",
          }}
        >
          <h2 style={styles.heading}>Start Your Learning Journey!</h2>

          <p style={styles.paragraph}>
            Explore our courses, learn new skills, and take the next
            step toward your future.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        © 2026 LMS | Learn Today, Lead Tomorrow.
      </footer>
    </div>
  );
}

export default About;