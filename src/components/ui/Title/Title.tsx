import { styled, Typography } from "@mui/material";

export const Title = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
  flexShrink: 0, // Не сжимается
  color: "inherit",

  "@media (max-width: 768px)": {
    fontSize: "3.3rem",
  },

  "@media (max-width: 480px)": {
    fontSize: "2.5rem",
  },
});
