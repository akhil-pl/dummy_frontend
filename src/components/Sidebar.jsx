import React from 'react';


function Sidebar(props) {

  return (
    
    <section className="min-h-screen bg-slate-300 dark:bg-gray-800">
        <nav className=' px-5 pt-5 mb-12 flex justify-between'>
            <div>
                <img className=' mx-auto' src={logo} width={50} height={50} />
            </div>
            <ul className=' flex items-center'>
                <li className=' pl-2'>
                    <BsFillMoonFill onClick={() => props.setDarkMode(!props.darkMode) } className=' cursor-pointer text-3xl block dark:hidden transition ease-in-out duration-700 ' />
                    <BsFillSunFill onClick={() => props.setDarkMode(!props.darkMode) } className=' cursor-pointer text-3xl hidden dark:block text-yellow-50 ' />
                </li>
                <li>
                    <button
                        className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8"
                        onClick={handleResumeDownload}
                    >
                        Resume
                    </button>
                </li>
            </ul>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 md:text-left lg:flex lg:flex-wrap lg:justify-end">
            <div className='flex items-center justify-end'>
                <div className=' text-right px-10'>
                    <h2 className=' text-5xl text-teal-600 font-extrabold md:text-6xl'>
                        AKHIL<br></br>P L
                    </h2>
                    <div>
                        <h3 className=' font-burtons text-2xl py-2 md:text-3xl lg:text-2xl dark:text-yellow-50 '>
                            <Typed strings={['PYTHON DEVELOPER', 'WEB DEVELOPER', 'DATA ANALYST']} typeSpeed={100} backSpeed={40} loop />
                        </h3>
                    </div>
                </div>
            </div>
            
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-14 overflow-hidden md:w-96 md:h-96 '>
                <img src={pic} layout='fill' objectfit='cover' />
            </div>
        </div>
        <div className=" pt-5 flex items-center justify-center lg:hidden">
            <img src={scroll} width={50} height={50} />
            <p className=' animate-bounce text-2xl dark:text-yellow-50 lg:text-yellow-50 '>Scroll</p>
        </div>
    </section>
    
  )
}

export default Sidebar