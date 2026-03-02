export const CONSENT_KEY = "rp_cookie_consent_v1";
export const CONSENT_UPDATED_EVENT = "rp-consent-updated";
export const OPEN_COOKIE_SETTINGS_EVENT = "rp-open-cookie-settings";

export type ConsentChoice = "essential" | "all";

export const getStoredConsent = (): ConsentChoice | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "essential" || value === "all") {
      return value;
    }
  } catch {
    return null;
  }

  return null;
};

export const setStoredConsent = (choice: ConsentChoice): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Ignore storage errors to keep website functional.
  }

  window.dispatchEvent(new Event(CONSENT_UPDATED_EVENT));
};

export const hasOptionalConsent = (): boolean => getStoredConsent() === "all";

export const openCookieSettings = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
};
