import React from "react";
import WebFont from "webfontloader";

type LoadFonts = (fonts: string[]) => void;

export function useFontsLoader(webFonts: string[]): [LoadFonts] {
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

  return [loadFonts];
}
