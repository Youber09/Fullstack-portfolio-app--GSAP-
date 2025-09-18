import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import _SplitText from "gsap/SplitText"
import { useId } from "react"


const Text = () => {


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText)

        let splitH = new SplitText('.splitH',{type:'chars'})
        let splitT = new SplitText('.splitT',{type: 'lines'})

        let hLines = splitH.chars
        let tLines = splitT.lines

        const tTL = gsap.timeline({
            scrollTrigger: {
                trigger: `.Tsection`,
                scrub: 0.05,
                start: `top top`,
                end: `300% center`,
                markers: true,
            }
        }).from(tLines, {
            duration: 2
        }).from(tLines, {
            duration: 4,
            opacity: 0,
            translateX: `-200%`,
            stagger: 0.2,
            ease: `power4.out`,
            
        })

        const hTL = gsap.timeline({
            scrollTrigger: {
                trigger: `.Tsection`,
                scrub: 0.05,
                start: `top top`,
                end: `200% center`,
                markers: true,
                pin: true
            }
        }).from(hLines,{
            duration: 1,
            opacity: 0,
            translateY: `-100%`,
            stagger: 0.5,
            ease: `back.out`,
        })
    })
    



  return (
    <section className='h-svh bg-black flex items-center justify-start relative overflow-hidden grid-bg Tsection'>
     <div className=" flex flex-col justify-center ml-[8%]">
        <h2 className="text-[clamp(1px,7vw,1000px)] tracking-tight font-[Oswald] font-bold text-start splitH">SVG designs</h2>
        <p className="text-[clamp(1px,1vw,400px)]/[clamp(1px,1.7vw,550px)] text-white/80 font-sans splitT">
            Our app uses powerful SVG technology to let you design <br /> fully customizable credit cards with sharp, responsive visuals. <br />
            From gradients and patterns to logos and chip details, every element <br /> is rendered in crisp vector format that looks perfect on any screen. <br />
            SVGs keep your designs lightweight, fast-loading, and <br /> pixel-perfect—no matter the size. With intuitive tools and live previews, <br /> you can craft high-quality cards that reflect your style or brand, <br /> all with precision and ease.
        </p>
        <button className="bg-primary w-[50%] rounded-[clamp(1px,0.2vw,300px)] font-medium font-sans h-[3.5vw] mt-[6%] text-[clamp(1px,1vw,400px)] hover:text-[clamp(1px,1.2vw,400px)] cursor-pointer transition-all duration-150 sweep before:absolute relative overflow-hidden ">Create your own</button>
     </div>
      
    </section>
  )
}

export default Text