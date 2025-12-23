import { useState } from "react"
import image1 from "../image/Rollme-R1-smartwatch.jpg"
import image3 from "../image/ef43dba4-429b-4ced-a6f9-a3af0c959251.png"
import image4 from "../image/images (1).jpg"
import image5 from "../image/images.jpg"
import image6 from "../image/تنزيل (1).jpg"
import image7 from "../image/تنزيل (2).jpg"
import image8 from "../image/تنزيل.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLessThan } from "@fortawesome/free-solid-svg-icons/faLessThan"
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons/faGreaterThan"
function Images(){
    const images = [image1,image3, image4, image5, image6, image7, image8]
    const [image,setImage]=useState(images[0])
    const changeImage=(type)=>{
        if(type==="next"){
            if(images.indexOf(image) === images.length - 1) return;
            setImage(images[images.indexOf(image) + 1])

        }else{
            if(images.indexOf(image) === 0) return;
            setImage(images[images.indexOf(image) - 1])
        }
    }
    let active= images.indexOf(image)
    let before="before:opacity-30 before:top-0 before:left-0 relative before:absolute before:h-full before:w-full before:bg-blue-600 before:z-10 before:content-['']"
        return (
        <div id="images" className=" bg-gray-100 p-6 container m-auto">
            <h2 className="main-title text-center mb-8">اختار ساعتك  بعناية </h2>
            <div className="w-64 sm:h-96 sm:w-96 h-64 relative m-auto">
            <span onClick={() => changeImage("prev")} className="absolute sm:w-12 sm:h-12 h-7 w-7 -left-10 -translate-y-1/2 top-1/2 z-20 bg-gray-400 cursor-pointer hover:bg-gray-800 transition-all flex justify-center items-center text-white"><FontAwesomeIcon icon={faLessThan} /></span>
            <span onClick={() => changeImage("next")} className="absolute sm:w-12 sm:h-12 h-7 w-7 -right-10 -translate-y-1/2 top-1/2 z-20 bg-gray-400 cursor-pointer hover:bg-gray-800 transition-all flex justify-center items-center text-white"><FontAwesomeIcon icon={faGreaterThan} /></span>
                <img src={image} alt={`Image selected`} className="w-full h-full relative hover:scale-105 transition-transform" />
            </div>
            <div className="flex justify-center items-center md:p-6 p-2 mt-2 md:mt-4 pt-0">
            {
            images.map((image, index) => (
                <div className={`w-20 h-20 sm:w-32 sm:h-32 sm:p-2 p-1 border bg-gray-200  border-gray-300 ${active === index ? "bg-gray-400 border-gray-500" : before} `} key={index}>
                    <img src={image} alt={`Image ${index + 1}`} className="w-full h-full mb-4" />
                </div>
            ))
           }
        </div>
         {/* width="560" height="315" */}
        <iframe className="my-video m-auto"  src="https://www.youtube.com/embed/t1NGsHKRmRo?si=VfmlFCHX1TWNG2qZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
export default Images;