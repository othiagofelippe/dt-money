import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { CardAmount, SummaryCard, CardHeader, SummaryContainer } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <SummaryContainer>
      <SummaryCard>
        <CardHeader>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </CardHeader>

        <CardAmount>R$ 17.400,00</CardAmount>
      </SummaryCard>

      <SummaryCard>
        <CardHeader>
          <span>Saida</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </CardHeader>

        <CardAmount>R$ 17.400,00</CardAmount>
      </SummaryCard>

      <SummaryCard variant="green">
        <CardHeader>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </CardHeader>

        <CardAmount>R$ 17.400,00</CardAmount>
      </SummaryCard>
    </SummaryContainer>
  );
}