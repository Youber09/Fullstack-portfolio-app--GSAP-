
import { createFileRoute } from '@tanstack/react-router'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Personalizer from '../components/Personalizer'
import { useState } from 'react'
import Card from '../components/Card'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {


  const [{color1,color2},setSvg] = useState({color1: `#715DF2`,color2: `#a99df2`})
  const [path,setPath] = useState(
                        {path1: <path id="patherino1" fill={color1} d="M0 0h900v600H0z"></path>,path2:<path id="patherino2"
                            fill={color2}
                            d="M900 324.5c-42.8-32.1-85.6-64.2-137-87.2s-111.3-37-144-75.1c-32.7-38-38.1-100.1-43.5-162.2H900ZM0 275.5c40.4 36.2 80.8 72.5 132.5 95s114.6 31.3 148.5 67.3c33.9 35.9 38.7 99.1 43.5 162.2H0Z"
                        ></path>})
  
  
  return <>

    

    <div className="light-ray absolute top-[-260%] left-[-55%] w-[200%] h-[400%] rotate-135 blur-[clamp(1px,4vw,800px)] pointer-events-none z-20"></div>
    <div className="light-ray absolute top-[-260%] left-[-55%] w-[200%] h-[400%] rotate-135 blur-[clamp(1px,4vw,800px)] pointer-events-none z-20"></div>
    <div className="light-ray absolute top-[-260%] left-[-55%] w-[200%] h-[400%] rotate-135 blur-[clamp(1px,4vw,800px)] pointer-events-none z-20"></div>

    <div className=" absolute bg-white/50 backdrop-blur-[clamp(1px,0.5vw,400px)] top-[60%] right-[38%] border-white/80 border-[clamp(0.1px,0.2vw,400px)] rounded-full p-[3%] z-20 upDown -rotate-20">
            <svg
              className="w-[8vw] h-[8vw]"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="800"
              height="800"
              viewBox="0 0 50.8 50.8"
            >
              <path
                fill="none"
                stroke="#000b"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="0"
                strokeWidth="2.175"
                d="M25.294 44.98 42.07 5.82H12.7l5.822 9.79-9.79 9.26h15.346"
              ></path>
            </svg>
          </div>

          <div className=" absolute bg-white/50 backdrop-blur-[clamp(1px,0.5vw,400px)] top-[55%] right-[5%] border-white/80 border-[clamp(0.1px,0.2vw,400px)] rounded-full p-[2%] z-20 upDown rotate-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[8vw] h-[8vw]"
              width="800"
              height="800"
              fill="#fff0"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#0009"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 8.5h5.5c2.5 0 2.5 3.5 0 3.5h-3M10.5 12h3c2.5 0 2.5 3.5 0 3.5H8M10 17V7M13 8.5V7M13 17v-1.5"
              ></path>
            </svg>
           </div> 

           <div className=" absolute bg-white/50 backdrop-blur-[clamp(1px,0.5vw,400px)] top-[25%] right-[42%] border-white/80 border-[clamp(0.1px,0.2vw,400px)] rounded-full p-[2%] z-20 upDown rotate-10">
            <svg
              className="w-[6vw] h-[6vw]"
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              stroke="#000b"
              strokeWidth="3"
              viewBox="0 0 64 64"
            >
              <path d="M20.55 49.27h-7.74a1.81 1.81 0 0 1-1.81-2.1L17 11a1.79 1.79 0 0 1 1.77-1.5H38.5s11.07 0 10 11.13"></path>
              <path d="m20.77 52.45 5.14-31.15a1.81 1.81 0 0 1 1.78-1.51h15.2s11.63-.79 9.93 11.26c-1.35 9.63-9.3 11.45-11.53 11.58-1.69.1-4.9 0-6.37 0a.89.89 0 0 0-.9.74l-1.85 10.44a.9.9 0 0 1-.89.74h-8.74a1.79 1.79 0 0 1-1.77-2.1Z"></path>
            </svg>
           </div> 
    
    <Card data={{path,color1}} />
    <Section1 color={color1} />
    <Section2 />
    <Personalizer fn={{setPath,setSvg,color1,color2,path}} />
    <Section3 color={{color1,color2}} />
    <Section4 color={color1} />
    <Footer />

  </>

}
