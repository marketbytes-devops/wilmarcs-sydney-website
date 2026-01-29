

export default function HeroSection() {
  return (
    <div className="md:py-4 py-0">
    <div className="relative w-full  mt-8 overflow-hidden ">

       {/* MOBILE */} 
        <div className="md:hidden">
          <div 
            className="
              relative mx-auto w-full
              aspect-[16/9]
            "
          >
            <div className="absolute inset-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="
                  rounded-none
                  absolute inset-0 
                  w-full h-full 
                  object-contain
                "
              >
                <source src="/videos/works/Work.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        
      {/* DESKTOP  */}
    <div className="hidden md:block">
      <div 
        className="
          relative mx-auto w-full container
          max-w-[1400px]  
          aspect-[16/9]          
        "
      >

        <div className="absolute inset-0 ">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className=" md:rounded-3xl rounded-none
              absolute inset-0 
              w-full h-full  
              "
          >
            <source src="/videos/works/Work.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
    
    </div>
    </div>
  )
}