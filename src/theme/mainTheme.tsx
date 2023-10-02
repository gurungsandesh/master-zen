import React from "react";
import { ThemeProvider } from "styled-components";

type themePropsModel = {
  children: React.ReactNode;
};

export type ThemeProviderModel = {
  fonts: {
    lexend: string;
  };
  colors: {
    darkBackground: string;
    whiteFont: string;
    yellowFont: string;
  };
  breakPoints: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };
};

const Theme: ThemeProviderModel = {
  fonts: {
    lexend: "'Lexend', sans-serif",
  },
  colors: {
    darkBackground: "#2f3640",
    whiteFont: "#ffffff",
    yellowFont: "#CAB82B",
  },
  breakPoints: {
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
  },
};

const MainTheme = ({ children }: themePropsModel) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default MainTheme;
