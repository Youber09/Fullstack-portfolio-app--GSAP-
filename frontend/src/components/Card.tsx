import { useGSAP } from '@gsap/react'
import type { ReactNode } from '@tanstack/react-router'
import gsap from 'gsap'
import { MorphSVGPlugin, ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Card = ({data} : {data :{path: {path1:ReactNode,path2:ReactNode},color1: string}}) => {

    const card = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin)


    useGSAP(() => {


      const cardTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.section',
          start: '100% bottom',
          end: '500% top',
          scrub: 0.5,
        }
      })

      cardTL.to(card.current,{
        x: '-110%',
        rotateY: 410,
        rotateX: 10,
        duration: 4,
        
      }).to(card.current, {
        duration: 2 ,
        scale: 1,
        top: `50%`,
        left: `50%`,
        translate: `0% 0%`,
        ease: `power1.out`,
        rotate: 0,
      }).to(card.current,{
        duration: 2,
        translateX: `-50%`,
        rotateY: 360,
        rotateX: 30
      }).to(card.current, {
        duration: 3.5
      }).to(card.current, {
        duration: 7.5,
        translateY: `-200%`
      })

        
        
    })


  return (
    <div className="fixed perspective-[clamp(1px,100vw,5000px)] top-[50%] left-[50%] translate-y-[-50%]  w-0 z-15 upDown floating-card" >
          <div className="relative perspective-[clamp(1px,100vw,5000px)] transform-3d w-[40vw] aspect-[3/2] -rotate-y-20 rotate-x-30 rotate-5 shadow-white z-20 " ref={card}>


            <svg
              className=" absolute rotate-x-180"
              xmlns="http://www.w3.org/2000/svg"
              id="visual"
              version="1.1"
              viewBox="0 0 900 600"
            >
              {data.path.path1}
              {data.path.path2}
            </svg>

            <svg
              className=" translate-z-[-1vw] absolute"
              xmlns="http://www.w3.org/2000/svg"
              id="visual"
              version="1.1"
              viewBox="0 0 900 600"
            >
              {data.path.path1}
              {data.path.path2}
            </svg>

            <div className={`absolute w-[1vw] h-full translate-z-[-0.5vw] rotate-y-90 translate-x-[-50%] `} style={{backgroundColor: data.color1}}></div>
            <div className={`absolute w-[1vw] h-full translate-z-[-0.5vw] rotate-y-90  translate-x-[50%] right-0 `} style={{backgroundColor: data.color1}}></div>
            <div className={`absolute h-[1vw] w-full top-0 translate-z-[-0.5vw] rotate-x-90 translate-y-[-50%] `} style={{backgroundColor: data.color1}}></div>
            <div className={`absolute h-[1vw] w-full bottom-0 translate-z-[-0.5vw] rotate-x-90 translate-y-[50%] `} style={{backgroundColor: data.color1}}></div>

            <div className="absolute bg-white h-[100%] w-[20%] left-[30%] blur-[clamp(1px,5.5vw,800px)] -rotate-35"></div>


            <p className="text-[clamp(1px,5vw,500px)] absolute right-[5%] top-[0%] translate-z-[0vw] font-[Oswald] font-medium stroke-[100px] stroke-black select-none">Crucks</p>

        </div>

    
    </div>
  )
}

export default Card