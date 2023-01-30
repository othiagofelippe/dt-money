import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  Button,
  Close,
  Content,
  FormContainer,
  Input,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Close>
          <X size={24} />
        </Close>

        <FormContainer action="">
          <Input placeholder="Descrição" required />
          <Input placeholder="Preço" required />
          <Input placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome">
              <ArrowCircleDown size={24} />
              Entrada
            </TransactionTypeButton>
          </TransactionType>

          <Button type="submit">Cadastrar</Button>
        </FormContainer>
      </Content>
    </Dialog.Portal>
  );
}
