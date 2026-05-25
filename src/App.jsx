import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_30%)]"></div>

      {/* Navbar */}
      <nav className="sticky top-0 backdrop-blur-lg bg-black/30 border-b border-white/10 flex justify-between items-center px-10 py-6 z-50">

        <h1 className="text-2xl font-bold tracking-wider">
          ANJANA
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#achievements" className="hover:text-white transition">
              Achievements
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>

        </ul>

      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center text-center px-6 pt-32 relative z-10"
      >

        <p className="uppercase tracking-[6px] text-gray-400 mb-4">
          Welcome To My Portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi, I'm Anjana G Kumar
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Software Engineer",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-gray-300 text-2xl md:text-4xl font-semibold mb-8"
        />

        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-10 leading-8">
          Computer Science Engineering undergraduate passionate about
          AI-powered full-stack development, scalable software systems,
          and modern user-centric digital experiences.
        </p>

        <div className="flex gap-6 flex-wrap justify-center">

          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="mailto:anjanaahkumar@gmail.com"
            className="border border-gray-500 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>

        </div>

      </motion.section>

      {/* About Section */}
      <section
        id="about"
        className="px-8 md:px-20 py-32 relative z-10"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl">

          <p className="text-gray-300 text-lg leading-9 text-center">
            I am a Computer Science Engineering undergraduate with a strong
            passion for full-stack development, artificial intelligence,
            and scalable software engineering. I aspire to architect
            high-performance digital solutions that combine modern
            technologies with user-centric design.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {[
              "Python",
              "Java",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "Tailwind CSS",
              "REST APIs",
              "GitHub",
              "Data Structures & Algorithms",
              "DBMS",
              "Operating Systems",
              "Computer Networks",
              "Artificial Intelligence"
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200 hover:bg-purple-500/20 transition"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="px-8 md:px-20 py-32 relative z-10"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">

            <h3 className="text-2xl font-bold mb-4">
              HNP-CAPTCHA
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Developed an intelligent AI-resistant CAPTCHA system that
              combines cognitive visual challenges with behavioral analysis
              to distinguish humans from bots using machine learning and
              real-time user interaction tracking.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">

              {[
                "React.js",
                "Node.js",
                "Express.js",
                "Python",
                "MongoDB",
                "Machine Learning",
                "Scikit-learn",
                "Behavioral Analysis"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-purple-500/20 text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

            <a
              href="https://github.com/Anjanaaah"
              target="_blank"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              View Project
            </a>

          </div>

          {/* Project 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">

            <h3 className="text-2xl font-bold mb-4">
              Personal Portfolio Website
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Designed and developed a premium responsive personal
              portfolio website showcasing projects, skills, achievements,
              and contact information with modern UI/UX principles.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">

              {[
                "React.js",
                "JavaScript",
                "Tailwind CSS",
                "Framer Motion",
                "Responsive Design"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-500/20 text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

            <a
              href="https://github.com/Anjanaaah"
              target="_blank"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              View Project
            </a>

          </div>

        </div>

      </section>

      {/* Achievements */}
      <section
        id="achievements"
        className="px-8 md:px-20 py-32 relative z-10"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">🏆 IDEATHON</h3>
            <p className="text-gray-400 leading-8">
              Secured Second Prize in PRAYAAG IDEATHON for presenting innovative technical solutions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">🌍 Best Delegate</h3>
            <p className="text-gray-400 leading-8">
              Won First Place in intra-college MUN representing Iraq in UNGA DISEC.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">🚀 Leadership Experience</h3>
            <p className="text-gray-400 leading-8">
              Gained collaborative, technical, and leadership experience through IEEE activities and community initiatives.
            </p>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 md:px-20 py-32 relative z-10 text-center"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Interested in collaborating or discussing opportunities in software engineering and AI? Let’s connect.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:anjanaahkumar@gmail.com"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Email Me
          </a>

          <a
            href="tel:+918281221272"
            className="border border-gray-500 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            +91 8281221272
          </a>

          <a
            href="https://github.com/Anjanaaah"
            target="_blank"
            className="border border-gray-500 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/anjana-kumar-893128325"
            target="_blank"
            className="border border-gray-500 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 pb-10">
        © 2026 Anjana G Kumar. All rights reserved.
      </footer>

    </div>
  )
}

export default App