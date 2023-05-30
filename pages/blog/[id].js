import React from 'react'
import { useRouter } from 'next/router'
import { FiShare2 } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Otherblog from '@/components/Otherblog'
import Miniblog from "@/components/Miniblog"

const blogDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>


      <div className='h-screen bg-[url("/cover.png")] bg-cover bg-no-repeat flex flex-col justify-between'>
        <div className="px-16 bg-white">
          <Navbar
            className="text-black bg-white"
            logo={"/Logo-black.png"}
            show={""}
            theme={"text-black"}
          />
        </div>
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
              <FiShare2 className='mr-2' /> Share
            </Link>
          </div>
        </div>

      </div>

      <div className='grid grid-cols-4 mx-10 md:grid-cols-1 md:mx-3'>
        <div className='col-span-3 px-10 py-8 text-justify md:col-span-1 md:px-3'>
          <span className='my-6'>
            “From our first contact in the mid-80s, we realized that if we worked together we could do something exceptional for our end users: the welders,”
          </span>

          <p className='my-6'>
            Welding is hot, dangerous, and dirty work. Welders spend long hours on their feet and often work outside: on bridges, at race tracks, in oil fields, and other sites. Welding strains eyesight, the neck, and shoulders. Fumes are toxic and burns common.

            For 40 years, our Sweden-based design team has collaborated first with Speedglas and then with 3M to design, and continually improve, welding helmets. With every product cycle, the joint team started from scratch, reimagining and redesigning the helmets, with innovations that sometimes shifted the entire industry.
          </p>

          <span className='my-8'>
            <h1 className='text-lg font-bold my-3'>Meet our Instructors</h1>
            <p>
            Other innovations over the years included a device that pivots the shield up and back over the crown of the head, rather than resting at the forehead, easing neck pain. Internal padding that skirted pressure points, reducing headaches. A two-way fan system that improved breathability. A textile covering that captured stray glass crystals. A curved design for glass that extended peripheral vision.
            </p>
            <p className='my-6'>
Our partnership has produced seven signature helmet designs, with accessories, which have won 11 international awards, including a 2021 “Best of the Best” Red Dot Award, and are now sold in 60+ countries. But most importantly, our work together has helped to protect welders around the world.
            
            </p>
          </span>

          <Image src='/blog-img.png' className='my-6' alt='blog-detail' width={876} height={394} />

          <span className='my-8'>
            <h1 className='text-lg font-bold my-3'>Meet our Instructors</h1>
            <p>
            Other innovations over the years included a device that pivots the shield up and back over the crown of the head, rather than resting at the forehead, easing neck pain. Internal padding that skirted pressure points, reducing headaches. A two-way fan system that improved breathability. A textile covering that captured stray glass crystals. A curved design for glass that extended peripheral vision.
            </p>
            <p className='my-6'>
Our partnership has produced seven signature helmet designs, with accessories, which have won 11 international awards, including a 2021 “Best of the Best” Red Dot Award, and are now sold in 60+ countries. But most importantly, our work together has helped to protect welders around the world.
            
            </p>
          </span>
        </div>
          

        <div className='flex flex-col space-y-4 md:hidden'>
          <Otherblog/>
          <Otherblog/>
          <Otherblog/>
          <Otherblog/>
          <Otherblog/>
          <Otherblog/>
        </div>

      </div>

      <div className='mx-10'>
      <h1 className='text-2xl font-bold my-3'>Related Articles</h1>

      <div className='grid grid-cols-4 space-x-10 my-2 md:grid-cols-1 md:space-x-0'>

       <Miniblog/>
       <Miniblog/>
       <Miniblog/>
       <Miniblog/>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default blogDetail