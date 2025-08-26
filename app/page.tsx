import { MainPage } from "@/src/pages/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Zdorova Veronika",
  description: "Resume Zdorova Veronika",
};

export default function Home() {
  return <MainPage />;
}
