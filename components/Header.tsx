import { useRouter } from 'next/router'
import {
  SearchIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  XCircleIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'
import Submenu from './Submenu'
import Menu from "./Menu"

export default function Header() {
  const router = useRouter()
const [menu,setMenu]=useState(false)

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex  max-w-6xl items-center justify-between lg:mx-auto">
        <div
          onClick={() => router.push('/')}
          className="flex flex-col items-center h-15 min-w-4 max-w-2xl flex-none cursor-pointer"
        >
          <div
          className='flex items-center'>
            <img src="./CPACE_icon.png" alt="logo" />
            <h1 className="font-right md:text-2xl">
              <span className="text-red-900 md:text-3xl">C</span>{' '}
              <span className="text-blue-900 md:text-3xl">PACE</span>{' '}
            </h1>
          </div>
          <h3 className='text-xs font-bold md:text-xl'>Comercial Property Assessed Clean Energy</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className="min-w-60 max-w-xs">
            <div className="relative mt-1 rounded-md p-3 ">
              <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="block w-full rounded-md border-gray-300 bg-gray-50 
            pl-10 focus:border-black focus:ring-black 
            sm:text-sm"
                type="text"
                placeholder="search"
              />
            </div>
             
          </div>
         <div className='hidden sm:flex'>
            <Menu/>
         </div>
        </div>

        <div className='flex items-center justify-end space-x-4'>
         
         
          {!menu&&<MenuIcon onClick={()=>setMenu(!menu)} className="h-6 md:hidden btn relative"/>}
          {menu&&<XCircleIcon onClick={()=>setMenu(!menu)} className="h-6 md:hidden btn relative"/>}
          
          {menu&&<>
          <Submenu />
          </>}
          </div>
      </div>
    </div>
  )
}
