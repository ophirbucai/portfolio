import styled from "../theme";

export const LinkStyled = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 25px 10px 20px;
  cursor: pointer;
  color: ${({ theme }) => theme[theme.mode].colors.button.text};
  position: relative;
  &:after {
    display: block;
    content: "";
    background: linear-gradient(to bottom, #00acee, #0072e0);
    border-radius: 1em;
    z-index: -1;
    position: absolute;
    inset: 0;
    transition: inset 80ms ease-in-out, opacity 40ms linear, filter 20ms linear;
    filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2));
  }
  &:hover:after {
    top: -2px;
    bottom: -2px;
    left: 2px;
    right: 2px;
    filter: drop-shadow(0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3));
  }
`;
