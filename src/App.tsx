import React, { useState, useEffect, useRef, FC } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppContactForm from "./pages/WhatsAppContactForm";
import Education from "./pages/Education";
import Logo from "./assets/Logo.png";
import heroright from "./assets/hero-right2.png";

interface Project {
  title: string;
  desc: string;
  img: string;
}

const App: FC = () => {
  const [scrollX, setScrollX] = useState<number>(0);

  // Ref for project cards (we'll store them in a Set to avoid null issues)
  const projectRefs = useRef<Set<HTMLDivElement>>(new Set());

  const projectSectionRef = useRef<HTMLElement | null>(null);

  // Background logo scroll movement
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const maxMove = 70; // max move to the right in %
      setScrollX(10 + scrollPercent * maxMove);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Project card scroll-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      projectRefs.current.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio site built with React, showcasing my projects and skills.",
      img: "/project1.png",
    },
    {
      title: "Task Manager App",
      desc: "A task management app built with Node.js and MongoDB to organize daily tasks efficiently.",
      img: "/project2.png",
    },
    {
      title: "E-Commerce Platform",
      desc: "An online store built with ASP.NET MVC and SQL Server with user authentication and payment integration.",
      img: "/project3.png",
    },
    {
      title: "E-Commerce Platform",
      desc: "An online store built with ASP.NET MVC and SQL Server with user authentication and payment integration.",
      img: "/project3.png",
    },
    {
      title: "E-Commerce Platform",
      desc: "An online store built with ASP.NET MVC and SQL Server with user authentication and payment integration.",
      img: "/project3.png",
    },
  ];

  // Callback ref to safely add elements to the Set
  const setProjectRef = (el: HTMLDivElement | null) => {
    if (el) projectRefs.current.add(el);
  };

  return (
    <>
      <img
        src={Logo}
        alt="Background Logo"
        className="background-logo"
        style={{ left: `${scrollX}%` }}
      />

      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-left">
            <h1>HELLO!</h1>
            <h2>Welcome to MY PORTFOLIO</h2>
            <p>
              I'm Diether. I design, develop, and maintain responsive websites and mobile applications
              that deliver seamless user experiences across all devices. I specialize in creating intuitive
              interfaces, integrating dynamic features, and ensuring optimal performance and accessibility.
              Using modern technologies, I build scalable, high-quality digital solutions—from concept to deployment—
              that meet both user needs and business goals.
            </p>
            <button>RESUME</button>
          </div>
          <div className="hero-right">
            <img src={heroright} alt="Hero Image" className="rotating-image" />
          </div>
        </section>

        <section className="projects" ref={projectSectionRef}>
          <h2>Projects</h2>
          <div className="project-cards">
            {projects.map((proj, index) => (
              <div
                key={index}
                className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
                ref={setProjectRef} // Use callback ref
              >
                <img src={proj.img} alt={proj.title} />
                <div className="card-content">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Education />

        <section className="contact">
          <div className="content">
            <h2>Contact</h2>
            <WhatsAppContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
