import {
  createTheming,
  type ThemingType,
} from "@callstack/react-theme-provider";
import theme from "../theme";
import { ThemeType } from "../types/ThemeType";

const { ThemeProvider, withTheme, useTheme }: ThemingType<ThemeType> =
  createTheming(theme);

export { ThemeProvider, withTheme, useTheme };
