import React from 'react';

const Contact = () => {
  return (
    <div id="contact" name='contact' className='w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4'>
      <form method="POST" action="https://getform.io/f/99595fa7-2a09-4352-a1c6-d88f823445dc" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-4 flex flex-col items-center justify-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - sashagordin22@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name='message' rows="10"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact;