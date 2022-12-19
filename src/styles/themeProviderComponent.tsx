import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

type Props = {
  children: React.ReactNode;
};
export function ThemeProviderComponent({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
