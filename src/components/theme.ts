import styled, { ThemedStyledInterface } from "styled-components";
import { Mode } from "../types";

export const theme = {
  mode: "light" as Mode,
  light: {
    id: "T_001",
    name: "Light Mode",
    colors: {
      body: "#FFFFFF",
      text: "#000000",
      button: {
        text: "#FFFFFF",
        background: "#000000",
      },
      link: {
        text: "teal",
        opacity: 1,
      },
    },
    font: "Ubuntu",
    webFonts: ["Ubuntu"],
  },
  dark: {
    id: "T_000",
    name: "Dark Mode",
    colors: {
      body: "#9be7ff",
      text: "#0d47a1",
      button: {
        text: "#ffffff",
        background: "#0d47a1",
      },
      link: {
        text: "#0d47a1",
        opacity: 0.8,
      },
    },
    font: "Poppins, Verdana, sans-serif",
    webFonts: ["Poppins"],
  },
};

export type Theme = typeof theme;

export default styled as ThemedStyledInterface<Theme>;
