import { PortfolioPage } from "@/src/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Zdorova Veronika",
  description: "Portfolio Zdorova Veronika",
};

export default function Home() {
  return <PortfolioPage />;
}
