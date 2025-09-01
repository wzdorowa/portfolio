export const PROJECT_PAGE_CONSTANTS = {
  DEFAULT_PROJECT_ID: "crypto-landing",
  LAYOUT: {
    MIN_HEIGHT: "100vh",
    BACKGROUND_COLOR: "#ffffff",
  },
  CONTENT: {
    WIDTH: 435,
    GAP: 40,
    FONT_SIZE: 16,
    LINE_HEIGHT: 1.7,
    COLOR: "#000",
  },
  SECTION: {
    TITLE_MARGIN: "20px 0 0 0",
    TEXT_MARGIN_BOTTOM: 8,
  },
  IMAGE: {
    DEFAULT_WIDTH: 1200,
    DEFAULT_HEIGHT: 800,
    SIZES: "(max-width: 1920px) 100vw, 1250px",
  },
  SCROLLBAR: {
    WIDTH: 8,
    BORDER_RADIUS: 4,
    THUMB_COLOR: "rgba(0, 0, 0, 0.2)",
    THUMB_HOVER_COLOR: "rgba(0, 0, 0, 0.3)",
  },
  ERROR_MESSAGES: {
    PROJECT_NOT_FOUND: "Проект не найден",
    PROJECT_NOT_FOUND_DESCRIPTION: "К сожалению, запрашиваемый проект не найден в портфолио.",
  },
} as const;
