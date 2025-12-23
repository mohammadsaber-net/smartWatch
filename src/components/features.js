import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faMobile, faPhone, faWalking, faWater } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faBattery } from '@fortawesome/free-solid-svg-icons/faBattery';
import { useEffect } from 'react';
function Features(){
    useEffect(() => {
    AOS.init({ duration: 100 });
}, []);
    return (<>
    <div id="features" className="md:py-16 py-10 w-full p-6 m-auto bg-gray-100">
  <h2 className="main-title">المميزات</h2>
  <div className="features-grid mt-10">
                <div data-aos="fade-up" className="bg-white p-4 rounded hover:bg-gray-200 hover:text-green-500 shadow">
                    <h3 className="font-bold text-lg text-gray-800 hover:text-red-600 text-center"><FontAwesomeIcon className='text-red-600' icon={faHeartbeat} /> ضربات القلب</h3>
                    <p className="text-gray-600 text-right mt-4"> مراقبة دقيقة لمعدل ضربات القلب</p>
                </div>

            <div data-aos="fade-up" className="bg-white p-4 rounded hover:bg-gray-200  hover:text-green-500 shadow">
                <h3 className="font-bold text-lg text-gray-800 hover:text-green-600 text-center"><FontAwesomeIcon className='text-green-600' icon={faWalking} /> النشاط اليومي</h3>
                <p className="text-gray-600 text-right mt-4"> تتبع النشاط اليومي والرياضة والنوم</p>
            </div>
            <div data-aos="fade-up" className="bg-white p-4 rounded hover:bg-gray-200  hover:text-blue-500 shadow">
                <h3 className="font-bold text-lg text-gray-800 hover:text-blue-600 text-center"><FontAwesomeIcon className='text-blue-600' icon={faPhone} /> المكالمات</h3>
                <p className="text-gray-600 text-right mt-4"> إمكانية الرد على المكالمات وتلقي الإشعارات</p>
            </div>
            <div data-aos="fade-up" className="bg-white p-4 rounded hover:bg-gray-200  hover:text-blue-500 shadow">
                <h3 className="font-bold text-lg hover:text-blue-600 text-gray-800 text-center"><FontAwesomeIcon className='text-blue-600' icon={faWater} /> مقاومة الماء</h3>
                <p className="text-gray-600 text-right mt-4"> مقاومة للماء IP68 – مثالية للتمارين والسباحة</p>
            </div>
            <div data-aos="fade-up" className="bg-white p-4 rounded hover:bg-gray-200  hover:text-green-500 shadow">
                <h3 className="font-bold text-lg hover:text-green-600 text-gray-800 text-center"><FontAwesomeIcon className='text-green-600' icon={faBattery} /> حالة البطارية</h3>
                <p className="text-gray-600 text-right mt-4"> بطارية قوية تدوم حتى 7 أيام بشحنة واحدة</p>
            </div>
            <div data-aos="fade-up" className="bg-white p-4 rounded hover:bg-gray-200  hover:text-amber-500 shadow">
                <h3 className="font-bold text-lg hover:text-amber-600 text-gray-800 text-center"><FontAwesomeIcon className='text-amber-600' icon={faMobile} /> نوع الهاتف</h3>
                <p className="text-gray-600 text-right mt-4"> متوافقة مع Android و iOS</p>
            </div>
                    </div>
  </div>
    </>)
}
export default Features;