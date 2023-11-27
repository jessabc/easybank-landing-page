import bgIntroMob from '../assets/images/bg-intro-mobile.svg'
import bgIntroDesktop from '../assets/images/bg-intro-desktop.svg'
import mockups from '../assets/images/image-mockups.png'

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row items-end mb-8'>
        
      <div className='relative  sm:order-2 -z-10 sm:w-2/3'>
        <img src={bgIntroMob} alt="background" className='sm:hidden'/>
        <img src={bgIntroDesktop} alt="background" className='hidden sm:flex relative -right-8 -top-10 '/>
        <img src={mockups} alt="mockups" className='absolute -top-28 sm:-top-24 sm:-right-20'/>
      </div>

      <div className='sm:order-1 sm:w-1/2 flex flex-col gap-3 items-center gap-5 mx-8 '>
        <h1 className='text-slate-700 font-semibold text-4xl text-center sm:text-left'>Next generation digital banking</h1>
        <p className='text-slate-500 text-sm text-center sm:text-left'>Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>
        <button  className='text-white font-semibold text-sm bg-gradient-to-r from-green-500 to-blue-500 py-2 px-6 rounded-full sm:mr-auto hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300'> Request Invite</button>
      </div>

    </div>
  )
}
