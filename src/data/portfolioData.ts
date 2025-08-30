// Types
export interface PortfolioItem {
  id: number;
  image: string;
  alt: string;
}

// Portfolio data
export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: 1,
    image: "/images/portfolio/vaults-admin-panel.png",
    alt: "Vaults admin panel",
  },
  {
    id: 2,
    image: "/images/portfolio/bitzevskaya-fabrica.png",
    alt: "Битцевская фабрика (Главная страница)",
  },
  {
    id: 3,
    image: "/images/portfolio/apostro.png",
    alt: "Apostro lending",
  },
  {
    id: 4,
    image: "/images/portfolio/murnorka.png",
    alt: "Мурнорка (Промостраница коллекции)",
  },
  {
    id: 5,
    image: "/images/portfolio/resolve-stats.png",
    alt: "Resolve stats",
  },
  {
    id: 6,
    image: "/images/portfolio/rozetka.png",
    alt: "Умная розетка",
  },
  {
    id: 7,
    image: "/images/portfolio/dostavka.png",
    alt: "Сервис доставки",
  },
  {
    id: 8,
    image: "/images/portfolio/documents.png",
    alt: "Сервис хранения документов",
  },
] as const;
