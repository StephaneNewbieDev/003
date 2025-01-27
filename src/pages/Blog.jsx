import React from "react";

const Blog = () => {
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
        <h1>BLOG</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
      </div>

      {/* Section Blog */}
      <section className="container py-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/coder.jpg" // Remplacez par votre image
                className="card-img-top"
                alt="Coder son site en HTML/CSS"
              />
              <div className="card-body">
                <h5 className="card-title">Coder son site en HTML/CSS</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Publié le 22 août 2022</small>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/croissance.jpg" // Remplacez par votre image
                className="card-img-top"
                alt="Vendre ses produits sur le web"
              />
              <div className="card-body">
                <h5 className="card-title">Vendre ses produits sur le web</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Publié le 20 août 2022</small>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/google.jpg" // Remplacez par votre image
                className="card-img-top"
                alt="Se positionner sur Google"
              />
              <div className="card-body">
                <h5 className="card-title">Se positionner sur Google</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Publié le 1 août 2022</small>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/screens.jpg" // Remplacez par votre image
                className="card-img-top"
                alt="Coder en responsive design"
              />
              <div className="card-body">
                <h5 className="card-title">Coder en responsive design</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Publié le 31 juillet 2022</small>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/seo.jpg" // Remplacez par votre image
                className="card-img-top"
                alt="Techniques de référencement"
              />
              <div className="card-body">
                <h5 className="card-title">Techniques de référencement</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Publié le 30 juillet 2022</small>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/technos.png" // Remplacez par votre image
                className="card-img-top"
                alt="Apprendre à coder"
              />
              <div className="card-body">
                <h5 className="card-title">Apprendre à coder</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Publié le 12 juillet 2022</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
