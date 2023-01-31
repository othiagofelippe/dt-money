import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import {
  CardAmount,
  SummaryCard,
  CardHeader,
  SummaryContainer,
} from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <CardHeader>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </CardHeader>

        <CardAmount>{sumary.income}</CardAmount>
      </SummaryCard>

      <SummaryCard>
        <CardHeader>
          <span>Saida</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </CardHeader>

        <CardAmount>{sumary.outcome}</CardAmount>
      </SummaryCard>

      <SummaryCard variant="green">
        <CardHeader>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </CardHeader>

        <CardAmount>{sumary.total}</CardAmount>
      </SummaryCard>
    </SummaryContainer>
  );
}
