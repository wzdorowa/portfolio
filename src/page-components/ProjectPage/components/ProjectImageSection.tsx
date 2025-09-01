import { FC } from "react";
import { styled } from "@mui/material";
import Image from "next/image";
import { PROJECT_PAGE_CONSTANTS } from "../constants";

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
        width={PROJECT_PAGE_CONSTANTS.IMAGE.DEFAULT_WIDTH}
        height={PROJECT_PAGE_CONSTANTS.IMAGE.DEFAULT_HEIGHT}
        sizes={PROJECT_PAGE_CONSTANTS.IMAGE.SIZES}
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
    width: PROJECT_PAGE_CONSTANTS.SCROLLBAR.WIDTH,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: PROJECT_PAGE_CONSTANTS.SCROLLBAR.THUMB_COLOR,
    borderRadius: PROJECT_PAGE_CONSTANTS.SCROLLBAR.BORDER_RADIUS,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: PROJECT_PAGE_CONSTANTS.SCROLLBAR.THUMB_HOVER_COLOR,
  },
});

const ProjectImage = styled(Image)({
  borderRadius: 0,
  maxWidth: "100%",
  height: "auto",
});
