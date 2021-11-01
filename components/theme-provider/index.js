import { createTheming } from "@callstack/react-theme-provider";
import { Base } from "../themes";
import { Dark } from "../themes";

const { ThemeProvider, withTheme, useTheme } = createTheming(Base, Dark);

export { ThemeProvider, withTheme, useTheme };
