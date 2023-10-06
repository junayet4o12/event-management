
import img1 from '../banner1.jpg'
import img2 from '../banner2.jpg'
import img3 from '../banner3.jpg'
import img4 from '../banner4.jpg'
import img5 from '../banner5.jpg'
import img6 from '../banner6.jpg'
const Banner = () => {

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="carousel w-full md:h-[450px] lg:h-[575px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                        <a href="#slide3" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❮</a>
                        
                        <a href="#slide5" className="btn btn-circle  bg-[#0000005a] text-white hover:text-black">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                        <a href="#slide4" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❮</a>
                        
                        <a href="#slide6" className="btn btn-circle  bg-[#0000005a] text-white hover:text-black">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                        <a href="#slide5" className="btn btn-circle bg-[#0000005a] text-white hover:text-black">❮</a>
                        
                        <a href="#slide1" className="btn btn-circle  bg-[#0000005a] text-white hover:text-black">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;