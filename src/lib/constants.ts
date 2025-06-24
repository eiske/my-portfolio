// Layout constants
export const LAYOUT = {
  MAIN_MARGIN_BOTTOM: "600px",
  MAIN_MARGIN_BOTTOM_MD: "100vh",
  MIN_HEIGHT: "94vh",
  FOOTER_HEIGHT: "600px",
  FOOTER_HEIGHT_MD: "screen"
} as const;

// Colors
export const COLORS = {
  BACKGROUND_DARK: "#07020D",
  TEXT_LIGHT: "#F1E9DB", 
  TEXT_LIGHT_BG: "#F1E9DB",
  PARTICLE_WHITE: "#ffffff",
  PARTICLE_BLUE: "#525bda"
} as const;

// Animation settings
export const ANIMATION = {
  PARTICLE_COUNT: 200,
  PARTICLE_SPREAD: 10,
  PARTICLE_SPEED: 0.4,
  PARTICLE_BASE_SIZE: 150,
  PIXEL_GRID_SIZE: 12,
  PIXEL_ANIMATION_DURATION: 0.4
} as const; 