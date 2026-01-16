

export default function HeroSection() {
  return (
    <div className="relative w-full bg-black mt-16 overflow-hidden">
      {/* 1. Main container with desired aspect ratio + max height */}
      <div 
        className="
          relative mx-auto w-full container
          max-w-[1400px]  
          aspect-[16/9]          
        "
      >
        {/* 2. Video wrapper – contains video with object-contain */}
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="
              absolute inset-0 
              w-full h-full 
              object-contain    
              opacity-40
              "
          >
            <source src="/videos/works/spotlight.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 3. Overlay UI – camera recording style (position absolute) */}
        <div className="absolute inset-0 pointer-events-none lg:mt-40 mt-4">
        

         <div className="text-white w-full sm:flex sm:flex-col  sm:text-left text-center ">
            <h3 className="leading-tight mt-8 font-bold">Featured Projects</h3>
            <p className="sm:w-fit  sm:leading-tight   text-center bg-white text-black p-2  ">
                creativity, skill, innovation
            </p>
          </div>



          
        </div>
      </div>
    </div>
  )
}