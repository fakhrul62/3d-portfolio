import React from 'react'

const Footer = () => {
  return (
    <section className='sm:px-10 px-5 pt-7 md:mt-56 mt-32 pb-3 border-t border-zinc-900 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-zinc-600 flex gap-2'>
            <p>Terms & Conditions</p>
            <p> | </p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
            <div className=' w-12 h-12 rounded-full flex justify-center items-center bg-zinc-900 border border-zinc-950'>
                <img src="/assets/github.svg" alt="GitHub" className='w-1/2 h-1/2'/>
            </div>
            <div className=' w-12 h-12 rounded-full flex justify-center items-center bg-zinc-900 border border-zinc-950'>
                <img src="/assets/instagram.svg" alt="Instagram" className='w-1/2 h-1/2'/>
            </div>
            <div className=' w-12 h-12 rounded-full flex justify-center items-center bg-zinc-900 border border-zinc-950'>
                <img src="/assets/twitter.svg" alt="Twitter" className='w-1/2 h-1/2'/>
            </div>
        </div>
        <p className='text-zinc-600'>© 2025 Fakhrul Alam. All rights reserved.</p>

    </section>
  )
}

export default Footer