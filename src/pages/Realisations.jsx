import React from "react";
const Realisations = () => {
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
        <h1>PORTFOLIO</h1>
        <p>voici quelques unes de mes réalisations.</p>
      </div>

      {/* Section Realisations */}
      <section className="container py-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/fresh-food.jpg"
                className="card-img-top"
                alt="Fresh food"
              />
              <div className="card-body">
                <h5 className="card-title">Fresh food</h5>
                <p className="card-text">
                  Réalisation d’un site avec commande en ligne.
                </p>
                <a href="#" className="btn btn-inverse">
                  Voir
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Site réalisé avec PHP et MySQL
                </small>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/restaurant-japonais.jpg" // Remplacez par votre image
                className="card-img-top"
                alt="Restaurant Akira"
              />
              <div className="card-body">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">Réalisation d’un site vitrine.</p>
                <a href="#" className="btn btn-inverse">
                  Voir
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Site réalisé avec WordPress
                </small>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/espace-bien-etre.jpg" // Remplacez par votre image
                className="card-img-top"
                alt="Espace bien-être"
              />
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">
                  Réalisation d’un site vitrine pour un praticien de bien-être.
                </p>
                <a href="#" className="btn btn-inverse">
                  Voir
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
