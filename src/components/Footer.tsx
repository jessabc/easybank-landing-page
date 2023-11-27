import logo from '../assets/images/logo-footer.svg'
import facebookIcon from '../assets/images/icon-facebook.svg'
import youtubeIcon from '../assets/images/icon-youtube.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg'
import instagramIcon from '../assets/images/icon-instagram.svg'

export default function Footer() {
  return (
    <div className='bg-slate-700 flex flex-col items-center gap-8 pt-8 sm:flex-row sm:px-8 sm:justify-between sm:items-start'>

      <div className='flex flex-col justify-center items-center gap-5 sm:items-start sm:gap-8'>
        <div>
          <img src={logo} alt="" className=''/> 
        </div>
        <div className='flex gap-5 '>
          <img src={facebookIcon} alt="facebook icon" />
          <img src={youtubeIcon} alt="youtube icon" />
          <img src={twitterIcon} alt="twitter icon" />
          <img src={pinterestIcon} alt="pinterest icon" />
          <img src={instagramIcon} alt="instagram icon" />
        </div>
      </div>
       
      <div className='flex flex-col text-slate-300 text-sm gap-1 sm:gap-8 sm:flex-row'>
        <div className='flex flex-col gap-2'>
          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>
          <div className='flex flex-col gap-2'>
            <a href="">Careers</a>
            <a href="">Support</a>
            <a href="">Privacy Policy</a>
          </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-5 sm:items-end'>
        <button className='text-white font-semibold text-sm bg-gradient-to-r from-green-500 to-blue-500 py-2 px-6 rounded-full hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300'>Request Invite</button>
        <p className='text-slate-300 text-sm pb-8'>© Easybank. All Rights Reserved</p>
      </div>
        
    </div>
  )
}
