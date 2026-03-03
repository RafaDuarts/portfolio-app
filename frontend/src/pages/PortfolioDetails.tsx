import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { portfolioService } from "../api/portfolio.service";
import type { Portfolio } from "../types/portfolio";

export default function PortfolioDetails() {
  const { name } = useParams();

  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }

    async function load() {
      try {
        const data = await portfolioService.findByName(name!);
        setPortfolio(data);
      } catch (err) {
        console.error("Erro ao buscar portfólio:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [name]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar portfólio</p>;
  if (!portfolio) return <p>Portfólio não encontrado</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{portfolio.name}</h1>

      {portfolio.imageUrl && (
        <img
          src={portfolio.imageUrl}
          alt={portfolio.name}
          width={200}
        />
      )}

      <p><strong>Email:</strong> {portfolio.email}</p>
      <p><strong>Descrição:</strong> {portfolio.description}</p>

      <h3>Redes Sociais</h3>

      {portfolio.linkedin && (
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
            {portfolio.linkedin}
          </a>
        </p>
      )}

      {portfolio.facebook && (
        <p>
          <strong>Facebook:</strong>{" "}
          <a href={portfolio.facebook} target="_blank" rel="noreferrer">
            {portfolio.facebook}
          </a>
        </p>
      )}

      {portfolio.twitter && (
        <p>
          <strong>Twitter:</strong>{" "}
          <a href={portfolio.twitter} target="_blank" rel="noreferrer">
            {portfolio.twitter}
          </a>
        </p>
      )}

      {portfolio.instagram && (
        <p>
          <strong>Instagram:</strong>{" "}
          <a href={portfolio.instagram} target="_blank" rel="noreferrer">
            {portfolio.instagram}
          </a>
        </p>
      )}
    </div>
  );
}