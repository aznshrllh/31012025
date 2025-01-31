export default function Banner() {
  return (
    <div className="relative">
      <div className="carousel w-full scroll-smooth snap-x snap-mandatory">
        <div id="item1" className="carousel-item w-full h-48">
          <img
            src="https://www.bakmigm.co.id/cfind/source/thumb/images/banner/promo-cuan-2025/cover_w1112_h572_promo-cuan_web-banner--920-x-473-px-1.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-48">
          <img
            src="https://www.bakmigm.co.id/cfind/source/thumb/images/banner/fortune-hampers-2025/cover_w1112_h572_web-banner-920-x-473.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-48">
          <img
            src="https://www.bakmigm.co.id/cfind/source/thumb/images/banner/promo-angpao-jan-25/cover_w1112_h572_fa-promo-angpao_web-banner--920-x-473-px.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-48">
          <img
            src="https://www.bakmigm.co.id/cfind/source/thumb/images/banner/promo-paket-makan-tengah/cover_w1112_h572_web-banner-920x473px.jpg"
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
