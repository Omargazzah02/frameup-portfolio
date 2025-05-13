

const AboutMe = () => {


  


     return (
    <section className="bg-[url('/images/photographer.png')] lg:bg-contain max-lg:bg-center    h-[1500px]   w-full relative ">
      {/* Le texte en grand avec l'image de fond visible à travers */}
      

      <div className="w-64 absolute top-44 left-10 z-10">
        <p className="text-white ">
          AN AWARD-WINNING PHOTOGRAPHER WHOSE LENS TRANSFORMS MOMENTS INTO TIMELESS MASTERPIECES
        </p>
      </div>

      <p className="text-white absolute lg:top-96 top-72 right-10 w-24 text-right">SCROLL MORE</p>



      <div className="absolute top-80  left-1/3   flex flex-col items-end max-lg:hidden  ">
        <img src="/images/signature-white.png  " alt="" width={150}    />
        <p className="text-white">SQUIDWOD TENPOLES </p>
        <p className="text-gray-400 ">AWARD WINNING PHOTOGRAPHER</p>
      </div>

      <div className="bg-[var(--color-a)] w-full h-[60%] bottom-0 absolute  animated-bg ">


        <h1  className=" leading-none text-[20vw] font-extrabold  -top-24  max-lg:-top-10 max-md:-top-7    text-center absolute   left-1/2 transform -translate-x-1/2 z-10 l ">FRAMEUP</h1>
        <div className="rounded-full w-72 h-72 bg-[var(--color-b)] absolute top-4 z-0 left-3/5  max-lg:w-40 max-lg:h-40  max-md:left-1/2"></div>
        
        <div className="w-full pt-56 lg:px-20  flex  lg:justify-between   max-lg:flex-col max-lg:items-center   ">
     <div className="w-96 max-lg:w-56">     <h2 className="text-black font-bold text-2xl">ABOUT ME</h2>

          <p className="text-black text-2xl max-lg:text-xl">DISTINGUISHED BY A MYRIAD OF ACCOLADES AND INTERNATIONAL RECOGNITION, SQUIDWOOD STANDS AS A LUMINARY IN THE REALM OF VISUAL STORYTELLING</p>

</div>
         <div className="  max-lg:mt-11 lg:mt-32 lg:mr-14 relative w-[400px] h-[400px] max-lg:w-60 max-lg:h-60">
  <img
    src="/images/images-aboutme/image1.webp"
    alt=""
   
    className="absolute top-9 lg:right-20  max-lg:right-10 z-10 -rotate-12 border-2  border-white border-solid "
  />
  <img
    src="/images/images-aboutme/image2.jpg"
    alt=""
   
    className="absolute top-0 left-0 z-20  border-white border-2 border-solid"
  />

  

</div>


        </div>
         </div>


    </section>
  );
};



export default AboutMe