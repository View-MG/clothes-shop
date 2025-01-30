function Header() {
    return (
      <>
        <div className='bg-white grid grid-cols-2 py-5 items-center fixed z-10'>
            <div className='text-3xl ml-24'>Uniqloth</div>
            <ul className='grid grid-cols-6 justify-items-center items-center'>

                <a href="/"><li className='relative inline-block font-inherit text-[20px] no-underline mx-[3vw] 
                overflow-auto'>Home</li></a>

                <a href="/mens"><li className='relative inline-block font-inherit text-[20px] no-underline mx-[3vw] 
                overflow-auto after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Men</li></a>

                <a href=""><li className='relative inline-block font-inherit text-[20px] no-underline mx-[3vw] 
                overflow-auto after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Women</li></a>
                
                <a href=""><li className='relative inline-block font-inherit text-[20px] no-underline mx-[3vw] 
                overflow-auto after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Kid</li></a>
                <button className="flex p-2 hover:bg-blue-300 rounded">
                  <svg className="icon" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
                <button className="flex p-2 hover:bg-blue-300 rounded">
                  <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
                  </svg>
                </button>
            </ul>
        </div>
      </>
    )
  }
  
export default Header
  