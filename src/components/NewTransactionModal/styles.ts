import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Close = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
  line-height: 0;
`;

export const FormContainer = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 1rem;

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TransactionType = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }
`;

export const Button = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["green-700"]};
    transition: background 0.2s;
  }
`;
