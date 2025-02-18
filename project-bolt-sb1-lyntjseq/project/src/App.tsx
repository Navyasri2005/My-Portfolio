import React, { useState } from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/Navyasri2005'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/navyasrigude032/'
    },
    {
      name: 'LeetCode',
      icon: <Code2 className="w-6 h-6" />,
      url: 'https://leetcode.com/u/Fun3bJnm5S/'
    }
  ];

  const projects = [
    {
      title: 'ATM Interface ',
      description: 'Developed a simple ATM interface using Python, allowing users to perform transactions like balance inquiries, deposits, and withdrawals.',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247',
      technologies: ['Python', 'File Handling','OOP']
    },
    {
      title: 'Resume Screening AI',
      description: 'Developed an AI-powered Resume Screening System that automates the process of analyzing and shortlisting resumes based on job requirements. The system extracts key information, ranks candidates, and provides insights for recruiters.',
      image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc',
      technologies: ['Python','NLP (Natural Language Processing)', 'Machine Learning',' Pandas', 'Scikit-Learn', 'SpaCy']
    },
    {
      title: 'Netflix Dashboard',
      description: 'Designed an interactive Netflix Dashboard using Tableau to analyze and visualize trends in Netflix content, including movie and TV show distributions, genre popularity, and release patterns.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85',
      technologies: ['Python','Tableau', 'SQL']
    },
    {
      title: 'E-commerce Analytics Platform',
      description: 'Built a comprehensive analytics platform for e-commerce data analysis, featuring real-time sales tracking, customer behavior analysis, and predictive inventory management using machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Plotly', 'PostgreSQL']
    }
  ];

  const skills = [
    { category: 'Programming & Development:', items: ['Python','JavaScript','HTML&CSS','C'] },
    { category: 'Data Science & Analytics:', items: ['Pandas & NumPy', 'SQL', 'Tableau'] },
    { category: 'Tools', items: ['VS Code', 'Jupyter Notebook','GitHub (Version Control)','Tableau (Dashboard & Reports)'] }
  ];

  const education = [
    {
      level: "Bachelor's Degree",
      field: "Computer Science And Data Science",
      institution: "Anil Neerukonda Institute Of Technology and Sciences",
      location: "Visakhapatnam",
      period: "2022 - 2026",
      details: "Currently pursuing B.Tech with focus on Data Science and Machine Learning"
    },
    {
      level: "Intermediate Education",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Chaitanya Junior College",
      location: "Visakhapatnam",
      period: "2020 - 2022",
      details: "Completed Intermediate with 97% aggregate"
    },
    {
      level: "Secondary Education",
      field: "SSC",
      institution: "Sri Chaitanya Techno School",
      location: "Visakhapatnam",
      period: "2019 - 2020",
      details: "Completed SSC with 98% aggregate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  } px-1 py-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className={activeSection === 'home' ? 'block' : 'hidden'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-indigo-900 sm:text-6xl">
                Navya Sri Gude
              </h1>
              <p className="mt-3 text-xl text-indigo-600">
                Data Science & Web Development | Passion for Analytics & Insights
              </p>
              <div className="mt-8">
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={activeSection === 'about' ? 'block' : 'hidden'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">About Me</h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-xl p-8">
              <p className="text-lg text-indigo-900 leading-relaxed">
                I am a passionate software developer and data science enthusiast with experience in web development, data analytics, and visualization. I have completed multiple internships, including roles at Osasis Infobyte, Corizo, and Octanet Services, where I worked on real-world projects in web development and software engineering.

                Currently, I am expanding my expertise in data science, NumPy, Pandas, and Tableau to extract meaningful insights and build impactful solutions. I am always eager to learn, innovate, and take on new challenges that push the boundaries of technology.
                
                🔹 Skills: Python, Web Development, Data Science, GitHub, Tableau.

                🔹 Experience: Internships at Osasis Infobyte, Corizo, and Octanet Services.

                🔹 Interests: Building web applications, data visualization, and problem-solving.

                Looking forward to collaborating on exciting projects and learning new technologies!
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={activeSection === 'projects' ? 'block' : 'hidden'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.title} className="bg-white/60 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-900">{project.title}</h3>
                    <p className="mt-2 text-indigo-700">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={activeSection === 'skills' ? 'block' : 'hidden'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-white/60 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={activeSection === 'education' ? 'block' : 'hidden'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Education</h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.level} className="bg-white/60 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-900">{edu.field}</h3>
                      <p className="text-lg text-indigo-700">{edu.level}</p>
                      <p className="text-indigo-600">{edu.institution}</p>
                      <p className="text-indigo-600">{edu.location}</p>
                    </div>
                    <p className="text-indigo-500 font-medium">{edu.period}</p>
                  </div>
                  <p className="mt-2 text-indigo-700">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={activeSection === 'contact' ? 'block' : 'hidden'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Contact</h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-indigo-900">Email</h3>
                  <p className="text-indigo-700">navyasrigude3@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-indigo-900">Phone</h3>
                  <p className="text-indigo-700">9381043993</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-indigo-900">Location</h3>
                  <p className="text-indigo-700">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;