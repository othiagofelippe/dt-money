import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface Transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionsProviderProps {
  children: ReactNode
}

const STORAGE_KEY = '@dt-money:transactions-1.0.0'

function readStoredTransactions(): Transactions[] {
  const storedTransactions = localStorage.getItem(STORAGE_KEY)

  return storedTransactions ? JSON.parse(storedTransactions) : []
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function fetchTransactions(query?: string) {
    if (import.meta.env.PROD) {
      const storedTransactions = readStoredTransactions()

      const filteredTransactions = query
        ? storedTransactions.filter((transaction) =>
            transaction.description
              .toLowerCase()
              .includes(query.toLowerCase()),
          )
        : storedTransactions

      setTransactions(filteredTransactions)
      return
    }

    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'asc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, category, price, type } = data

    if (import.meta.env.PROD) {
      const newTransaction: Transactions = {
        id: Date.now(),
        description,
        category,
        price,
        type,
        createdAt: new Date().toISOString(),
      }

      const updatedTransactions = [newTransaction, ...readStoredTransactions()]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTransactions))
      setTransactions((state) => [newTransaction, ...state])
      return
    }

    const response = await api.post('/transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
