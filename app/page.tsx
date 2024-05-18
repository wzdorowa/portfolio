import { MainPage } from "@/src/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Zdorova Veronika",
  description: "Resume Zdorova Veronika",
};

export default function Home() {
  return <MainPage />;
}
