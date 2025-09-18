import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const Section2 = () => {

  useGSAP(()=> {
    gsap.registerPlugin(SplitText, ScrollTrigger)

    let split1 = new SplitText('.split1', {type: "chars"})
    let split2 = new SplitText('.split2', {type: "chars"})
    let chars1 = split1.chars
    let chars2 = split2.chars

    gsap.from(chars1,{
      y: "-120%",
      duration: 1.5,
      ease: "back.out",
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.split1',
        toggleActions: 'restart none none none',
        scrub: 1,
        start: "top 70%",
        end: '-55% 20%'
      },
    })

    gsap.from(chars2,{
      y: "120%",
      duration: 1.5,
      ease: "back.out",
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.split2',
        toggleActions: 'restart none none none',
        scrub: 1,
        start: "top 70%",
        end: '-55% 20%'
      },
    })


  })

  return (
    <section className='h-svh bg-black flex items-center justify-end relative overflow-hidden grid-bg'>
      <div className=" flex flex-col items-center justify-around mr-[5%]">
        <h2 className="font-[Oswald] text-[clamp(1px,24vw,2000px)]/[clamp(1px,21vw,2000px)] font-bold stroke-[200px] stroke-black split1 z-15">FREE</h2>
        <h2 className="font-[Oswald] text-[clamp(1px,26vw,2000px)]/[clamp(1px,21vw,2000px)] font-bold stroke-[200px] stroke-black split2 z-15">DOM</h2>
      </div>
      
    </section>
  )
}

export default Section2