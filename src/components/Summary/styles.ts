import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
background-color: ${(props) => props.theme["gray-600"]};
border-radius: 6px;
padding: 2rem;

  ${(props) =>
    props.variant === "green" &&
    css`
      background-color: ${(props) => props.theme["green-700"]};
    `}
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme['gray-300']};
`

export const CardAmount = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.white};

  margin-top: 1rem;
`