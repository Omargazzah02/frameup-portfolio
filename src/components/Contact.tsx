

const Contact = () => {
    return (
      <section className="w-full  flex flex-col h-[900px] max-lg:h-96">
  <div className=" bg-[var(--color-a)] w-full h-1/2  relative animated-bg">
          <h1  className=" leading-none text-[20vw] font-extrabold  -bottom-10   max-md:-bottom-3    text-center absolute   left-1/2 transform -translate-x-1/2 z-10 l  pointer-events-none ">CONTACT</h1>


  
          <div className="rounded-full w-72 h-72 bg-[var(--color-b)] animated-bg absolute bottom-4 z-0 left-3/5  max-lg:w-40 max-lg:h-40  max-md:left-1/2"></div>

  </div>



  <div className="h-1/2 w-full bg-[url(/images/background-contact.png)] bg-top bg-cover flex items-end p-7 px-20 ">

  <ul className="w-full  hidden justify-between text-white  z-10 lg:flex">

                    <li>
                        <a href=""  className="hover:text-gray-300">ABOUT ME</a>
                    </li>
                     <li>
                        <a href="" className="hover:text-gray-300">MY WORKS</a>
                    </li>
                     <li>
                        <a href="" className="hover:text-gray-300">MY SERVICES</a>
                    </li>
                     <li>
                        <a href="" className="hover:text-gray-300">CONTACT ME</a>
                    </li>


                </ul>
  </div>
</section>

    )
}

export default Contact