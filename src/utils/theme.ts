const ATOM_ONE_LIGHT_THEME_COLOR = "#fafafa";
const ATOM_ONE_DARK_THEME_COLOR = "#282c34";

export const APPEARANCES = ["light", "system", "dark"];
export const PREFERRED_APPEARANCE_KEY = "preferred-appearance";

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

  document.querySelectorAll<HTMLButtonElement>(".theme-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-theme") === preferredAppearance;

    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-checked", String(isActive));
  });
}

export function getStoredPreferredAppearance(): string {
  try {
    return localStorage.getItem(PREFERRED_APPEARANCE_KEY) ?? "system";
  } catch {
    return "system";
  }
}

export function getSystemAppearance(): string {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function setStoredPreferredAppearance(pref: string): void {
  try {
    localStorage.setItem(PREFERRED_APPEARANCE_KEY, pref);
  } catch {
    // localStorage unavailable
  }
}
