/**
 * Color palette with WCAG accessibility ratings on white (#ffffff) background.
 * Contrast ratios per WCAG 2.1 relative luminance formula.
 */
export const colors = {
  /** #111111 — ~16.1:1 contrast on white (WCAG AAA) */
  textPrimary: '#111111',
  /** #555555 — ~7.5:1 contrast on white (WCAG AAA ≥7:1) */
  footerText: '#555555',
  /** #ffffff — page background */
  bgPrimary: '#ffffff',
} as const;
