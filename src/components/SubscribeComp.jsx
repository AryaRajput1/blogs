import React from 'react'

function SubscribeComp() {
  return (
    <div>
        <div className='rounded-xl bg-blue-200 p-7 m-10'>
            <h2 className='text-sky-900 text-2xl font-bold font-sans mb-2'>Subscribe blog for latest updates</h2>
            <p className='text-gray-500 text-xs font-semibold mb-7'>By subscibing this you will be receiving the latest updates from us.</p>
            <input className='rounded-md p-2 w-full mb-2 placeholder:text-gray-500' placeholder='Enter your mail address'/>
            <button className='w-full bg-red-600 p-2 rounded-md text-white font-semibold'>Subscribe Now!</button>
        </div>
    </div>
  )
}

export default SubscribeComp