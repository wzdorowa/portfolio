import { PortfolioPage } from "@/src/pages/PortfolioPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Zdorova Veronika",
  description: "Portfolio Zdorova Veronika",
};

export default function Home() {
  return <PortfolioPage />;
}
