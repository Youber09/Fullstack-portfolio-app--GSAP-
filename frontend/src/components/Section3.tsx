import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Svg1 from "../assets/svgs/Svg1"
import Svg2 from "../assets/svgs/Svg2"
import Svg3 from "../assets/svgs/Svg3"
import Search from "../assets/svgs/Search"



const Section3 = ({color}: {color: {color1: string, color2: string}}) => {


  useGSAP(() => {
    gsap.registerPlugin(SplitText,ScrollTrigger )

    const text = new SplitText('.more-text', {type: 'chars'})
    const chars = text.chars


    const text2 = new SplitText('.lies', {type: 'words'})
    const words = text2.words

    gsap.from(chars,{
      translateX : `-200%`,
      duration: 1,
      ease: `power3.out`,
      scrollTrigger: { 
        trigger: '.more-text',
        toggleActions: `restart none`,
      },
      opacity: 0,
      stagger: 0.05
    })

    gsap.from(words,{
      translateX : `-200%`,
      duration: 1,
      ease: `power3.out`,
      scrollTrigger: { 
        trigger: '.lies',
        toggleActions: `restart none`,
        start: `-20% bottom`
      },
      opacity: 0,
      stagger: 0.2
    })

    gsap.from('.Svg1',{
      translateX : `150%`,
      duration: 1,
      ease: `power3.out`,
      scrollTrigger: { 
        trigger: '.lies',
        toggleActions: `restart none`,
        start: `-20% bottom`,
        end : `120% top`
      },
      opacity: 0,
    })

    const text3 = new SplitText(`.false-alert`, {type: "words"})
    const words2 = text3.words

    gsap.from(words2,{
      translateX : `-150%`,
      duration: 1,
      ease: `power3.out`,
      scrollTrigger: { 
        trigger: '.false-alert',
        toggleActions: `restart none`,
        start: `-35% bottom`
      },
      opacity: 0,
      stagger: 0.2
    })

    const text4 = new SplitText(`.false-alert-two`, {type: "words"})
    const words3 = text4.words

    gsap.from(words3,{
      translateX : `150%`,
      duration: 1,
      ease: `power3.out`,
      scrollTrigger: { 
        trigger: '.false-alert-two',
        toggleActions: `restart none`,
        start: `-35% bottom`
      },
      opacity: 0,
      stagger: 0.2
    })

    gsap.from('.Svg2',{
      translateY : `150%`,
      duration: 1,
      ease: `power3.out`,
      scrollTrigger: { 
        trigger: '.false-alert',
        toggleActions: `restart none`,
        start: `-35% bottom`,
        end : `120% top`
      },
      opacity: 0,
    })


    const text5 = new SplitText(`.fuchsia-thing`, {type: "words"})
    const words4 = text5.words

    gsap.from(words4,{
      translateX : `150%`,
      duration: 2,
      ease: `power3.out`,
      scrollTrigger: { 
        trigger: '.fuchsia-thing',
        toggleActions: `restart none`,
        start: `-5% bottom`
      },
      opacity: 0,
      stagger: 0.2
    })

    gsap.from(`.fuchsia-thing`,{
      translateX : `150%`,
      duration: 1,
      ease: `power3.out`,
      scrollTrigger: { 
        trigger: '.fuchsia-thing',
        toggleActions: `restart none`,
        start: `-5% bottom`
      },
      opacity: 0,
      stagger: 0.2
    })

  })

  return (
    <section className='h-[470svh]  flex items-center justify-end relative overflow-hidden grid-bg section-n-3' style={{backgroundColor: color.color1}}>

      <div className="w-full flex flex-col z-5  relative top-0" >

        <h2 className="text-[clamp(1px,8vw,1000px)] font-bold font-[Oswald] text-center tracking-tight more-text ">There's MORE</h2>
        <div className="flex mx-[5%] mt-[5%] justify-around items-center relative">
          <div className="text-[clamp(1px,5vw,1000px)]/[clamp(1px,7vw,1000px)] font-[Oswald] font-bold lies upDown">
            <span className="text-[clamp(1px,13vw,1000px)] tracking-tight text-black ">+10.000</span><br />
            <span>Community designs</span><br />
            <div className=" text-[2.5vw] font-medium bg-fuchsia-500 rounded-[0.5vw] px-[2%] m-[3%] mx-[20%] flex justify-center relative sweep before:absolute overflow-hidden hover:scale-102 cursor-pointer transition-all drop-shadow-2xl"><span className="translate-x-[-15%]">Explore</span><Search /></div>
          </div>
          <Svg1 />
        </div>
        <div className="flex mx-[5%] mt-[0%] justify-around items-center">
          <h3 className="text-[clamp(1px,7vw,1000px)]/[clamp(1px,7vw,1000px)] font-[Oswald] font-bold text-white false-alert upDown2"><span className="text-[clamp(1px,10vw,1000px)] tracking-tight text-black">FREE</span><br /><span className="text-[clamp(1px,23vw,1000px)]">to</span><br /><span className="text-[clamp(1px,13vw,1000px)]">use</span></h3>
          <Svg2 />
          <h3 className="text-[clamp(1px,7vw,1000px)]/[clamp(1px,7vw,1000px)] font-[Oswald] font-bold text-black false-alert-two upDown2"><span className="text-[clamp(1px,10vw,1000px)] tracking-tight text-white">FREE</span><br /><span className="text-[clamp(1px,23vw,1000px)]">to</span><br /><span className="text-[clamp(1px,13vw,1000px)]">use</span></h3>
        </div>
        <div className="flex mt-[5%] relative justify-center items-center w-full overflow-hidden fuchsia-thing">
          <div className="p-[0%] px-[8%] rounded-[clamp(1px,5vw,1000px)] bg-fuchsia-500">
            <div className="z-10">
              <Svg3 colors={color.color2} />
            </div>
            
            <div className="flex absolute top-[43%] left-[15%] z-0 ">
              <p className="text-black font-[Oswald] font-extrabold tracking-tight text-[clamp(1px,15vw,1000px)]/[clamp(1px,15vw,1000px)] upDown3 z-0">GET IN TOUCH!!</p>
            </div>
          </div>
          
          
        </div>
      </div>

    </section>
  )
}

export default Section3

