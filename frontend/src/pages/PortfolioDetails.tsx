import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioService } from "../api/portfolio.service";
import type { Portfolio } from "../types/portfolio";
import axios from "axios";

export default function PortfolioDetails() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) {
      navigate("/not-found", { replace: true });
      return;
    }

    async function load() {
      try {
        const data = await portfolioService.findByName(name!);
        setPortfolio(data);
      } catch (err: unknown) {
        console.error("Erro ao buscar portfólio:", err);

        if (axios.isAxiosError(err) && err.response?.status === 404) {
          navigate("/not-found", { replace: true });
          return;
        }

        navigate("/not-found", { replace: true });
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [name, navigate]);

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
            Linkedin <span className="arrow">⟩</span>
          </a>
        )}

        <div className="social-icons">
          {portfolio.facebook && (
            <a href={portfolio.facebook} target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          )}

          {portfolio.instagram && (
            <a href={portfolio.instagram} target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          )}

          {portfolio.twitter && (
            <a href={portfolio.twitter} target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          )}
        </div>
      </div>

      <div className="hero-image">
        {portfolio.photo && (
          <img
            src={`${import.meta.env.VITE_API_URL}/${portfolio.photo}`}
            alt={portfolio.name}
          />
        )}
      </div>
    </div>
  );
}