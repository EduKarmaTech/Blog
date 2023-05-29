import React from 'react'

const miniblog = () => {
  return (
    <div className='flex flex-col mr-6 my-6'>
      <div>
        <img src='/smallblog.png' alt='miniblog' />
      </div>
      <div>
        <h2 className='text-[#373737] font-bold text-lg my-2'>Next 1000 Entrepreneurs Putting Compassion At The Heart Of Businesses</h2>
        <div className='flex items-center justify-between my-3'>
          <div className='flex items-center'><img className='mr-2' src='/Ellipse.png' width={'24px'} height={'24px'} /> <span className='font-normal text-[#6D6D6D]'>James Tim</span></div>
          <div className='text-sm text-[#6D6D6D]'><span>Sep 21</span> &bull; <span>5 min Read</span></div>
        </div>
      </div>
    </div>
  )
}

export default miniblog