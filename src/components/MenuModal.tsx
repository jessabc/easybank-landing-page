import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import iconHamburger from '../assets/images/icon-hamburger.svg'
import iconClose from '../assets/images/icon-close.svg'

export default function MenuModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <div className="sm:invisible">
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className="cursor-pointer"
        >
          <img src={isOpen ? iconClose : iconHamburger} alt="" className=''/> 
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start mt-16 justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6  shadow-xl transition-all md:invisible ">
                  
                  <div className="my-5">
                    <div className='flex flex-col gap-2 text-slate-700 font-semibold '>
                      <a href="">Home</a>
                      <a href="">About</a>
                      <a href="">Contact</a>
                      <a href="">Blog</a>
                      <a href="">Careers</a>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
