import React from 'react'

const SignIn = () => {
  return (
    <div className='signUp px-4  lg:px-12  rounded bg-white flex justify-center  h-full max-w-[1280px] mx-auto my-16'>
      <div className='wrapper shadow-md border border-gray-50  lg:flex-row flex flex-col  '>
      <div className='left-image  z-10 '>
      <img src='/signIn.webp' className='w-[500px] h-full  object-cover' ></img>
      </div>

      <div className="right-form flex flex-col gap-4  z-[20] sm:p-10 lg:p-16 p-4  lg:w-[70%] rounded-l-3xl  ">
            <div className="top-heading flex flex-col items-center justify-center gap-4">
            <div className='icon w-4'><img src="/Logo.webp" alt="icon" /></div>
                <h3 className='text-2xl font-semibold'>Welcome to Explore Me</h3>
            </div>
            <div className="mid-form  flex flex-col gap-4 text-sm   ">
                <div className="input-field flex flex-col gap-1">
                    <p className='font-semibold'>Email Address</p>
                    <input type="text" placeholder='Enter your email address' className='border border-gray-200 p-3 px-3 text-xs w-full rounded'/>
                </div>
                
                <div className="input-field flex flex-col gap-1">
                <p className='font-semibold'>Password</p>
                    <input type="password" placeholder='Create your password '  className='border border-gray-200 p-3 px-3 text-xs w-full rounded'/>
                </div>
                
                <button className='p-3 bg-mainBlue rounded text-white'><p>Login to your account</p></button>

                <p className='text-center font-semibold'>Don't have an account? <span className='text-mainBlue cursor-pointer'>Sign Up</span></p>
                
            </div>
            <div className="bottom-social-links  ">
                <div className="top-OR relative text-center mt-4">
                    <hr className=' '/>
                    <p className='absolute -top-3 bg-white text-gray-500 right-[45%] px-4 font-semibold'>Or</p>
                 
                </div>
                <div className="social-links flex gap-4 items-center justify-center mt-8">
                        <div className='icon w-5 cursor-pointer'><img src="/facebook.webp" alt="facebook-icon" /></div>
                        <div className='icon w-5 cursor-pointer'><img src="/twitter.webp" alt="facebook-icon" /></div>
                        <div className='icon w-5 cursor-pointer'><img src="/instagram.webp" alt="facebook-icon" /></div>
                        <div className='icon w-5 cursor-pointer'><img src="/linkedin.webp" alt="facebook-icon" /></div>
                    </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default SignIn
