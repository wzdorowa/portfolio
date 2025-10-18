import { FC, ReactNode, RefObject } from "react";
import { styled, Typography } from "@mui/material";
import { TextColor } from "@/src/types/common";

interface ScrollableTextProps {
  children: ReactNode;
  scrollRef: RefObject<HTMLDivElement>;
  textColor?: TextColor;
}

export const ScrollableText: FC<ScrollableTextProps> = ({
  children,
  scrollRef,
  textColor = "black",
}) => (
  <StyledText ref={scrollRef} $textColor={textColor}>
    {typeof children === "string" ? (
      <Typography variant="body1">{children}</Typography>
    ) : (
      children
    )}
  </StyledText>
);

const StyledText = styled("div")<{ $textColor: TextColor }>(
  ({ $textColor }) => ({
    height: "100%", // Занимает всю высоту ScrollContainer
    width: "100%",
    overflowY: "auto",
    paddingRight: 12,
    color: "inherit",

    // Стили для скроллбара с адаптацией к цвету текста
    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background:
        $textColor === "white"
          ? "rgba(255, 255, 255, 0.3)"
          : "rgba(0, 0, 0, 0.2)",
      borderRadius: 2,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background:
        $textColor === "white"
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(0, 0, 0, 0.3)",
    },

    // Стили для вложенного контента
    "& .MuiTypography-body1": {
      margin: 0,
      lineHeight: 1.7,
    },

    // Стили для сложного контента (ProjectPage)
    "& > div": {
      width: "100%",
    },
  })
);
