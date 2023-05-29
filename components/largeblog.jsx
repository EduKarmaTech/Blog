import React from 'react'


const largeblog = () => {
  return (
    <div className='grid grid-cols-3 space-x-4 md:flex md:flex-col'>
      <div className='col-span-1'>
        <img src='/largeblog.png' alt='largeblog' />
      </div>

      <div className='flex flex-col col-span-2 py-3 space-y-4'>
        <h2 className='font-bold text-3xl text-[#373737]'>Next 1000 Entrepreneurs Entrepreneurs Putting Compassion...</h2>
        <p className='text-[#111111] font-normal text-md'>For 40 years, our Sweden-based design team has collaborated first with Speedglas and then with 3M to design, and continually improve, welding helmets. With every product cycle, the joint team started from scratch, reimagining and redesigning the..</p>
        <div className='text-sm text-[#6D6D6D]'><span>Sep 21</span> &bull; <span>5 min Read</span></div>
      </div>
    </div>
  )
}

export default largeblog