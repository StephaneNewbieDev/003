import React from "react";

const Services = () => {
  return (
    <div>
      {/* Section Banner */}
      <section
        style={{
          backgroundImage: `url('/images/banner.jpg')`, // Remplace par le chemin de ton image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px", // Hauteur de la bannière
          position: "relative",
        }}
      ></section>

      {/* Titre avec fond blanc */}
      <div
        style={{
          backgroundColor: "#fff", // Fond blanc
          color: "#000", // Texte noir
          textAlign: "center",
          padding: "20px 0",
          marginTop: "-50px",
          zIndex: 1,
          position: "relative",
        }}
      >
        <h1>MON OFFRE DE SERVICES</h1>
        <p>Découvrez les prestations sur lesquelles je peux intervenir.</p>
      </div>

      {/* Section Services */}
      <section className="container py-5">
        <div className="row text-center">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <i className="fa-solid fa-desktop fa-3x mb-3 text-primary"></i>
                <h5 className="card-title">UX DESIGN</h5>
                <p className="card-text">
                  L'<strong>UX Design</strong> est une méthode de conception
                  centrée sur l'utilisateur. Son but est d’offrir une expérience
                  de navigation optimale à l’internaute.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <i className="fa-solid fa-code fa-3x mb-3 text-primary"></i>
                <h5 className="card-title">DÉVELOPPEMENT WEB</h5>
                <p className="card-text">
                  Le <strong>développement de sites web</strong> repose sur
                  l’utilisation des langages <strong>HTML</strong>,{" "}
                  <strong>CSS</strong>, <strong>JavaScript</strong> et{" "}
                  <strong>PHP</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="card border-0 ">
              <div className="card-body">
                <i className="fa-solid fa-chart-line fa-3x mb-3 text-primary"></i>
                <h5 className="card-title">RÉFÉRENCEMENT</h5>
                <p className="card-text">
                  Le <strong>référencement naturel</strong> d’un site, aussi
                  appelé <strong>SEO</strong>, consiste à mettre des techniques
                  en œuvre pour <strong>améliorer sa position</strong> dans les
                  résultats des moteurs de recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
