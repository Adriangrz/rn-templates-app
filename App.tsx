import React from "react";

import { KeyboardListView } from "./components";
import { ThemeProvider } from "./providers/ThemeProvider";

export default function App() {
  return (
    // @ts-ignore
    <ThemeProvider>
      <KeyboardListView />
    </ThemeProvider>
  );
}
