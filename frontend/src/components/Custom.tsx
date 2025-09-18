import { useGSAP } from "@gsap/react"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

const Custom = () => {

  useGSAP(() =>{

    gsap.registerPlugin(ScrollTrigger ,SplitText)

    const text1 = new SplitText('.text-1', {type: 'words'})
    const text2 = new SplitText('.text-2', {type: 'words'})

    let split1 = text1.words
    let split2 = text2.words

    gsap.to('section-3', {
      scrollTrigger: {
        trigger: '.section-3',
        start: '',
        markers: true,
        scrub: 0.5,
        end: '300% top',
        pin: true
      }
    })

    const tlm1 = gsap.timeline({scrollTrigger: {
        trigger: '.section-3',
        start: 'top top',
        markers: true,
        scrub: 0.5,
        end: '150% top',
      },ease: 'power1.in',})

    const tlt1 = gsap.timeline({scrollTrigger: {
        trigger: '.section-3',
        start: '',
        scrub: 0.5,
        end: '40% top',
      }})

    const tlm2 = gsap.timeline({scrollTrigger: {
        trigger: '.section-3',
        start: 'top top',
        markers: true,
        scrub: 0.5,
        end: '150% top',
      },ease: 'power1.in',})

    const tlt2 = gsap.timeline()

    tlm1.from('.image-1', {
      duration: 2,
      ease: 'power1.in',
      rotate: 50,
      translateY: '-100%',
      translateX: '-150%',
      
    }).to('.image-2', {
      duration: 0
    })

    tlt1.from(split1, {
      duration: 2,
      ease: 'power1.in',
      translateX: '-150%',
      stagger: 0.05,
    }).to(split1,{
      opacity: 0,
      translateX: '-150%',
      duration: 2
    })

    tlm2.from('.image-2', {
      duration: 0.5,
      rotate: -50,
      translateY: '100%',
      translateX: '150%',
    }).to('.image-2',{
      duration: 1
    }).to('.image-2', {
      ease: 'none',
      translateX: '150%',
      opacity: 0,
      duration: 0.5
    })

    tlt2.from(split2, {
      duration: 2,
      ease: 'power1.in',
      translateX: '150%',
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.section-3',
        start: '20% bottom',
        scrub: 0.5,
        end: '100% top',
      }
    })

  })


  return (
    <section className='h-svh bg-black/70 flex items-center justify-end relative z-1 section-3'>
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
        className='absolute bottom-0  rotate-180 translate-y-[100%]'
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

    <div className="flex justify-between w-full overflow-hidden h-svh">

      <div className="z-5 image-1">
        <img src={img2} alt="" className="w-[43vw] translate-y-[-20%] relative  rotate-y-180 rotate-10 translate-x-[-20%] " />
        <h2 className="text-[clamp(1px,4vw,1000px)]/[clamp(1px,5vw,1000px)] tracking-normal font-bold font-[Oswald] drop-shadow-black drop-shadow-2xl absolute left-0 bottom-[10%] mx-[1%] w-[20vw] text-1">Upgrade your business</h2>
      </div>

      
    
      <div className="z-5 image-2">
        <img src={img1} alt="" className="w-[43vw] translate-y-[-10%] relative  translate-x-[20%] -rotate-10 " />
        <h2 className="text-[clamp(1px,4vw,1000px)]/[clamp(1px,5vw,1000px)] tracking-normal font-bold font-[Oswald] drop-shadow-black drop-shadow-2xl absolute bottom-[10%] right-0 mx-[1%] w-[20vw] text-end text-2">Purchase with style</h2>
      </div>  
    </div>
    </section>
  )
}

export default Custom