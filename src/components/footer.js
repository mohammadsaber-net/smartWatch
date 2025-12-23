import { faFacebookF, faLinkedin, faTelegram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function Footer(){
    const [facebook,setFacebook]=useState(false)
    let word ="not have it"
    const before1=`hover:text-blue-600 relative pe-3 before:absolute before:right-0 before:top-0 before:h-full before:opacity-100 before:w-full before:transition-all duration-1000 before:text-white before:bg-blue-600 before:content-[${word}]`
    let before="relative before:content-['not have it'] before:top-0 before:left-0 before:text-white before:bg-gray-600 before:absolute"
    // let before="hover:text-blue-400 hover:bg-white "
    return(
        <footer className="bg-gray-900 text-white py-10 mt-16">
  <div className="max-w-7xl mx-auto container px-6 text-right footer-foot grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">SmartTime</h2>
      <p className="text-gray-400">
        ساعة ذكية تجمع بين الأناقة والوظائف الذكية لتناسب نمط حياتك العصري.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#features" className="hover:text-white">المميزات</a></li>
        <li><a href="#special-offer" className="hover:text-white">عروض</a></li>
        <li><a href="#questions" className="hover:text-white">الأسئلة الشائعة</a></li>
        <li><a href="#booking" className="hover:text-white">الحجز</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">معلومات التواصل</h3>
      <p className="text-gray-400">📧 m1732saber@gamil.com</p>
      <p className="text-gray-400">📞 0102-396-6702</p>
      <p className="text-gray-400">📍 المنوفية, مصر</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">تابعنا</h3>
      <div className="flex border border-gray-200 justify-around text-3xl space-x-4">
        <a href="https://t.me/moh123ph" className="hover:text-[#0088cc] hover:bg-white"><FontAwesomeIcon icon={faTelegram}/></a>
        <a href="https://wa.me/+201023966702" className="hover:text-[#25D366] hover:bg-white"><FontAwesomeIcon icon={faWhatsapp}/></a>
        <a onClick={()=>setFacebook(!facebook)} className={`hover:text-blue-400 relative hover:bg-white`}><FontAwesomeIcon icon={faFacebookF} />{facebook&&<small className="absolute -top-5 text-gray-800 text-center -left-5 text-sm w-20 z-30 bg-white">not have it</small>}</a>
        <a href="https://www.linkedin.com/in/moham%20mad-saber-447510353/" className="hover:text-[#0077B5] hover:bg-white"><FontAwesomeIcon icon={faLinkedin}/></a>
      </div>
    </div>
  </div>
  <div className="text-center text-gray-300 mt-10 border-t border-gray-700 pt-6">
    © {new Date().getFullYear()} SmartTime. جميع الحقوق محفوظة.
  </div>
</footer>

    )
}
export default Footer