import React from "react";
import WebFont from "webfontloader";

type FontsLoader = {
  loadFonts(fonts: string[]): void;
};

export function useFontsLoader(webFonts: string[]): FontsLoader {
  const [loaded, setLoaded] = React.useState(webFonts);

  function loadFonts(fonts: string[]) {
    setLoaded([...new Set([...loaded, ...fonts])]);
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: loaded,
      },
    });
  }, [loaded]);

  return { loadFonts };
}
