import { useGSAP } from "@gsap/react"
import type { ReactNode } from "@tanstack/react-router"
import gsap from "gsap"
import { MorphSVGPlugin, ScrollTrigger, SplitText } from "gsap/all"
import { useState } from "react"


const Personalizer = ({fn}: {fn: {setPath : Function,setSvg: Function,color1: string, color2: string,path: {path1: ReactNode, path2:ReactNode}}}) => {

    const [morph,setMorph] = useState(1)

    const changePath = (color1: string,color2: string) => {
        fn.setSvg({color1,color2})
        if (morph === 1){
            return {path1:<path id="patherino1" fill={color1} d="M0 0h900v600H0z"></path>,path2:<path id="patherino2"
                            fill={color2}
                            d="M900 324.5c-42.8-32.1-85.6-64.2-137-87.2s-111.3-37-144-75.1c-32.7-38-38.1-100.1-43.5-162.2H900ZM0 275.5c40.4 36.2 80.8 72.5 132.5 95s114.6 31.3 148.5 67.3c33.9 35.9 38.7 99.1 43.5 162.2H0Z"
                        ></path>}
        }
        if (morph === 2){
            return {path1:<path id="patherino1" fill={color1} d="M0 0h900v600H0z"></path>,path2:<path id="patherino2"
                            fill={color2}
                            strokeLinecap="round"
                            d="m0 328 25-5.5c25-5.5 75-16.5 125 4.3 50 20.9 100 73.5 150 65.9 50-7.7 100-75.7 150-86.2S550 343 600 371s100 37 150 30.5S850 373 875 362l25-11v250H0Z"
                        ></path>}
        }
        if (morph === 3) {
            return {path1: <path id="patherino1" fill={color1} d="M0 0h900v600H0z"></path>,path2: <path id="patherino2"
                        fill={color2}
                        d="M532.66 98.145c119.1 55.8 357.2-81.7 444.5-81.7 87.4 0 23.9 137.5-20.6 249.3-44.4 111.9-69.8 198-155.7 200.6-85.8 2.6-232.1-78.3-306.7-2.1-74.6 76.3-77.6 309.7-115.3 369.8-37.6 60-110-53.4-201.6-119.8-91.7-66.4-202.7-85.8-257-148.5-54.3-62.6-52-168.5-9.3-249.6 42.7-81.2 125.9-137.7 194-176.5 68-38.9 121.1-60 170-156.3 48.9-96.2 93.8-267.6 116.2-228.7 22.4 38.8 22.4 287.8 141.5 343.5"
                        ></path>}
        }
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText,MorphSVGPlugin)

        gsap.to(`.section-3`, {
            scrollTrigger: {
                trigger: `.section-3`,
                pin: true,
            },
            duration: 1
        })

        gsap.from(`.colors`, {
            scrollTrigger: {
                trigger: `.section-3`,
                end: `200% top`,
                start: `top bottom`,
                toggleActions: `restart none restart`,
            },
            translateX: `-200%`,
            opacity: 0,
            stagger:0.2,
            duration: 1,
            ease: `sine.out`
        })

        gsap.from(`.SVGs`, {
            scrollTrigger: {
                trigger: `.section-3`,
                end: `200% top`,
                start: `top bottom`,
                toggleActions: `restart none restart`
            },
            opacity: 0,
            stagger:0.2,
            duration: 1,
            translateX: `200%`,
            ease: `sine.out`
        })

        

        const split = new SplitText('.customText', {type:`chars`})
        let chars = split.chars

        gsap.from(chars, {
            scrollTrigger: {
                trigger: `.section-3`,
                end: `center top`,
                start: `100% bottom`,
                scrub: 0.5,
            },
            stagger: 0.1,
            ease: `power4.in`,
            translateY: `200%`
        })

    })


  return (
    <section className='h-svh bg-black/70 flex items-center justify-end relative z-1 section-3 grid-bg'>
        <h2 className=" text-gray-400 absolute text-[clamp(1px,3vw,1000px)] tracking-tight font-bold font-[Oswald] bottom-[5%] left-[50%] translate-x-[-50%] customText">Start customizing now</h2>
      <svg
        className='absolute top-0 translate-y-[-100%] flex flex-col'
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        version="1.1"
        viewBox="0 0 900 600"
    >   
        <path
        fill="#090b0d"
        strokeLinecap="round"
        d="m0 488 21.5-2.7c21.5-2.6 64.5-8 107.3.4 42.9 8.3 85.5 30.3 128.4 24.5 42.8-5.9 85.8-39.5 128.6-48.7 42.9-9.2 85.5 6.2 128.4 17.8C557 491 600 499 642.8 488.8c42.9-10.1 85.5-38.5 128.4-52.6C814 422 857 422 878.5 422H900v179H0Z"
        ></path>
    </svg>

    <svg
        className='absolute bottom-0  rotate-180 translate-y-[100%] scale-101'
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        version="1.1"
        viewBox="0 0 900 600"
    >   
        <path
        className=''
        fill="#090b0d"
        strokeLinecap="round"
        d="m0 488 21.5-2.7c21.5-2.6 64.5-8 107.3.4 42.9 8.3 85.5 30.3 128.4 24.5 42.8-5.9 85.8-39.5 128.6-48.7 42.9-9.2 85.5 6.2 128.4 17.8C557 491 600 499 642.8 488.8c42.9-10.1 85.5-38.5 128.4-52.6C814 422 857 422 878.5 422H900v179H0Z"
        ></path>
    </svg>

    <div className="flex w-full justify-between ">
        <div className="flex flex-col w-[25vw] h-svh bg-white/2 items-center justify-around py-[5%] colors z-20">

            <div onClick={() => {fn.setPath(changePath(`#715df2`,`#a99df2`))}} className="relative w-[70%] my-[5%] rounded-[clamp(0.1px,0.4vw,1000px)] before:absolute overflow-hidden p-[1%] flex h-[20vw] cursor-pointer after:absolute aspect-[3/2] colors">
                <div className="h-full w-[50%] bg-[#715df2] rounded-tl-[clamp(0.1px,0.4vw,1000px)] rounded-bl-[clamp(0.1px,0.4vw,1000px)] z-5 "></div>
                <div className="h-full w-[50%] bg-[#a99df2] rounded-tr-[clamp(0.1px,0.4vw,1000px)] rounded-br-[clamp(0.1px,0.4vw,1000px)] z-5 "></div>
            </div>
            <div onClick={() => {fn.setPath(changePath(`#13ec8d`,`#6ff3ba`))}} className="relative w-[70%] my-[5%] rounded-[clamp(0.1px,0.4vw,1000px)] before:absolute overflow-hidden p-[1%] flex h-[20vw] cursor-pointer after:absolute aspect-[3/2] colors">
                <div className="h-full w-[50%] bg-[#13ec8d] rounded-tl-[clamp(0.1px,0.4vw,1000px)] rounded-bl-[clamp(0.1px,0.4vw,1000px)] z-5 "></div>
                <div className="h-full w-[50%] bg-[#6ff3ba] rounded-tr-[clamp(0.1px,0.4vw,1000px)] rounded-br-[clamp(0.1px,0.4vw,1000px)] z-5 "></div>
            </div>
            <div onClick={() => {fn.setPath(changePath(`#ffcb00`,`#ffe88f`))}} className="relative w-[70%] my-[5%] rounded-[clamp(0.1px,0.4vw,1000px)] before:absolute overflow-hidden p-[1%] flex h-[20vw] cursor-pointer after:absolute aspect-[3/2] colors">
                <div className="h-full w-[50%] bg-[#ffcb00] rounded-tl-[clamp(0.1px,0.4vw,1000px)] rounded-bl-[clamp(0.1px,0.4vw,1000px)] z-5 "></div>
                <div className="h-full w-[50%] bg-[#ffe88f] rounded-tr-[clamp(0.1px,0.4vw,1000px)] rounded-br-[clamp(0.1px,0.4vw,1000px)] z-5 "></div>
            </div>

        </div>
        <div className="flex flex-col w-[25vw] h-svh bg-white/2 items-center justify-around py-[5%] SVGs">

            <div onClick={()=> {setMorph(1);fn.setPath({path1:<path fill={fn.color1} d="M0 0h900v600H0z"></path>,path2:<path
                            fill={fn.color2}
                            d="M900 324.5c-42.8-32.1-85.6-64.2-137-87.2s-111.3-37-144-75.1c-32.7-38-38.1-100.1-43.5-162.2H900ZM0 275.5c40.4 36.2 80.8 72.5 132.5 95s114.6 31.3 148.5 67.3c33.9 35.9 38.7 99.1 43.5 162.2H0Z"
                        ></path>})}} className="relative z-20 my-[5%] w-[70%] aspect-[3/2] rounded-[clamp(0.1px,0.4vw,1000px)] before:absolute overflow-hidden p-[1%] flex SVGs cursor-pointer after:absolute">

                    <svg
                        className="absolute rounded-[clamp(0.1px,0.4vw,1000px)] h-[95%] left-[50%] translate-x-[-50%]"
                        xmlns="http://www.w3.org/2000/svg"
                        id="visual"
                        version="1.1"
                        viewBox="0 0 900 600"
                        >
                        <path fill="#715DF2" d="M0 0h900v600H0z"></path>
                        <path
                            fill="#a99df2"
                            d="M900 324.5c-42.8-32.1-85.6-64.2-137-87.2s-111.3-37-144-75.1c-32.7-38-38.1-100.1-43.5-162.2H900ZM0 275.5c40.4 36.2 80.8 72.5 132.5 95s114.6 31.3 148.5 67.3c33.9 35.9 38.7 99.1 43.5 162.2H0Z"
                        ></path>
                        
                    </svg>

            </div>
            <div onClick={() => {setMorph(2);fn.setPath({path1: <path fill={fn.color1} d="M0 0h900v600H0z"></path>,path2:<path
                            fill={fn.color2}
                            id='merged'
                            strokeLinecap="round"
                            d="m0 328 25-5.5c25-5.5 75-16.5 125 4.3 50 20.9 100 73.5 150 65.9 50-7.7 100-75.7 150-86.2S550 343 600 371s100 37 150 30.5S850 373 875 362l25-11v250H0Z"
                        ></path>})}} className="relative  my-[5%] w-[70%] aspect-[3/2] rounded-[clamp(0.1px,0.4vw,1000px)] before:absolute overflow-hidden p-[1%] flex SVGs cursor-pointer after:absolute ">

                    <svg
                        className="absolute rounded-[clamp(0.1px,0.4vw,1000px)] h-[95%] left-[50%] translate-x-[-50%]"
                        xmlns="http://www.w3.org/2000/svg"
                        id="visual"
                        version="1.1"
                        viewBox="0 0 900 600"
                        >
                        <path fill="#715DF2" d="M0 0h900v600H0z"></path>
                        
                        <path
                            fill="#a99df2"
                            id='merged'
                            strokeLinecap="round"
                            d="m0 328 25-5.5c25-5.5 75-16.5 125 4.3 50 20.9 100 73.5 150 65.9 50-7.7 100-75.7 150-86.2S550 343 600 371s100 37 150 30.5S850 373 875 362l25-11v250H0Z"
                        ></path>
                    </svg>

            </div>
            <div onClick={() => {setMorph(3);fn.setPath({path1:<path fill={fn.color1} d="M0 0h900v600H0z"></path>,path2:<path
                        fill={fn.color2}
                        d="M532.66 98.145c119.1 55.8 357.2-81.7 444.5-81.7 87.4 0 23.9 137.5-20.6 249.3-44.4 111.9-69.8 198-155.7 200.6-85.8 2.6-232.1-78.3-306.7-2.1-74.6 76.3-77.6 309.7-115.3 369.8-37.6 60-110-53.4-201.6-119.8-91.7-66.4-202.7-85.8-257-148.5-54.3-62.6-52-168.5-9.3-249.6 42.7-81.2 125.9-137.7 194-176.5 68-38.9 121.1-60 170-156.3 48.9-96.2 93.8-267.6 116.2-228.7 22.4 38.8 22.4 287.8 141.5 343.5"
                        ></path>})}} className="relative my-[5%] w-[70%] aspect-[3/2] rounded-[clamp(0.1px,0.4vw,1000px)] before:absolute overflow-hidden p-[1%] flex SVGs cursor-pointer after:absolute ">

                    <svg
                        className="absolute rounded-[clamp(0.1px,0.4vw,1000px)] h-[95%] left-[50%] translate-x-[-50%]"
                        xmlns="http://www.w3.org/2000/svg"
                        id="visual"
                        version="1.1"
                        viewBox="0 0 900 600"
                        >
                        <path fill="#715DF2" d="M0 0h900v600H0z"></path>
                        <path
                        fill="#a99df2"
                        d="M532.66 98.145c119.1 55.8 357.2-81.7 444.5-81.7 87.4 0 23.9 137.5-20.6 249.3-44.4 111.9-69.8 198-155.7 200.6-85.8 2.6-232.1-78.3-306.7-2.1-74.6 76.3-77.6 309.7-115.3 369.8-37.6 60-110-53.4-201.6-119.8-91.7-66.4-202.7-85.8-257-148.5-54.3-62.6-52-168.5-9.3-249.6 42.7-81.2 125.9-137.7 194-176.5 68-38.9 121.1-60 170-156.3 48.9-96.2 93.8-267.6 116.2-228.7 22.4 38.8 22.4 287.8 141.5 343.5"
                        ></path>
                    </svg>

            </div>
            <div>
                {fn.path.path1}
                {fn.path.path2}
            </div>

        </div>
    </div>
    

    </section>
  )
}

export default Personalizer