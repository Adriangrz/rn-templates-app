import { createTheming } from "@callstack/react-theme-provider";
import theme from "../theme";
import { ThemeType } from "../types/ThemeType";

const { ThemeProvider, withTheme, useTheme } = createTheming<ThemeType>(theme);

export { ThemeProvider, withTheme, useTheme };
