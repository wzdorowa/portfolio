// Types
export interface PortfolioItem {
  id: number | string;
  image: string;
  alt: string;
}

// Portfolio data
export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: "vaults-admin-panel",
    image: "/images/portfolio/vaults-admin-panel.webp",
    alt: "Vaults admin panel",
  },
  {
    id: "bitzevskaya-fabrica",
    image: "/images/portfolio/bitzevskaya-fabrica.webp",
    alt: "Битцевская фабрика (Главная страница)",
  },
  {
    id: "crypto-landing",
    image: "/images/portfolio/crypto-landing.webp",
    alt: "Apostro lending",
  },
  {
    id: "murnorka-landing",
    image: "/images/portfolio/murnorka.webp",
    alt: "Мурнорка (Промостраница коллекции)",
  },
  {
    id: "resolve-stats",
    image: "/images/portfolio/resolve-stats.png",
    alt: "Resolve stats",
  },
  {
    id: "smart-socket",
    image: "/images/portfolio/smart-socket.webp",
    alt: "Умная розетка",
  },
  {
    id: "dostavka",
    image: "/images/portfolio/dostavka.webp",
    alt: "Сервис доставки",
  },
  {
    id: "documents",
    image: "/images/portfolio/documents.webp",
    alt: "Сервис хранения документов",
  },
] as const;
