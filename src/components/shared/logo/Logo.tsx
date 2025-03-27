import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className="text-2xl font-bold tracking-tighter transition-all">
        {/* Logo lg */}
        <p className='hidden lg:block'>
            Ecommerce 
            <span className='text-cyan-600'>Celulares</span>
        </p>
        {/* Logo sm */}
        <p className='flex text-4xl lg:hidden'>
            <span className='-skew-x-6'>E</span>
            <span className='text-cyan-600 skew-x-6'>C</span>
        </p>
    </Link>
  )
}

export default Logo
