export default function Banner() {
  return (
    <div className="relative">
      <div className="carousel w-full scroll-smooth snap-x snap-mandatory">
        <div id="item1" className="carousel-item w-full h-48">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-48">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-48">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-48">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          <a href="#item1">
            <div className="w-2 h-2 bg-white/70 rounded-full shadow-md hover:bg-white data-[active=true]:bg-white"></div>
          </a>
          <a href="#item2">
            <div className="w-2 h-2 bg-white/70 rounded-full shadow-md hover:bg-white data-[active=true]:bg-white"></div>
          </a>
          <a href="#item3">
            <div className="w-2 h-2 bg-white/70 rounded-full shadow-md hover:bg-white data-[active=true]:bg-white"></div>
          </a>
          <a href="#item4">
            <div className="w-2 h-2 bg-white/70 rounded-full shadow-md hover:bg-white data-[active=true]:bg-white"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
