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
    image: "/images/portfolio/vaults-admin-panel.png",
    alt: "Vaults admin panel",
  },
  {
    id: "bitzevskaya-fabrica",
    image: "/images/portfolio/bitzevskaya-fabrica.png",
    alt: "Битцевская фабрика (Главная страница)",
  },
  {
    id: "crypto-landing",
    image: "/images/portfolio/apostro.png",
    alt: "Apostro lending",
  },
  {
    id: "murnorka-landing",
    image: "/images/portfolio/murnorka.png",
    alt: "Мурнорка (Промостраница коллекции)",
  },
  {
    id: "resolve-stats",
    image: "/images/portfolio/resolve-stats.png",
    alt: "Resolve stats",
  },
  {
    id: "smart-socket",
    image: "/images/portfolio/rozetka.png",
    alt: "Умная розетка",
  },
  {
    id: "dostavka",
    image: "/images/portfolio/dostavka.png",
    alt: "Сервис доставки",
  },
  {
    id: "documents",
    image: "/images/portfolio/documents.png",
    alt: "Сервис хранения документов",
  },
] as const;
