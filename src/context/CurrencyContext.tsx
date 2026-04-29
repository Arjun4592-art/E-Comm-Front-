import React, { createContext, useContext, useState, type ReactNode } from 'react'

// 1. Define the shape of the data
interface CurrencyState {
  code: string
  symbol: string
  rate: number
}

// 2. Define the shape of the context (data + the function to update it)
interface CurrencyContextType {
  currency: CurrencyState
  setCurrency: (newCurrency: CurrencyState) => void
}

// 3. Create the Context with an initial undefined value
const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
)

// 4. Create the Provider Component
export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currency, setCurrency] = useState<CurrencyState>({
    code: 'USD',
    symbol: '$',
    rate: 1,
  })

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

// 5. Create a Custom Hook for easy access
export const useCurrency = () => {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
