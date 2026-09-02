const ATOM_ONE_LIGHT_THEME_COLOR = "#fafafa";
const ATOM_ONE_DARK_THEME_COLOR = "#282c34";

export const APPEARANCES = ["light", "system", "dark"];

const PREFERRED_APPEARANCE_KEY = "preferred-appearance";

export function applyTheme(preferredAppearance: string): void {
  const metaThemeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );
  const resolvedAppearance =
    preferredAppearance === "system"
      ? getSystemAppearance()
      : preferredAppearance;

  document.documentElement.setAttribute("data-theme", resolvedAppearance);

  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      resolvedAppearance === "dark"
        ? ATOM_ONE_DARK_THEME_COLOR
        : ATOM_ONE_LIGHT_THEME_COLOR,
    );
  }

  // Sync the desktop radiogroup's visual active state. The matching
  // aria-checked + tabindex updates live in Header.astro, which owns
  // the radiogroup's interaction model; this hook only paints .active
  // so the highlight survives a system-preference change while on "system".
  document.querySelectorAll<HTMLButtonElement>(".theme-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-theme") === preferredAppearance;

    btn.classList.toggle("active", isActive);
  });
}

export function getStoredPreferredAppearance(): string {
  try {
    return localStorage.getItem(PREFERRED_APPEARANCE_KEY) ?? "system";
  } catch {
    return "system";
  }
}

export function setStoredPreferredAppearance(pref: string): void {
  try {
    localStorage.setItem(PREFERRED_APPEARANCE_KEY, pref);
  } catch {
    // localStorage unavailable
  }
}

function getSystemAppearance(): string {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
