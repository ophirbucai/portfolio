import React from "react";
import { AppStyled } from "./components";
import { Projects } from "./Projects/Projects.comp";
import { ThemeProvider } from "styled-components";
import { useFontsLoader } from "./useFontsLoader";
import { Mode } from "./types";
import { theme } from "./components/theme";

function App() {
  const [mode, setMode] = React.useState<Mode>(theme.mode);
  const { loadFonts } = useFontsLoader(theme[theme.mode].webFonts);

  function selectMode(selected: Mode) {
    setMode(selected);
    loadFonts(theme[selected].webFonts);
  }

  return (
    <ThemeProvider theme={{ ...theme, mode }}>
      <AppStyled>
        <button onClick={() => selectMode("dark")}>🌜</button>
        <button onClick={() => selectMode("light")}>💡</button>
        <Projects />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
