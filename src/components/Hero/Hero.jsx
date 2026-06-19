import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="intro">
          Hi, I'm
        </p>

        <h1>
          Sonam Kumari
        </h1>

       <h2>React Frontend Developer</h2>

        <p className="description">
          Building modern, responsive and interactive
          web experiences.
        </p>

        <div className="hero-buttons">

         <a href="#projects">
          <button className="primary">
            View Projects
        </button>
        </a>
         <a href="/sonam_resume.pdf" download>
  <button className="secondary">
    Download Resume
  </button>
</a>
        </div>

      </div>

      <div className="hero-right">

        <img
  src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
  alt="developer"
/>

      </div>

    </section>
  );
};

export default Hero;