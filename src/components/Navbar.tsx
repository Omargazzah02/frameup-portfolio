
'use client'
import { useState  , useEffect} from 'react'

type Colors = {
    colorA : string , 
    colorB : string 
}






const Navbar = () => {


    

    const [colors ,setColors ] = useState <Colors> ({
            colorA : '#C0C0C0',
            colorB : '#BF0001'
        })


          useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--color-a', colors.colorA)
    root.style.setProperty('--color-b', colors.colorB)
  }, [colors])
    
    

   const toggle = () =>
    setColors(({ colorA, colorB }) => ({
      colorA: colorB,
      colorB: colorA,  }))



    return(

        <div className=" top-0  z-20 fixed  w-full flex justify-between  pl-10 pt-2 ">
    <div className="  w-9 h-9  flex  overflow-hidden flex-col cursor-pointer rounded-full " onClick={toggle}>
       <div className="w-full h-1/2  float-left  bg-[var(--color-b)] animated-bg" ></div>
  <div  className='bg-[var(--color-a)]  w-full h-1/2 float-left animated-bg'></div>
          </div>
            <nav className="flex basis-2/3"> 
                <ul className="flex justify-around w-full ">
                    <li><a href="" className='text-white'>ABOUT ME</a></li>
                    <li><a href="" className='text-white'>MY WORKS</a></li>
                    <li><a href="" className='text-white'>MY SERVICES</a></li>
                    <li><a href="" className='text-white'>CONTACT ME</a></li>

                
                </ul>
            </nav>




        </div>
    )
}


export default Navbar