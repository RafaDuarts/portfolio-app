import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

type Portfolio = {
  id: string;
  name: string;
  email: string;
  description: string;
  photo?: string;
  linkedin: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
};

function getApiUrl() {
  return process.env.API_URL ?? "http://localhost:4000";
}

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams(): Promise<Array<{ name: string }>> {
  return [];
}

async function fetchPortfolio(name: string): Promise<Portfolio | null> {
  const api = getApiUrl();

  const res = await fetch(`${api}/portfolio/${encodeURIComponent(name)}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Erro ao buscar portfolio: ${res.status}`);

  return res.json();
}

export default async function PublicPortfolioPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const portfolio = await fetchPortfolio(name);

  if (!portfolio) {
    notFound();
  }

  const api = getApiUrl();
  const publicBackend = process.env.PUBLIC_BACKEND_URL ?? api;

  const photoUrl = portfolio.photo
    ? `${publicBackend.replace(/\/$/, "")}/${portfolio.photo}`
    : null;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.left}>
          <h1 className={styles.title}>{portfolio.name}</h1>

          <p className={styles.description}>{portfolio.description}</p>

          <div className={styles.ctaRow}>
            <a
              className={styles.button}
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <span className={styles.arrow}>⟩</span>
            </a>
          </div>

          <div className={styles.socials}>
            {portfolio.facebook && (
              <a
                className={styles.iconLink}
                href={portfolio.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            )}

            {portfolio.instagram && (
              <a
                className={styles.iconLink}
                href={portfolio.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            )}

            {portfolio.twitter && (
              <a
                className={styles.iconLink}
                href={portfolio.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            )}
          </div>
        </section>

        <section className={styles.right}>
          <div className={styles.avatarWrap}>
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt={`Foto de ${portfolio.name}`}
                width={340}
                height={340}
                unoptimized
                className={styles.avatar}
                priority
              />
            ) : (
              <div className={styles.avatar} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}