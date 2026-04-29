import React, { type ChangeEvent } from 'react'
import { useCurrency } from '../../context/CurrencyContext'
const supportedCurrencies = [
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'INR', symbol: '₹', rate: 83.5 },
]
const Currency = () => {
  const { currency, setCurrency } = useCurrency()

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    const selectedCurrency = supportedCurrencies.find(
      (items) => items.code === selectedValue,
    )
    if (selectedCurrency) setCurrency(selectedCurrency)
  }

  return (
    <React.Fragment>
      <select
        value={currency.code}
        onChange={handleSelectChange}
        className='border p-2 rounded'
      >
        {supportedCurrencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code}
          </option>
        ))}
      </select>
    </React.Fragment>
  )
}

export default Currency
