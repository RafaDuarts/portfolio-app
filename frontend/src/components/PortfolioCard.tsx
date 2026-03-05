import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioService } from "../api/portfolio.service";
import type { Portfolio } from "../types/portfolio";
import "../index.css";

export default function PortfolioDetails() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        if (!username) return;

        const data = await portfolioService.findByName(username);
        setPortfolio(data);
      } catch (error) {
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolio();
  }, [username, navigate]);

  if (loading) {
    return <div className="center">Carregando...</div>;
  }

  if (!portfolio) return null;

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>{portfolio.name}</h1>
        <p>{portfolio.description}</p>

        {portfolio.linkedin && (
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Linkedin →
          </a>
        )}

        <div className="social-icons">
          {portfolio.facebook && (
            <a href={portfolio.facebook} target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
          {portfolio.instagram && (
            <a href={portfolio.instagram} target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {portfolio.twitter && (
            <a href={portfolio.twitter} target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          )}
        </div>
      </div>

      <div className="hero-image">
        <img src={portfolio.photo} alt={portfolio.name} />
      </div>
    </div>
  );
}