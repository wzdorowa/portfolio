import { FC, useEffect, useRef, useState } from "react";
import { styled } from "@mui/material";
import Image from "next/image";
import { ImageLoader } from "@/src/components/ui";
import { useImageLoadProgress } from "@/src/hooks";

interface ProjectImageSectionProps {
  id: string;
  src: string;
  mobileSrc: string | null;
  alt: string;
}

const backgroundForProject: Partial<Record<string, string>> = {
  default: "transparent",
  "resolve-stats": "#172930",
};
const borderForProject: Partial<Record<string, boolean>> = {
  default: false,
  "resolve-stats": true,
};
const bgImageForProject: Partial<Record<string, null | React.CSSProperties>> = {
  default: null,
  documents: {
    backgroundColor: "#F9FBFE",
    backgroundImage:
      "repeating-radial-gradient( circle at 0 0, transparent 0, #F9FBFE 32px ), repeating-linear-gradient( #F1F5FE55, #F1F5FE );",
  },
};

export const ProjectImageSection: FC<ProjectImageSectionProps> = ({
  id,
  src,
  mobileSrc,
  alt,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const { isLoaded } = useImageLoadProgress(src);
  console.log("id", id);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkScrollable = () => {
      const hasScroll = container.scrollHeight > container.clientHeight;
      const isAtTop = container.scrollTop < 50; // Показываем стрелку только в самом начале
      setShowScrollArrow(hasScroll && isAtTop);
    };

    const handleScroll = () => {
      checkScrollable();
    };

    // Проверяем при загрузке изображения
    const img = container.querySelector("img");
    if (img) {
      if (img.complete) {
        checkScrollable();
      } else {
        img.addEventListener("load", checkScrollable);
      }
    }

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScrollable);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollable);
      if (img) {
        img.removeEventListener("load", checkScrollable);
      }
    };
  }, [isLoaded]);

  const handleArrowClick = () => {
    const container = containerRef.current;
    if (!container) return;

    // Прокручиваем на 70% высоты контейнера
    const scrollAmount = container.clientHeight * 0.7;
    container.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ImageSection ref={containerRef} $id={id}>
        {/* Лоадер изображения */}
        {!isLoaded && <ImageLoader />}

        {isLoaded && (
          <ProjectImage
            $id={id}
            src={src}
            alt={alt}
            width={1200}
            height={800}
            sizes="(max-width: 1920px) 100vw, 1250px"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
            priority
          />
        )}

        {/* Анимированная стрелка для намека на скролл */}
        {showScrollArrow && isLoaded && (
          <ScrollArrow onClick={handleArrowClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3V13M8 13L12 9M8 13L4 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ScrollArrow>
        )}
      </ImageSection>
      <MobileImageSection $id={id}>
        {!isLoaded && <ImageLoader />}

        {isLoaded && (
          <ProjectImage
            $id={id}
            src={mobileSrc || src}
            alt={alt}
            width={1200}
            height={800}
            sizes="(max-width: 1920px) 100vw, 1250px"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
            priority
          />
        )}
      </MobileImageSection>
    </>
  );
};

const ImageSection = styled("div")<{
  $id: string;
}>(({ $id }) => ({
  display: "block",
  position: "relative",
  flex: 1,
  minHeight: "100vh",
  height: "100vh", // Фиксированная высота экрана
  overflowY: "auto", // Скролл при переполнении
  alignContent: "center",
  backgroundColor: backgroundForProject[$id] || "transparent",
  ...(!!bgImageForProject[$id] ? bgImageForProject[$id] : {}),

  "@media (max-width: 1280px)": {
    alignContent: "flex-start",
    minHeight: 1,
    height: "auto",
  },
  "@media (max-width: 768px)": {
    display: "none",
  },

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
}));

const MobileImageSection = styled("div")<{
  $id: string;
}>(({ $id }) => ({
  display: "none",
  position: "relative",
  flex: 1,
  minHeight: 1,
  height: "auto",
  alignContent: "flex-start",
  backgroundColor: backgroundForProject[$id] || "transparent",
  ...(typeof bgImageForProject[$id] === "object" &&
  !Array.isArray(bgImageForProject[$id])
    ? bgImageForProject[$id]
    : {}),

  "@media (max-width: 768px)": {
    display: "block",
  },
}));

const ProjectImage = styled(Image)<{
  $id: string;
}>(({ $id }) => ({
  borderRadius: 0,
  maxWidth: "100%",
  height: "auto",
  borderTop: borderForProject[$id] ? "1px solid #fff" : "none",
  borderBottom: borderForProject[$id] ? "1px solid #fff" : "none",
}));

// Анимированная стрелка для намека на скролл
const ScrollArrow = styled("div")({
  position: "absolute",
  bottom: 24,
  left: "50%",
  transform: "translateX(-50%)",
  color: "rgba(0, 0, 0, 0.4)",
  animation: "bounce 2s infinite",
  cursor: "pointer",
  zIndex: 2,
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    color: "rgba(0, 0, 0, 0.7)",
    transform: "translateX(-50%) scale(1.1)",
  },

  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateX(-50%) translateY(0)",
    },
    "40%": {
      transform: "translateX(-50%) translateY(-6px)",
    },
    "60%": {
      transform: "translateX(-50%) translateY(-3px)",
    },
  },
});
