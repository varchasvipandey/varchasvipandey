import { pianoKeys, darkHarmonica, bharat } from '../themes';
import { Theme } from '../themes/interface';
import Cookies from 'js-cookie';

import { LOCAL_DB_THEME_ID } from './constants';

export const themesList = [pianoKeys, darkHarmonica, bharat];

export const getSelectedTheme = (): Theme => {
  // ! to be fixed
  /*   if (typeof window !== 'undefined') {
    const selectedThemeId: string | undefined = Cookies.get(LOCAL_DB_THEME_ID);

    if (selectedThemeId) {
      const selectedTheme = themesList.filter((theme) => +theme.id === +selectedThemeId);
      if (selectedTheme.length) return selectedTheme[0];
    }
  } */

  return themesList[2]; // return default theme (bharat is default now)
};

export const selectTheme = (themeId: number): boolean => {
  if (typeof window !== 'undefined') {
    if (!isNaN(+themeId)) {
      Cookies.set(LOCAL_DB_THEME_ID, themeId.toString());
      return true;
    }
  }

  return false;
};

export const selectNextTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const selectedThemeId: string | undefined = Cookies.get(LOCAL_DB_THEME_ID);

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
