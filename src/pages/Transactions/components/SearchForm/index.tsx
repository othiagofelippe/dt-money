import { MagnifyingGlass } from "phosphor-react";
import { Button, Input, SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting }} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <Input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <Button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </SearchFormContainer>
  );
}
