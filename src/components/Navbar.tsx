import { Link } from 'react-router'
import { User, Heart, ShoppingCart } from 'lucide-react'

interface navItem {
  id: number
  name: string
  path: string
}
const Navbar = () => {
  const navItems: navItem[] = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Collections', path: '/about' },
  ]
  return (
    <nav className='flex justify-between items-center px-25 py-5 font-inter'>
      <Link to={'/'}>E-Comm.</Link>

      <div className='flex gap-5 space-x-5'>
        <ul className='flex gap-5'>
          {navItems.map((items: navItem) => (
            <li key={items.id}>
              <Link to={items.path}>{items.name}</Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-3'>
          <Link to={'/account'}>
            <User />
          </Link>
          <Link to={'/wishlist'}>
            <Heart />
          </Link>
          <Link to={'/cart'} className='relative'>
            <ShoppingCart />
            <span className='absolute w-4 h-4 bg-amber-700 text-slate-50 flex items-center justify-center text-xs rounded-full -top-3 right-0'>
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
