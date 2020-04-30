import { useEffect, useState } from 'react';

export type Theme = 'Light' | 'Dark';

const THEME_LOCAL_STORAGE_KEY = 'v1.theme';

const callbacks: Array<(theme: Theme) => void> = [];

let currentTheme: Theme =
  localStorage.getItem(THEME_LOCAL_STORAGE_KEY) === 'Dark' ? 'Dark' : 'Light';

export default function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setThemeLocal] = useState(currentTheme);

  useEffect(() => {
    const onChangeTheme = (theme: Theme) => {
      setThemeLocal(theme);
    };

    addCallback(onChangeTheme);

    return () => removeCallback(onChangeTheme);
  }, []);

  return [theme, setThemeGlobal];
}

export function getThemeClassName(theme: Theme): string {
  switch (theme) {
    case 'Light':
      return 'Theme-Light';

    case 'Dark':
      return 'Theme-Dark';
  }
}

export function toggleTheme(theme: Theme): Theme {
  switch (theme) {
    case 'Light':
      return 'Dark';

    case 'Dark':
      return 'Light';
  }
}

function setThemeGlobal(theme: Theme) {
  currentTheme = theme;
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);

  for (const cb of callbacks) {
    cb(theme);
  }
}

function addCallback(callback: (theme: Theme) => void) {
  callbacks.push(callback);
}

function removeCallback(callback: (theme: Theme) => void) {
  const index = callbacks.indexOf(callback);

  if (index < 0) {
    return;
  }

  callbacks.splice(index, 1);
}
