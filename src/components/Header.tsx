import logo from '../assets/images/logo.svg'
import MenuModal from './MenuModal'

export default function Header() {
  return (
    <div className='flex justify-between items-center z-0 bg-white py-5 px-8 sm:grid sm:grid-cols-3'>
        
      <div>
        <img src={logo} alt="logo" />  
      </div>

      <div className='flex hidden sm:block '>
        <a href="" className='mr-5 hover:sm:border-b-2 hover:sm:border-green-500 pb-5'>Home</a>
        <a href="" className='mr-5 hover:sm:border-b-2 hover:sm:border-green-500 pb-5'>About</a>
        <a href="" className='mr-5 hover:sm:border-b-2 hover:sm:border-green-500 pb-5'>Contact</a>
        <a href="" className='mr-5 hover:sm:border-b-2 hover:sm:border-green-500 pb-5'>Blog</a>
        <a href="" className='mr-5 hover:sm:border-b-2 hover:sm:border-green-500 pb-5'>Careers</a>
      </div>

      <button className='hidden sm:block text-white font-semibold text-sm bg-gradient-to-r from-green-500 to-blue-500 py-2 px-6 rounded-full sm:place-self-end hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300'>Request Invite</button>

      <MenuModal/>

    </div> 
 
  )
}
