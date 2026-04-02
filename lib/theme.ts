/**
 * Site palette — single source of truth for UI accents.
 * Keep `app/globals.css` `:root` `--color-primary` / `--color-secondary` in sync (lowercase hex).
 */
export const THEME = {
  primary: "#1E5A8E",
  secondary: "#2EA6D5",
} as const;

/** Light tints for backgrounds (derived from primary) */
export const THEME_BG = {
  primarySoft: "rgba(30, 90, 142, 0.06)",
  primaryBorder: "rgba(30, 90, 142, 0.15)",
} as const;
