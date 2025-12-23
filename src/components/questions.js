import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function Questions(){
    const [question1,setQuestion1]=useState(false)
    const [question2,setQuestion2]=useState(false)
    const [question3,setQuestion3]=useState(false)
    const [question4,setQuestion4]=useState(false)
    const [question5,setQuestion5]=useState(false)
    return(
        <div id="questions" className="sm:py-16 py-10 bg-gray-100 m-auto container">
            <h2 className="main-title  mb-8">الأسئلة الشائعة</h2>
            <div className="mb-5 sm:mb-10 overflow-hidden sm:me-20 me-0 ms-auto text-right w-fit bg-[#eee] text-black sm:p-4 p-1 pb-1 rounded-sm">
                <h3 onClick={() => setQuestion1(!question1)} className="faq-question mb-2 bg-[#eee] text-black cursor-pointer hover:text-blue-600">ما هي مميزات هذه الساعة؟ <FontAwesomeIcon className={`${question1 ? "rotate-180" : ""} transition-transform`} icon={faChevronDown} /></h3>
                <p className={`faq-answer bg-[#eee] text-black transition-all duration-300 ${question1 ? "max-h-20 p-1 opacity-100" : "max-h-0 opacity-0"}`}>تتميز هذه الساعة بتصميم أنيق وميزات صحية متقدمة مثل تتبع معدل ضربات القلب والنوم.</p>
            </div>
            <div className="mb-5 sm:mb-10 overflow-hidden sm:me-20 me-0 ms-auto text-right w-fit bg-[#eee] text-black sm:p-4 p-1 pb-1 rounded-sm">
                <h3 onClick={() => setQuestion2(!question2)} className="faq-question mb-2 bg-[#eee] text-black cursor-pointer hover:text-blue-600">هل الساعة مقاومة للماء؟ <FontAwesomeIcon className={`${question2 ? "rotate-180" : ""} transition-transform`} icon={faChevronDown} /></h3>
                <p className={`faq-answer bg-[#eee] text-black transition-all duration-300 ${question2 ? "max-h-20 p-1 opacity-100" : "max-h-0 opacity-0"}`}>نعم، الساعة مقاومة للماء حتى عمق 50 مترًا، مما يجعلها مثالية للاستخدام اليومي.</p>
            </div>
            <div className="mb-5 sm:mb-10 overflow-hidden sm:me-20 me-0 ms-auto text-right w-fit bg-[#eee] text-black sm:p-4 p-1 pb-1 rounded-sm">
                <h3 onClick={() => setQuestion3(!question3)} className="faq-question mb-2 bg-[#eee] text-black cursor-pointer hover:text-blue-600">كيف يمكنني شحن الساعة؟ <FontAwesomeIcon className={`${question3 ? "rotate-180" : ""} transition-transform`} icon={faChevronDown} /></h3>
                <p className={`faq-answer bg-[#eee] text-black transition-all duration-300 ${question3 ? "max-h-20 p-1 opacity-100" : "max-h-0 opacity-0"}`}>يمكن شحن الساعة باستخدام كابل USB المرفق، ويستغرق الشحن الكامل حوالي ساعتين.</p>
            </div>
            <div className="mb-5 sm:mb-10 overflow-hidden sm:me-20 me-0 ms-auto text-right w-fit bg-[#eee] text-black sm:p-4 p-1 pb-1 rounded-sm">
                <h3 onClick={() => setQuestion4(!question4)} className="faq-question mb-2 bg-[#eee] text-black cursor-pointer hover:text-blue-600">هل الساعة تدعم اللغة العربية؟ <FontAwesomeIcon className={`${question4 ? "rotate-180" : ""} transition-transform`} icon={faChevronDown} /></h3>
                <p className={`faq-answer bg-[#eee] text-black transition-all duration-300 ${question4 ? "max-h-20 p-1 opacity-100" : "max-h-0 opacity-0"}`}>نعم، الساعة تدعم اللغة العربية بشكل كامل.</p>
            </div>
            <div className="mb-5 sm:mb-10 overflow-hidden sm:me-20 me-0 ms-auto text-right w-fit bg-[#eee] text-black sm:p-4 p-1 pb-1 rounded-sm">
                <h3 onClick={() => setQuestion5(!question5)} className="faq-question bg-[#eee] text-black  mb-2 cursor-pointer hover:text-blue-600">هل يمكنني الرد على المكالمات؟ <FontAwesomeIcon className={`${question5 ? "rotate-180" : ""} transition-transform`} icon={faChevronDown} /></h3>
                <p className={`faq-answer bg-[#eee] text-black transition-all duration-300 ${question5 ? "max-h-20 p-1 opacity-100" : "max-h-0 opacity-0"}`}>نعم، تحتوي الساعة على ميكروفون وسماعة داخلية للرد على المكالمات.</p>
            </div>
        </div>
    )
}
export default Questions