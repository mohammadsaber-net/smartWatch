import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../image/images (3).png"
import image2 from "../image/images (2).jpg"
import image3 from "../image/images (3).jpg"
import image4 from "../image/images (4).jpg"
import image5 from "../image/images (5).jpg"
import image6 from "../image/images (1).png"
import image7 from "../image/images.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Testimonial(){
    return (
        <div id="testimonial" className="py-10 md:py-16 bg-gray-50 p-6">
            <h2 className="main-title text-center mb-8">تجارب العملاء</h2>
            <Swiper
            className="sm:mt-32 mb-12"
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            >
                
                <SwiperSlide className="">
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image1} alt="image1" />
                        <div class="text-center pt-10 sm:pt-12">
                        <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                
                    </div>
                        <p className="text-gray-700">"هذه الساعة غيرت حياتي! أستطيع الآن تتبع صحتي ونشاطي اليومي بسهولة."</p>
                        <p className="text-gray-500 mt-2">- أحمد</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image2} alt="image2" />
                        <div class="text-center pt-10 sm:pt-12">
                        <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                
                    </div>
                        <p className="text-gray-700">"أحب تصميم هذه الساعة! إنها أنيقة وعملية في نفس الوقت."</p>
                        <p className="text-gray-500 mt-2">- سارة</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image3} alt="image2" />
                        <div class="text-center pt-10 sm:pt-12">
                        <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                
                    </div>
                        <p className="text-gray-700">"تجربتي مع هذه الساعة كانت رائعة! أنصح بها الجميع."</p>
                        <p className="text-gray-500 mt-2">- محمد</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                
                    
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image7} alt="image2" />
                    <div class="text-center pt-10 sm:pt-12">
                        <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className=" me-1" icon={faStar} />
                
                    </div>
                    <p className="text-gray-700">"هذه الساعة مذهلة! أحب الميزات الصحية التي تقدمها."</p>
                    <p className="text-gray-500 mt-2">- ليلى</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image4} alt="image2" />
                         <div class="text-center pt-10 sm:pt-12">
                        <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className=" me-1" icon={faStar} />
                
                    </div>
                        <p className="text-gray-700">"تجربتي مع هذه الساعة كانت رائعة! أنصح بها الجميع."</p>
                        <p className="text-gray-500 mt-2">- محمد</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image6} alt="image2" />
                    <div class="text-center pt-10 sm:pt-12">
                        <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                
                    </div>
                    <p className="text-gray-700">"هذه الساعة مذهلة! أحب الميزات الصحية التي تقدمها."</p>
                    <p className="text-gray-500 mt-2">- ليلى</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image7} alt="image2" />
                    <div class="text-center pt-10 sm:pt-12">
                        <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className=" me-1" icon={faStar} />
                
                    </div>
                    <p className="text-gray-700">"تجربتي مع هذه الساعة كانت رائعة! أنصح بها الجميع."</p>
                    <p className="text-gray-500 mt-2">- محمد</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image5} alt="image2" />
                    <div class="text-center pt-10 sm:pt-12">
                        <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                
                    </div>
                    <p className="text-gray-700">"هذه الساعة مذهلة! أحب الميزات الصحية التي تقدمها."</p>
                    <p className="text-gray-500 mt-2">- ليلى</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-10 relative overflow-visible bg-gray-100 border border-red-300 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img className="sm:w-30 w-16 h-16 absolute left-1/2 rounded-full -translate-x-1/2 -top-5 sm:-top-10 sm:h-30" src={image3} alt="image2" />
                    <div class="text-center pt-10 sm:pt-12">
                    <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                      <FontAwesomeIcon className="text-amber-300 me-1" icon={faStar} />
                    </div>
                    <p className="text-gray-700">"تجربتي مع هذه الساعة كانت رائعة! أنصح بها الجميع."</p>
                    <p className="text-gray-500 mt-2">- محمد</p>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
        
    )
}
export default Testimonial;