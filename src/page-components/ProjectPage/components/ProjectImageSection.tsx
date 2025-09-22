import { FC, useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);

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
    const img = container.querySelector('img');
    if (img) {
      if (img.complete) {
        checkScrollable();
      } else {
        img.addEventListener('load', checkScrollable);
      }
    }

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScrollable);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollable);
      if (img) {
        img.removeEventListener('load', checkScrollable);
      }
    };
  }, []);

  const handleArrowClick = () => {
    const container = containerRef.current;
    if (!container) return;
    
    // Прокручиваем на 70% высоты контейнера
    const scrollAmount = container.clientHeight * 0.7;
    container.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <ImageSection ref={containerRef}>
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
      
      {/* Анимированная стрелка для намека на скролл */}
      {showScrollArrow && (
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
