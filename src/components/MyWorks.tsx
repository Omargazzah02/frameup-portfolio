

const MyWorks = () => {

    return(
        <section className="bg-[var(--color-a)] w-full  border-2 border-gray-200 p-12 animated-bg ">

            <div className="w-full flex justify-between lg:px-20 ">

                <h1 className="font-bold lg:text-3xl   text-xl">2023</h1>
                <div className="w-96 text-end "><h1  className="font-bold lg:text-3xl text-xl">MY WORKS</h1>

                <p className="max-lg:text-sm  ">EVERY IMAGE IS A METICULOUS COMPOSITION, CAREFULLY CURATED TO EVOKE EMOTION AND PROVOKE THOUGHT. WHETHER IT'S A CANDID MOMENT FROZEN IN TIME OR THE GRANDEUR OF NATURE'S SPECTACLE</p>
                </div>
            </div>




       <div className="w-full flex flex-col items-center">
             <div className="mt-6 grid lg:grid-cols-[repeat(3,_400px)]  lg:gap-2 gap-1 lg:auto-rows-[400px] max-md:auto-rows-[100px] max-md:grid-cols-[repeat(3,_100px)]    ">
                <img src="images/grid-images/image1.avif" className="w-full h-full object-cover col-span-2  border-2 border-white" alt="" />
                 <img src="images/grid-images/image2.avif" alt=""  className="w-full h-full object-cover row-span-2  border-2 border-white"/>
                <img src="images/grid-images/image3.jpg" alt=""  className="w-full h-full object-cover  border-2 border-white"/>
                <img src="images/grid-images/image4.avif" alt=""  className="w-full h-full object-cover  border-2 border-white "/>
              <img src="images/grid-images/image5.jpg" alt=""  className="w-full h-full object-cover row-span-2   border-2 border-white   "/>
              <div className="w-full h-full relative bg-[var(--color-b)] animated-bg">            <img src="images/grid-images/image8.png" alt=""  className=" object-cover   border-2 border-amber-50 w-full h-full rotate-20 absolute lg:bottom-24  bottom-4  "/> </div>

             <img src="images/grid-images/image6.jpg" alt=""  className="w-full h-full object-cover   border-2 border-white"/>
             <img src="images/grid-images/image9.jpg" alt=""  className="w-full h-full object-cover col-span-2  border-2 border-white"/>



















            </div>
       </div>


        </section>
    )
}

export default MyWorks