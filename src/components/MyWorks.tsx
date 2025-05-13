

const MyWorks = () => {

    return(
        <section className="bg-[var(--color-a)] w-full h-full border-2 border-gray-200 p-12  ">

            <div className="w-full flex justify-between ">

                <h1 className="font-extrabold text-2xl">2023</h1>
                <div className="w-96 text-end "><h1  className="font-extrabold text-2xl">MY WORKS</h1>

                <p className="text-xl">EVERY IMAGE IS A METICULOUS COMPOSITION, CAREFULLY CURATED TO EVOKE EMOTION AND PROVOKE THOUGHT. WHETHER IT'S A CANDID MOMENT FROZEN IN TIME OR THE GRANDEUR OF NATURE'S SPECTACLE</p>
                </div>
            </div>




       <div className="w-full flex flex-col items-center">
             <div className="mt-6 grid grid-cols-[repeat(3,_400px)]  gap-2 auto-rows-[400px] ">
                <img src="images/grid-images/image1.avif" className="w-full h-full object-cover col-span-2  border-2 border-white" alt="" />
                 <img src="images/grid-images/image2.avif" alt=""  className="w-full h-full object-cover row-span-2  border-2 border-amber-50"/>
                <img src="images/grid-images/image3.jpg" alt=""  className="w-full h-full object-cover  border-2 border-amber-50"/>
                <img src="images/grid-images/image4.avif" alt=""  className="w-full h-full object-cover  border-2 border-amber-50 "/>
              <img src="images/grid-images/image5.jpg" alt=""  className="w-full h-full object-cover row-span-2   border-2 border-amber-50"/>
            <img src="images/grid-images/image8.webp" alt=""  className="w-full h-full object-cover   border-2 border-amber-50 "/>
             <img src="images/grid-images/image6.jpg" alt=""  className="w-full h-full object-cover   border-2 border-amber-50"/>
             <img src="images/grid-images/image9.jpg" alt=""  className="w-full h-full object-cover col-span-2  border-2 border-amber-50"/>



















            </div>
       </div>


        </section>
    )
}

export default MyWorks