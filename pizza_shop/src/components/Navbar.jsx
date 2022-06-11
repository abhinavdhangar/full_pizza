/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState ,useContext, useEffect} from 'react'
import { Popover, Transition } from '@headlessui/react'
import LoadingBar from 'react-top-loading-bar'
import Testing from './Avatar/Cart.avatar'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'

import { NavLink } from 'react-router-dom'
import jsCookie from 'js-cookie'
import Carr from './Avatar/Cart_avatar2'
import { CartDialogContext } from '../../context/Cartdialogcontext'
import { Productcontext } from '../../context/Productcontext'


const navigation = [
  { name: 'Product', href: '/product' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'About', href: '/about' },
  { name: 'Register', href: '/register' },
  { name: 'Log In', href: "/login" }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  const {setopen,open} = useContext(CartDialogContext)
  const {fetchCartSubTotal} = useContext(Productcontext)
  let statementt = jsCookie.get("jwt")?true:false
  const [progress, setProgress] = useState(0)
  // useEffect(()=>{fetchCartSubTotal()},[open])
  function LoadingStatus() {
 setopen(true)
    setProgress(20)
    setTimeout(() => {
      setProgress(50)
    }, 50);
    setTimeout(() => {
      setProgress(100)
    }, 150);
  }
  return (

    <Popover className='z-10'>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="fixed z-10 pb-4 w-screen bg-white pt-6  md:mx-0 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  alt="Workflow"
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                />
              </a>
              <div className=" flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">

            <NavLink key='product' to='/product' onClick={LoadingStatus} className={({ isActive }) => (isActive ? "font-medium text-indigo-600 hover:text-indigo-500" : "font-medium text-gray-500 hover:text-gray-900")} >
             products
            </NavLink>
            <NavLink key='blogs' to='/blogs' onClick={LoadingStatus} className={({ isActive }) => (isActive ? "font-medium text-indigo-600 hover:text-indigo-500" : "font-medium text-gray-500 hover:text-gray-900")} >
             Blogs
            </NavLink>
            <NavLink key='about' to='/about' onClick={LoadingStatus} className={({ isActive }) => (isActive ? "font-medium text-indigo-600 hover:text-indigo-500" : "font-medium text-gray-500 hover:text-gray-900")} >
             About
            </NavLink>
            <NavLink key='cart' to='cart' onClick={LoadingStatus} className={({ isActive }) => (isActive ? "font-medium text-indigo-600 hover:text-indigo-500" : "font-medium text-gray-500 hover:text-gray-900")} >
              <Carr/>
            </NavLink>
            {!statementt&&<NavLink key='login' to='/login' onClick={LoadingStatus} className={({ isActive }) => (isActive ? "font-medium text-indigo-600 hover:text-indigo-500" : "font-medium text-gray-500 hover:text-gray-900")} >
             Login
            </NavLink>}
            <NavLink key='logout' to='logout' onClick={LoadingStatus} className={({ isActive }) => (isActive ? "font-medium text-indigo-600 hover:text-indigo-500" : "font-medium text-gray-500 hover:text-gray-900")} >
              logout
            </NavLink>
           
           {!statementt&& <NavLink key='register' to='register' onClick={LoadingStatus} className={({ isActive }) => (isActive ? "font-medium text-indigo-600 hover:text-indigo-500" : "font-medium text-gray-500 hover:text-gray-900")} >
              register
            </NavLink>}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
