import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"


const Video = () => {

    useGSAP(() => {

        gsap.registerPlugin( SplitText)

        const splited = new SplitText(`.videoBTN`, {type: `chars`})
        const text = splited.chars
        gsap.from(text, {
            duration: 0.2,
            translateX: `-200%`,
            opacity: 0,
            scale: 0,
            ease: `sine`,
            stagger:0.05
        })
        gsap.from(`.videoBTN`, {
            duration: 0.5,
            translateX: `-200%`,
            opacity: 0,
            scale: 0,
            ease: `sine`,
            stagger:0.05
        })
    })
  return (
    <div className='h-svh bg-white grid-bg relative'>
      <button className='videoBTN bg-red-500 p-[2%] text-black text-[clamp(1px,5vw,1000px)] font-bold font-[Oswald] rounded-[clamp(1px,2vw,1000px)] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer '>Subscribe !</button>
    </div>
  )
}

export default Video