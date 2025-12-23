
import Hero from './hero';
import SpecialOffer from './special-offer';
import Features from './features';
import {useState} from 'react';
import Images from './images';
import Testimonial from './testimonials';
import Questions from './questions';
import Booking from './booking';
import logo from "../image/heero&llogo.png"
import Footer from './footer';
function Navbar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const before="hover:text-blue-600 bg-[#eee] text-black relative before:absolute before:-bottom-6 before:h-1 before:w-0 hover:before:w-full before:transition-all before:bg-blue-600 before:content-['']"
    const before1="hover:text-blue-600 bg-[#eee] text-black relative pe-3 before:absolute before:right-0 before:-bottom-1 p-1 before:h-full before:opacity-25 before:w-0 hover:before:w-full before:transition-all duration-1000 before:bg-blue-600 before:content-['']"
    return(
        <>
        <nav className="bg-[#eee] text-gray-900 shadow-md">
            <div className=" px-6 py-2 flex flex-wrap justify-between items-center">
                <div className="flex items-center">
                    <img src={logo}  alt="Logo" className="h-14 w-14 mr-2" />
                    <span className="md:text-xl font-semibold">Smart Watch</span>
                </div>
                <div className="navbar-btn">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-500 cursor-pointer hover:text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className='space-x-4 head-navbar !bg-gray-500 hidden text-right'>
                    <a href="#features" className={before}>المميزات الأساسية</a>
                    <a href="#special-offer" className={before}>عرض خاص</a>
                    <a href="#images" className={before}>صور للمنتج</a>
                    <a href="#testimonial" className={before}>تجارب العملاء</a>
                    <a href="#questions" className={before}>الأسئلة الشائعة</a>
                    <a href="#booking" className={before}>احجز الان</a>
                </div>
                
            </div>
        </nav>
        <div className={`${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}  overflow-hidden transition-all duration-1000 head-navbar-mobile sm:hidden flex-col text-right flex`}>
            <a href="#features" className={before1}>المميزات الأساسية</a>
            <a href="#special-offer" className={before1}>عرض خاص</a>
            <a href="#images" className={before1}>صور للمنتج</a>
            <a href="#testimonial" className={before1}>تجارب العملاء</a>
            <a href="#questions" className={before1}>الأسئلة الشائعة</a>
            <a href="#booking" className={before1}>احجز الان</a>
        </div>
        <Hero />
        <Features />
        <SpecialOffer />
        <Images />
        <Testimonial />
        <Questions />
        <Booking />
        <Footer />
        </>
    )
}
export default Navbar;