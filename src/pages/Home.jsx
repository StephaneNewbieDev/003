import React from "react";

const Home = () => {
  return (
    <div>
      {/* Section Hero */}
      <section
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "33vh",

          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary mt-3">
            En savoir plus
          </a>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="container py-5">
        <div className="row">
          {/* Texte À propos */}
          <div className="col-md-6 shadow-box">
            <h2>À propos</h2>
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai
              suivi une formation d'<strong>intégrateur-développeur web</strong>{" "}
              au CEF. Au cours de cette formation, j'ai acquis des bases solides
              pour travailler dans le domaine du{" "}
              <strong>développement web</strong>.
            </p>
            <p>
              Basé à Lyon, je suis en recherche d’une alternance au sein d'une
              agence digitale pour consolider ma formation de développeur web
              full stack.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>

          {/* Section Mes compétences */}
          <div className="col-md-6 shadow-box">
            <img
              src="/images/john-doe-about.jpg"
              alt="Mes compétences"
              className="img-fluid mb-3"
            />
            <h2>Mes compétences</h2>
            <div>
              <p>HTML5 90%</p>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>CSS3 80%</p>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>JavaScript 70%</p>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>PHP 60%</p>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>React 50%</p>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
