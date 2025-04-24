'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const BannerSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {/* Slide 1 */}
                    <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-6 w-full">
                        <div className="flex-1 text-gray-800 border">
                            <h2 className="md:text-6xl text-2xl font-bold">Quality <span className='text-[#022dbb]'>Healthcare</span> Services</h2>
                            <p className="mt-2 text-xl">Get the best care with advanced technology</p>
                        </div>
                        <div className="border">
                            <img
                                src="/banner1.png"
                                alt="Healthcare Services"
                                className="w-full  md:h-[600px] h-full object-cover"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide 2 */}
                    <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-6 w-full">
                        <div className="flex-1 text-gray-800 border">
                            <h2 className="md:text-6xl text-2xl font-bold">Consult with <span className='text-[#022dbb]'> Experts</span> </h2>
                            <p className="mt-2 text-xl">Consult our top doctors remotely</p>
                        </div>
                        <div className="border">
                            <img
                                src="/banner2.jpeg"
                                alt="Consultation"
                                className="w-full  md:h-[600px] h-full object-cover"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide 3 */}
                    <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-6 w-full">
                        <div className="flex-1 text-gray-800 border">
                            <h2 className="md:text-6xl text-2xl font-bold">Compassionate<span className='text-[#022dbb]'> Patient</span>  Care</h2>
                            <p className="mt-2 text-xl">Your health is our priority</p>
                        </div>
                        <div className="border">
                            <img
                                src="/banner3.jpeg"
                                alt="Patient Care"
                                className="w-full md:h-[600px] h-full object-cover"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default BannerSlider