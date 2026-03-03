import { Link } from "react-router-dom";
import type { Portfolio } from "../types/portfolio";

interface Props {
  portfolio: Portfolio;
}

export default function PortfolioCard({ portfolio }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 12 }}>
      <h2>{portfolio.name}</h2>
      <p>{portfolio.description}</p>
      <Link to={`/portfolio/${portfolio.id}`}>
        Ver detalhes
      </Link>
    </div>
  );
}