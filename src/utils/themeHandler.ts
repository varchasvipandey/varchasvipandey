import { pianoKeys, darkHarmonica } from '../themes';
import { Theme } from '../themes/interface';

import { LOCAL_DB_THEME_ID } from './constants';

export const themesList = [pianoKeys, darkHarmonica];

export const getSelectedTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const selectedThemeId: string | null = localStorage.getItem(LOCAL_DB_THEME_ID);

    if (selectedThemeId) {
      const selectedTheme = themesList.filter((theme) => +theme.id === +selectedThemeId);
      if (selectedTheme.length) return selectedTheme[0];
    }
  }

  return themesList[0]; // return default theme
};

export const selectTheme = (themeId: number): boolean => {
  if (typeof window !== 'undefined') {
    if (!isNaN(+themeId)) {
      localStorage.setItem(LOCAL_DB_THEME_ID, themeId.toString());
      return true;
    }
  }

  return false;
};

export const selectNextTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const selectedThemeId: string | null = localStorage.getItem(LOCAL_DB_THEME_ID);

    // if no theme data in local, set theme id to default + 1 = 1
    const nextThemeId = selectedThemeId ? +selectedThemeId + 1 : 1;

    const nextTheme = themesList.filter((theme) => theme.id === nextThemeId);

    if (nextTheme.length) {
      selectTheme(nextThemeId);
      return nextTheme[0];
    }
  }

  // Keep default selected
  selectTheme(0);
  return themesList[0];
};
