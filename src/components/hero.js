import { Link } from "react-router-dom";
import "./hero.css";
import logo from "../image/heero&llogo.png"
import { useState,useEffect} from 'react';
function Hero(){
    const [hero, setHero] = useState('');
    
      useEffect(() => {
        const sentence = [' ساعة', ' ذكية', ' بتصميم', ' أنيق،', ' وأداء', ' يفوق', ' التوقعات'];
        const speed = 300;
        let index = 0;
        function displayNextLetter() {
          if (index < sentence.length) {
            const nextChar = sentence[index];
            setHero(prev => prev + nextChar);
            index++;
            setTimeout(displayNextLetter, speed);
          } else {
            setTimeout(() => {
              setHero('');
              index = 0;
              setTimeout(displayNextLetter, speed);
            }, 2000);
          }
        }
    
        displayNextLetter();
      }, []);
    return(
        <div className="hero text-center transition-all">
            <Link to={"/booking"} className="w-52 block cursor-pointer hover:animate hover:scale-105 transition-all h-64 mx-auto py-4">
                <img src={logo} alt="Smart Watch" className="w-full h-full" />
            </Link>
                <h2 className="text-white min-h-16 mt-3 text-2xl md:text-3xl text-right pe-3 md:pe-16">{hero}</h2>
            <p className="max-w-96 m-auto md:text-xl text-purple-600">اكتشف قوة التكنولوجيا على معصمك. ساعة ذكية تجمع بين الأناقة، الأداء، والوظائف الذكية لتبقيك متصلاً ونشطًا طوال اليوم. مثالية للرياضيين، المحترفين، وكل من يسعى لحياة أكثر تنظيمًا وذكاء.</p>
        </div>
    )
}
export default Hero;