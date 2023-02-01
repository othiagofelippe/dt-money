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
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionsFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionsFormInputs = z.infer<typeof newTransactionsFormSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleCreateNewTransactions(data: NewTransactionsFormInputs) {
    const { description, category, price, type } = data

    createTransaction({
      description,
      category,
      price,
      type,
    });

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Close>
          <X size={24} />
        </Close>

        <FormContainer onSubmit={handleSubmit(handleCreateNewTransactions)}>
          <Input
            placeholder="Descrição"
            required
            {...register("description")}
          />

          <Input
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <Input placeholder="Categoria" required {...register("category")} />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Entrada
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </FormContainer>
      </Content>
    </Dialog.Portal>
  );
}
