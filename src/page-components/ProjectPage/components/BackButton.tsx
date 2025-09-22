import { FC } from "react";
import { styled } from "@mui/material";
import BackButtonIcon from "@/public/icons/BackButtonIcon";

interface BackButtonProps {
  onClick?: () => void;
  "aria-label"?: string;
}

export const BackButton: FC<BackButtonProps> = ({
  onClick,
  "aria-label": ariaLabel = "Вернуться назад",
}) => {
  return (
    <BackButtonContainer onClick={onClick} aria-label={ariaLabel}>
      <BackButtonIcon />
    </BackButtonContainer>
  );
};

const BackButtonContainer = styled("button")({
  background: "none",
  border: "none",
  cursor: "pointer",
  flexShrink: 0, // Не сжимается
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "inherit",
  width: 64,
  height: 64,

  "&:hover": {
    opacity: 0.5,
    transition: "opacity 0.2s ease",
  },

  "&:active": {
    transform: "scale(0.95)",
    transition: "transform 0.1s ease",
  },

  "@media (max-width: 768px)": {
    width: 44,
    height: 44,
  },
});
