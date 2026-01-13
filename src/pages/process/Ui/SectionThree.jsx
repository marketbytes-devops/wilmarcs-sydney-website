import starfilm from "@/assets/videos/process/starfilm.gif";

export default function CraftingStoriesBanner() {
  return (
    <section className="container">
      <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl lg:rounded-3xl text-center">
        <div className="flex flex-col items-center justify-center py-8 sm:py-10">
          
          {/* TITLE ROW */}
          <div className="flex flex-row sm:flex-row items-center justify-center sm:gap-8 gap-4">
            <span className="font-bold text-[24px] sm:text-[56px] text-white">
              CRAFTING STORIES
            </span>

            <img
              src={starfilm.src}
              alt="Video icon"
              className="  w-12 h-12 sm:w-14 sm:h-14 lg:w-25 lg:h-30"
            />
          </div>

          {/* SECOND LINE */}
          <span className="font-bold text-[24px] sm:text-[56px] text-white tracking-tight mt-2 sm:-mt-6">
            CAPTURING MOMENTS
          </span>

          {/* BUTTON */}
          <button className="mt-5 sm:mt-6 bg-white text-black font-semibold px-6 sm:px-10 lg:px-12 py-2.5 sm:py-3.5 rounded-full text-sm sm:text-lg hover:bg-gray-100 transition-colors">
            Talk to us
          </button>

        </div>
      </div>
    </section>
  );
}
