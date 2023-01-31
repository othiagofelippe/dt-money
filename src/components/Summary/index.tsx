import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import {
  CardAmount,
  SummaryCard,
  CardHeader,
  SummaryContainer,
} from "./styles";

export function Summary() {
  const summary  = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <CardHeader>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </CardHeader>

        <CardAmount>{priceFormatter.format(summary.income)}</CardAmount>
      </SummaryCard>

      <SummaryCard>
        <CardHeader>
          <span>Saida</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </CardHeader>

        <CardAmount>{priceFormatter.format(summary.outcome)}</CardAmount>
      </SummaryCard>

      <SummaryCard variant="green">
        <CardHeader>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </CardHeader>

        <CardAmount>
          {priceFormatter.format(summary.total)}
        </CardAmount>
      </SummaryCard>
    </SummaryContainer>
  );
}
