// Types
export interface PortfolioItem {
  id: number | string;
  image: string;
  alt: string;
  year: number;
}

// Portfolio data
export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: "vaults-admin-panel",
    image: "/images/portfolio/preview/vaults-admin-panel.webp",
    alt: "Vaults admin panel",
    year: 2025,
  },
  {
    id: "bitzevskaya-fabrica",
    image: "/images/portfolio/preview/bitzevskaya-fabrica.webp",
    alt: "Битцевская фабрика (Главная страница)",
    year: 2025,
  },
  {
    id: "crypto-landing",
    image: "/images/portfolio/preview/crypto-landing.webp",
    alt: "Apostro lending",
    year: 2024,
  },
  {
    id: "murnorka-landing",
    image: "/images/portfolio/preview/murnorka.webp",
    alt: "Мурнорка (Промостраница коллекции)",
    year: 2025,
  },
  {
    id: "resolve-stats",
    image: "/images/portfolio/preview/resolve-stats.webp",
    alt: "Resolve stats",
    year: 2024,
  },
  {
    id: "smart-socket",
    image: "/images/portfolio/preview/smart-socket.webp",
    alt: "Умная розетка",
    year: 2025,
  },
  {
    id: "delivery",
    image: "/images/portfolio/preview/delivery.webp",
    alt: "Сервис доставки",
    year: 2024,
  },
  {
    id: "documents",
    image: "/images/portfolio/preview/documents.webp",
    alt: "Сервис хранения документов",
    year: 2025,
  },
] as const;
