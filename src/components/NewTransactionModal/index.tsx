import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import {
  Button,
  Close,
  Content,
  FormContainer,
  Input,
  Overlay,
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
          <Button type="submit">Cadastrar</Button>
        </FormContainer>
      </Content>
    </Dialog.Portal>
  );
}
