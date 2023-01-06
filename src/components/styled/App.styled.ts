import styled from "../theme";

export const AppStyled = styled.div`
  font-family: ${({ theme }) => theme[theme.mode].font};
`;
