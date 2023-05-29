import React from 'react'
import { useRouter } from 'next/router'
import {FiShare2} from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const blogDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      
      <div className="px-16">
        <Navbar
          className="text-black "
          logo={"/Logo-black.png"}
          show={""}
          theme={"text-black"}
        />
      </div>
      <div className='h-screen bg-[url("/cover.png")] bg-cover bg-no-repeat flex flex-col justify-between'>
        <div className='flex flex-col space-y-4 justify-center text-center px-62'>
          <span className='font-semibold text-md text-[#F9FAFB]'>INSIGHT</span>
          <h1 className='text-5xl font-bold text-white'>Passion Led Us Here</h1>
          <p className='text-sm text-white font-normal'>Start with something more professional and make it fully yours.Start with something more professional and make it fully yours.</p>
        </div>

        <div className='flex justify-between items-center px-14 bg-[#FFFFFF] bg-opacity-5 py-2'>
          <div className='flex items-center'>
            <img src='/ellipse.png' alt='ellipse' />
            <div className='flex flex-col ml-3'>
              <span className='font-semibold text-[#B0B0B0] text-xs mb-1'>AUTHOR</span>
              <h1 className='text-white font-bold text-lg'>Oluwasegun Samuel</h1>
              <span className='text-md font-normal text-white text-md -mt-1'>Chief-Editor</span>
            </div>
          </div>

          <div>
            <Link href='/' className='flex items-center bg-[#1089FE] text-white px-3 py-3 text-sm rounded-lg'>
              <FiShare2 className='mr-2'/> Share
            </Link>
          </div>
        </div>

      </div>

      <div className='grid grid-cols-4'>
        <div className='col-span-3 px-10 py-8'>
          content
        </div>

        <div>
          sidebar
        </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default blogDetail