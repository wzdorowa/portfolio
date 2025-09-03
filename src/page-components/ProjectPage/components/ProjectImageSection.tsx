import { FC } from "react";
import { styled } from "@mui/material";
import Image from "next/image";

interface ProjectImageSectionProps {
  src: string;
  alt: string;
}

export const ProjectImageSection: FC<ProjectImageSectionProps> = ({
  src,
  alt,
}) => {
  return (
    <ImageSection>
      <ProjectImage
        src={src}
        alt={alt}
        width={1200}
        height={800}
        sizes="(max-width: 1920px) 100vw, 1250px"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        priority
      />
    </ImageSection>
  );
};

const ImageSection = styled("div")({
  position: "relative",
  flex: 1,
  height: "100vh", // Фиксированная высота экрана
  overflowY: "auto", // Скролл при переполнении

  // Стили для скроллбара
  "&::-webkit-scrollbar": {
    width: 8,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: 4,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "rgba(0, 0, 0, 0.3)",
  },
});

const ProjectImage = styled(Image)({
  borderRadius: 0,
  maxWidth: "100%",
  height: "auto",
});
