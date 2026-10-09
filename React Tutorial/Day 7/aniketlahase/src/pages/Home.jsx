function Home() {
  const courses = [
    {
      id: 1,
      name: "Python Programming",
      description: "Learn Python from basics to advanced.",
      category: "Programming",
      progress: "60%",
      color: "#dbeafe",
      icon: "🐍",
    },
    {
      id: 2,
      name: "SQL for Data Analysis",
      description: "Learn SQL queries and database concepts.",
      category: "Database",
      progress: "30%",
      color: "#d1fae5",
      icon: "🗄️",
    },
    {
      id: 3,
      name: "React.js Basics",
      description: "Build modern and interactive web apps.",
      category: "Web Development",
      progress: "20%",
      color: "#ede9fe",
      icon: "⚛️",
    },
  ];

  const categories = [
    { name: "Programming", icon: "💻" },
    { name: "Database", icon: "🗄️" },
    { name: "Data Science", icon: "📊" },
    { name: "Web Development", icon: "🌐" },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f5f7fb",
      fontFamily: "Arial, sans-serif",
      color: "#1e293b",
    },

    navbar: {
      backgroundColor: "#ffffff",
      padding: "18px 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    },

    logo: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#2563eb",
      margin: 0,
    },

    navLinks: {
      display: "flex",
      gap: "22px",
      alignItems: "center",
      flexWrap: "wrap",
    },

    navLink: {
      color: "#475569",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "bold",
    },

    main: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "30px 20px",
    },

    hero: {
      background: "linear-gradient(120deg, #dbeafe, #eff6ff)",
      borderRadius: "18px",
      padding: "40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "25px",
      marginBottom: "35px",
    },

    heroTitle: {
      fontSize: "34px",
      color: "#1e3a8a",
      margin: "0 0 12px",
    },

    heroText: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "#475569",
      maxWidth: "500px",
    },

    button: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      padding: "13px 22px",
      border: "none",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "bold",
      cursor: "pointer",
    },

    heroIcon: {
      fontSize: "95px",
      padding: "15px",
    },

    sectionTitle: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#0f172a",
    },

    categoryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "18px",
      marginBottom: "35px",
    },

    categoryCard: {
      backgroundColor: "#ffffff",
      padding: "25px 15px",
      borderRadius: "12px",
      textAlign: "center",
      border: "1px solid #e2e8f0",
    },

    categoryIcon: {
      fontSize: "35px",
      marginBottom: "10px",
    },

    courseGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "22px",
    },

    courseCard: {
      backgroundColor: "#ffffff",
      borderRadius: "14px",
      overflow: "hidden",
      border: "1px solid #e2e8f0",
      boxShadow: "0 3px 10px rgba(0,0,0,0.04)",
    },

    courseBanner: {
      padding: "25px",
      textAlign: "center",
      fontSize: "45px",
    },

    courseContent: {
      padding: "20px",
    },

    description: {
      color: "#64748b",
      fontSize: "14px",
      lineHeight: 1.6,
      minHeight: "44px",
    },

    progressTrack: {
      height: "7px",
      backgroundColor: "#e2e8f0",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "15px 0 8px",
    },

    progressFill: {
      height: "100%",
      backgroundColor: "#2563eb",
      borderRadius: "10px",
    },

    footer: {
      textAlign: "center",
      padding: "25px",
      color: "#64748b",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Navbar
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>🎓 LMS</h2>

        <div style={styles.navLinks}>
          <a href="#home" style={{ ...styles.navLink, color: "#2563eb" }}>
            Home
          </a>
          <a href="#courses" style={styles.navLink}>
            Courses
          </a>
          <a href="#categories" style={styles.navLink}>
            Categories
          </a>
          <a href="#progress" style={styles.navLink}>
            My Learning
          </a>
        </div>
      </nav> */}

      <main style={styles.main}>
        {/* Welcome Section */}
        <section id="home" style={styles.hero}>
          <div>
            <h1 style={styles.heroTitle}>Welcome Back, Aniket! 👋</h1>

            <p style={styles.heroText}>
              Keep learning, keep growing. Explore new skills,
              learn from expert courses, and achieve your goals.
            </p>

            <button
              style={styles.button}
              onClick={() => {
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Courses →
            </button>
          </div>

          <div style={styles.heroIcon}>📚💻</div>
        </section>

        {/* Categories */}
        <section id="categories">
          <h2 style={styles.sectionTitle}>Explore Categories</h2>

          <div style={styles.categoryGrid}>
            {categories.map((category) => (
              <div key={category.name} style={styles.categoryCard}>
                <div style={styles.categoryIcon}>{category.icon}</div>
                <h3 style={{ fontSize: "17px" }}>{category.name}</h3>
                <p style={{ color: "#64748b", fontSize: "13px" }}>
                  Explore Courses
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Courses */}
        <section id="courses">
          <h2 style={styles.sectionTitle}>Featured Courses</h2>

          <div style={styles.courseGrid}>
            {courses.map((course) => (
              <div key={course.id} style={styles.courseCard}>
                <div
                  style={{
                    ...styles.courseBanner,
                    backgroundColor: course.color,
                  }}
                >
                  {course.icon}
                </div>

                <div style={styles.courseContent}>
                  <span
                    style={{
                      color: "#2563eb",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {course.category}
                  </span>

                  <h3 style={{ marginBottom: "8px" }}>{course.name}</h3>

                  <p style={styles.description}>{course.description}</p>

                  <div style={styles.progressTrack}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: course.progress,
                      }}
                    />
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      marginBottom: "18px",
                    }}
                  >
                    {course.progress} completed
                  </p>

                  <button
                    style={styles.button}
                    onClick={() =>
                      alert(`Opening course: ${course.name}`)
                    }
                  >
                    Continue Learning →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Progress */}
        <section
          id="progress"
          style={{
            marginTop: "35px",
            backgroundColor: "#ffffff",
            padding: "25px",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h2 style={styles.sectionTitle}>My Learning Overview</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              { label: "Enrolled Courses", value: "3", icon: "📘" },
              { label: "Completed Courses", value: "1", icon: "✅" },
              { label: "Learning Hours", value: "12+", icon: "⏱️" },
              { label: "Current Streak", value: "5 Days", icon: "🔥" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "#f8fafc",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px" }}>{stat.icon}</div>
                <h2 style={{ color: "#2563eb", margin: "10px 0" }}>
                  {stat.value}
                </h2>
                <p style={{ color: "#64748b", fontSize: "13px" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        © 2026 LMS - Learn Today, Lead Tomorrow.
      </footer>
    </div>
  );
}

export default Home;
