import { Link } from 'react-router'
import { User, ShoppingCart, MapPin, Search } from 'lucide-react'
import { useState, type ChangeEvent } from 'react'

interface countryData {
  id: string
  name: string
  code: string
}

const MainNav = () => {
  const [country, setCounty] = useState({ id: '1', name: 'India', code: 'IN' })
  const countrySet: countryData[] = [
    { id: '1', name: 'India', code: 'IN' },
    { id: '2', name: 'Dubai', code: 'AE' },
    { id: '3', name: 'Pakistan', code: 'PK' },
  ]

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const selectedValue = e.target.value

    const selectedData = countrySet.find((item) => item.id === selectedValue)
    console.log(selectedData)
    if (selectedData) setCounty(selectedData)
  }

  return (
    <nav className='flex justify-between items-center px-25 py-5 font-inter'>
      <Link to={'/'}>E_mox</Link>

      <div className='mx-20 flex-1 relative'>
        <input
          type='text'
          className='bg-gray-50/10 rounded-full py-2 px-4 text-sm w-full outline outline-gray-100 focus:outline-gray-300'
          placeholder='Search for any product or brand'
        />
        <div className='absolute bg-blue-700 text-white p-1 rounded-full top-1/2 -right-2 -translate-1/2 cursor-pointer'>
          <Search size={20} />
        </div>
      </div>

      <div className='flex gap-5 space-x-5'>
        <div className='space-x-5 flex'>
          <div className='flex gap-2 items-center'>
            <MapPin className='text-gray-400 hover:text-gray-600' />
            <div>
              <p className='text-xs text-gray-400'>
                Delivering to {country.name}
              </p>
              <h3 className='font-bold text-sm'>Update Location</h3>
            </div>
          </div>
          <div className='flex gap-2 items-center ml-3'>
            <div className='w-6 h-6 overflow-hidden rounded-full'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnLj4blRZibvWZ0ADC3FcuUyFrDYKg0rIMw&s'
                alt=''
              />
            </div>
            <div>
              <select
                value={country.code}
                className='text-sm'
                onChange={handleChange}
              >
                {countrySet.map((items) => (
                  <option value={items.id}>{items.code}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <Link to={'/cart'} className='flex gap-2'>
            <div className='relative not-even:text-gray-400'>
              <ShoppingCart
                size={24}
                className='hover:border-gray-400 hover:text-gray-600'
              />
              <span className='absolute w-4 h-4 bg-blue-700 text-white flex items-center justify-center text-xs rounded-full -top-1.5 -right-1'>
                0
              </span>
            </div>
            <p className='text-sm'>Cart</p>
          </Link>
          <Link to={'/account'} className='flex gap-2 items-center'>
            <div className='border border-gray-100 text-gray-400 hover:border-gray-400 hover:text-gray-600 rounded-full p-1'>
              <User size={20} />
            </div>
            <p className='text-sm'>Sign In</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
