import { Montserrat as Montserrat_Font } from "next/font/google";

export const Montserrat = Montserrat_Font({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});
