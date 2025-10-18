"use client";

import { FC } from "react";
import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ImageLoader } from "@/src/components/ui";
import { useImageLoadProgress } from "@/src/hooks";

interface PortfolioCardProps {
  id: string | number;
  image: string;
  alt: string;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({ id, image, alt }) => {
  const { isLoaded } = useImageLoadProgress(image);

  return (
    <Link href={`/portfolio/${id}`} passHref>
      <CardContainer>
        {/* Лоадер изображения */}
        {!isLoaded && <ImageLoader />}

        <CardImage
          src={image}
          alt={alt}
          width={400}
          height={315}
          sizes="(max-width: 1920px) 50vw, (max-width: 1440px) 100vw, 33vw"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </CardContainer>
    </Link>
  );
};

const CardContainer = styled("div")({
  position: "relative",
  height: 315,
  overflow: "hidden",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  display: "block",
  textDecoration: "none",
  backgroundColor: "#f5f5f5",

  "&:hover": {
    transform: "scale(1.05)",
  },
});

const CardImage = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
});
