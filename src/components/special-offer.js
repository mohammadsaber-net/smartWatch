import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function SpecialOffer() {
    useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);
    return (<>
        <div id="special-offer" className="py-10 md:py-16 p-10 bg-gray-50">
            <h2 className="text-3xl main-title font-bold">عرض خاص</h2>
            <div data-aos="fade-up" className="special-offer-content mt-10 text-center">
                <h3 className="text-lg text-gray-800">احصل على خصم 20% عند شراء ساعتين ذكية!</h3>
                <p className="text-gray-800">العرض ساري حتى <span className='line-through'>منتصف</span> نهاية الشهر</p>
            </div>
            <a href='#booking' className=" bg-blue-600 hover:text-blue-600 text-center border text-2xl transition-all cursor-pointer m-auto block mt-14 hover:border-blue-600 text-white py-2 px-4 rounded hover:bg-white ">اطلب الان</a>
        </div>
    </>)
}
export default SpecialOffer;
