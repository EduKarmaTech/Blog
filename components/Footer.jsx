import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='px-28 md:px-10'>


            <div className='grid grid-cols-5 md:grid-cols-1'>
                <div>
                    <h2 className='my-4 text-[#1F2937] font-medium text-md'>Company</h2>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>About</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Blog</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Community</p>
                </div>

                <div>
                    <h2 className='my-4 text-[#1F2937] font-medium text-md'>Product</h2>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Overview</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Features</p>
                </div>

                <div>
                    <h2 className='my-4 text-[#1F2937] font-medium text-md'>Support</h2>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Help Center</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>FAQ</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Contact</p>
                </div>

                <div>
                    <h2 className='my-4 text-[#1F2937] font-medium text-md'>Social</h2>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Instagram</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Twitter</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Facebook</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>LinkedIn</p>
                </div>

                <div>
                    <h2 className='my-4 text-[#1F2937] font-medium text-md'>Legal</h2>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Legal Notice</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Privacy Policy</p>
                    <p className='text-[#6B7280] font-medium text-sm my-2'>Terms Of Use</p>
                </div>
            </div>

            <hr className='border-[#E5E7EB] my-2'/>

            <div className='flex justify-between my-6 md:flex-col md:justify-center'>
                <div className="logo">
                    <Image src='/Logo-black.png' width={168} height={39} alt='logo' />
                </div>

                <div>
                    <p className='text-[#9CA3AF] font-medium text-sm my-2'>© 2023 Edukarma. All rights reserved</p>
                </div>
            </div>

        </div>
        )
}

export default Footer