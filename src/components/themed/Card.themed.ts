import styled from "../theme";

export const CardThemed = styled.div({
  borderRadius: "2px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.125)",
});

CardThemed.defaultProps = {
  style: {
    padding: "2px",
    background: "white",
  },
};
