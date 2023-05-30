import React from 'react'

const Otherblog = () => {
  return (
    <div className='flex flex-col my-6'>
        <div className='grid grid-cols-3'>
            <div className='mr-2'>
                <img src='/largeblog.png' className='h-full' alt='miniblog' />
            </div>

            <h2 className='text-[#373737] font-bold text-lg col-span-2 text-start leading-0'>Next 1000 Entrepreneurs Entrepreneurs Putting Compassion...</h2>
        </div>
      

        
        <div className='flex items-center justify-between my-1'>
          <div className='flex items-center'><img className='mr-2' src='/Ellipse.png' width={'24px'} height={'24px'} /> <span className='font-normal text-[#6D6D6D]'>James Tim</span></div>
          <div className='text-sm text-[#6D6D6D]'><span>Sep 21</span> &bull; <span>5 min Read</span></div>
        </div>
    </div>
  )
}

export default Otherblog