import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import Correct from "../assets/svgs/Correct"


const Section1 = ({color} : {color: string}) => {


  useGSAP(() => {
    gsap.registerPlugin(SplitText)

    let split = new SplitText('.headText', {type: "words"})
    let words = split.words

    gsap.from(words, {x: '-200%',opacity:0,duration:1.5,ease:"back.out", stagger: 0.1})
  })


  return (
    <section className="relative h-svh  bg-black overflow-hidden grid-bg section z-10">


        

        <div>

          

        </div>


        <div className="flex flex-col absolute top-[50%] translate-y-[-50%] left-[15%]">
            <h1 className="text-[clamp(1px,5vw,400px)]/[clamp(1px,5vw,580px)] tracking-tight font-[Oswald] font-bold headText">Make Credit <br /> Cards. Make <br /> Magic.</h1>
            <p className="text-[clamp(1px,1vw,400px)]/[clamp(1px,1.5vw,550px)] mt-[5%] text-white/70 font-sans">Design and customize professional-looking credit cards for mockups,<br /> portfolios, or creative projects fast, flexible, and free to use.</p>
            <button className=" w-[50%] rounded-[clamp(1px,0.2vw,300px)] font-medium h-[3.5vw] mt-[3%] text-[clamp(1px,1.2vw,400px)] hover:text-[clamp(1px,1.3vw,400px)] cursor-pointer transition-all duration-150 sweep before:absolute relative overflow-hidden font-[Oswald]" style={{backgroundColor: color}}><span className=" text-black/80 font-bold">Start now!</span></button>
            <div className="flex flex-col mt-[5%] w-[30vw]">
              <p className="text-[clamp(1px,1.1vw,1000px)] font-[Oswald] font-light flex"> <Correct style="size-[4%] mr-[1%] items-center mt-[0.8%]" /> Fully customizable</p>
              <p className="text-[clamp(1px,1.1vw,1000px)] font-[Oswald] font-light flex"> <Correct style="size-[4%] mr-[1%] items-center mt-[0.8%]" /> +100 templates</p>
              <p className="text-[clamp(1px,1.1vw,1000px)] font-[Oswald] font-light flex"> <Correct style="size-[4%] mr-[1%] items-center mt-[0.8%]" /> Wonderful community designs</p>
            </div>
        </div>

        
          
    </section>
  )
}

export default Section1