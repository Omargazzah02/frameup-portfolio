
import '../app/globals.css'
const MyServices = () => {
    return (
        <section className="bg-[var(--color-a)] w-full   h-full border-2 border-gray-200 lg:p-12 lg:px-36 animated-bg  flex lg:flex-row flex-col  lg:justify-between  max-lg:items-center max-lg:pt-10"> 
        <div className="w-80   max-md:w-60 ">
              <h1 className="font-bold lg:text-3xl   text-xl ">MY SERVICES</h1>

          <p className=" max-lg:text-sm ">WHETHER IT'S CAPTURING THE ESSENCE OF A CORPORATE EVENT, IMMORTALIZING A COUPLE'S SPECIAL DAY, OR COLLABORATING ON ARTISTIC PROJECTS</p>


        </div>
 


     <div className="lg:w-1/2 w-full  flex flex-col  h-96 lg:h-[700px]   lg:px-9  lg:mt-0 mt-4  ">


   <div className="flex-1 border-b-2 border-gray-200   flex justify-between   items-center hover:bg-[url(/images/hover-photo.jpg)]   bg-cover bg-center  cursor-pointer   group px-3">
            <i className="fas fa-arrow-circle-right lg:text-4xl  text-2xl group-hover:text-[var(--color-b)] "></i>
            <h1 className='font-bold  lg:text-3xl text-2xl group-hover:text-[var(--color-a)]  '>PORTRAITURE </h1>
     </div>

   <div className="flex-1 border-b-2 border-gray-200   flex justify-between   items-center hover:bg-[url(/images/hover-photo.jpg)]   bg-cover bg-center  cursor-pointer   group px-3">
            <i className="fas fa-arrow-circle-right lg:text-4xl  text-2xl group-hover:text-[var(--color-b)] "></i>
            <h1 className='font-bold  lg:text-3xl text-2xl group-hover:text-[var(--color-a)]  '>EVENT COVERAGE </h1>
     </div>

   <div className="flex-1 border-b-2 border-gray-200   flex justify-between   items-center hover:bg-[url(/images/hover-photo.jpg)]   bg-cover bg-center  cursor-pointer   group px-3">
            <i className="fas fa-arrow-circle-right lg:text-4xl  text-2xl group-hover:text-[var(--color-b)] "></i>
            <h1 className='font-bold  lg:text-3xl text-2xl group-hover:text-[var(--color-a)]  '>COMMERCIAL PHOTO </h1>
     </div>

   <div className="flex-1 border-b-2 border-gray-200   flex justify-between   items-center hover:bg-[url(/images/hover-photo.jpg)]   bg-cover bg-center  cursor-pointer   group px-3">
            <i className="fas fa-arrow-circle-right lg:text-4xl  text-2xl group-hover:text-[var(--color-b)] "></i>
            <h1 className='font-bold  lg:text-3xl text-2xl group-hover:text-[var(--color-a)]  '>WEDDING PHOTO </h1>
     </div>

   <div className="flex-1  flex justify-between   items-center hover:bg-[url(/images/hover-photo.jpg)]   bg-cover bg-center  cursor-pointer   group px-3">
            <i className="fas fa-arrow-circle-right lg:text-4xl  text-2xl group-hover:text-[var(--color-b)] "></i>
            <h1 className='font-bold  lg:text-3xl text-2xl group-hover:text-[var(--color-a)]  '>FINE ART PHOTO </h1>
     </div>

     </div>

        </section>
    )
}

export default MyServices