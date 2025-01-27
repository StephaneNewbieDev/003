import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/contact-bg.jpg')`, // Remplacez par votre image d'arrière-plan
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
      }}
    >
      {/* Container principal */}
      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "40px",
          maxWidth: "900px",
        }}
      >
        {/* Titre principal */}
        <h1 className="text-center">ME CONTACTER</h1>
        <p className="text-center">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>

        {/* Formulaire et coordonnées */}
        <div className="row mt-4">
          {/* Formulaire de contact */}
          <div className="col-md-6 border-end">
            <h2>Formulaire de contact</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Votre nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Votre adresse email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre adresse email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Votre numéro de téléphone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Sujet
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Sujet"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Votre message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Envoyer
              </button>
            </form>
          </div>

          {/* Coordonnées et Google Map */}
          <div className="col-md-6">
            <h2>Mes coordonnées</h2>
            <p>
              <i className="fa-solid fa-location-dot me-2 text-primary"></i> 40
              Rue Laure Diebold, 69009 Lyon, France
            </p>
            <p>
              <i className="fa-solid fa-phone me-2 text-primary"></i> 06 20 30
              40 50
            </p>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.245782640107!2d4.803070316170698!3d45.77185657910568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb3e98bf776b%3A0x278d3db2d8c96ed5!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1694875457311!5m2!1sen!2sfr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
