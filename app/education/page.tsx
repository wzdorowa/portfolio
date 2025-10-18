import { EducationPage } from "@/src/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Образование - Вероника Здорова",
  description:
    "Образование и обучение Вероники Здоровой в сфере веб-разработки и дизайна",
};

export default function Education() {
  return <EducationPage />;
}
