import { Link, NavLink } from "react-router-dom"
import { navbarLinks } from "../../../constants/links"
import { HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi"
import { FaBarsStaggered } from "react-icons/fa6"
import Logo from "../logo/Logo"

const Navbar = () => {
  return (
    <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">
       {/* Logo */} 
        <Logo />
       <nav className="space-x-5 hidden md:flex">
            {
                navbarLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.href}
                        className={({isActive}) => `${isActive ? 'text-cyan-600 underline' : ''} transition-all duration-300 font-medium hover:text-cyan-600 hover:underline`}
                    >
                        {link.title}
                    </NavLink>
                ))
            }
       </nav>

       <div className="flex gap-5 items-center">
        <button>
            <HiOutlineSearch size={25} />
        </button>

        <div className="relative">
            {/* User Nav */}
            <Link to='/account' className="border-2 border-slate-700 w-9 h-9 rounded-full grid place-items-center text-lg font-bold">S</Link>
        </div>

        <button className="relative">
            <span className="absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full">0</span>
            <HiOutlineShoppingCart size={25} />
        </button>
       </div>

       <button className="md:hidden">
            <FaBarsStaggered size={25} />
       </button>
    </header>
  )
}

export default Navbar
