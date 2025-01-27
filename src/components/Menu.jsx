import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <header>
      <nav
        style={{
          backgroundColor: "#212429",
          padding: "10px 50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        {/* Nom à gauche */}
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>John Doe</div>

        {/* Liens à droite */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "15px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                transition: "text-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = "0px 0px 8px #fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = "none";
              }}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                transition: "text-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = "0px 0px 8px #fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = "none";
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/realisations"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                transition: "text-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = "0px 0px 8px #fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = "none";
              }}
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                transition: "text-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = "0px 0px 8px #fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = "none";
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                transition: "text-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = "0px 0px 8px #fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = "none";
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
