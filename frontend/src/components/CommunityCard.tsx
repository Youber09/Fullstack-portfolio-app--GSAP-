import type { ReactNode } from "@tanstack/react-router"


const CommunityCard = ({path1,path2,style}: {path1: ReactNode, path2: ReactNode, style: string}) => {
  return (
    <div className={`relative perspective-[clamp(1px,100vw,5000px)] scale-80 z-15 upDown floating-card`} >
        <div className="bg-indigo-500 h-[25vw] w-[25vw] top-[50%] translate-[-50%] left-[50%] absolute blur-[clamp(1px,10vw,1000px)]"></div>
          <div className={`relative perspective-[clamp(1px,100vw,5000px)] transform-3d w-[40vw] aspect-[3/2] rotate-x-35 shadow-white z-20 }`}>


            <svg
              className=" absolute rotate-x-180"
              xmlns="http://www.w3.org/2000/svg"
              id="visual"
              version="1.1"
              viewBox="0 0 900 600"
            >
              <path fill="#715DF2" d="M0 0h900v600H0z"></path>
              <path
                className='patherino'
                fill="#a99df2"
                d="M900 324.5c-42.8-32.1-85.6-64.2-137-87.2s-111.3-37-144-75.1c-32.7-38-38.1-100.1-43.5-162.2H900ZM0 275.5c40.4 36.2 80.8 72.5 132.5 95s114.6 31.3 148.5 67.3c33.9 35.9 38.7 99.1 43.5 162.2H0Z"
              ></path>
              <path
              className=' hidden'
                fill="#a99df2"
                id='merged'
                strokeLinecap="round"
                d="m0 328 25-5.5c25-5.5 75-16.5 125 4.3 50 20.9 100 73.5 150 65.9 50-7.7 100-75.7 150-86.2S550 343 600 371s100 37 150 30.5S850 373 875 362l25-11v250H0Z"
              ></path>
              <path
                className='hidden'
                id='ball'
                d="M590.575 110.881c49.2 25 87.9 84.7 84 140.4-3.9 55.8-50.4 107.6-99.5 154.3-49.2 46.6-101 88.1-162.3 97.5-61.3 9.5-132-13.1-164.2-59.8s-25.8-117.4-12.7-175 32.9-102.2 65-127.2c32.2-25 76.8-30.5 128.8-38 52.1-7.5 111.8-17.2 160.9 7.8"
              ></path>
              <path
                id='steps'
                className='hidden'
                d="M0 468h129v-19h128V305h129v71h128v62h129v-87h128v51h129v-34 233H0Z"
              ></path>
            </svg>

            <svg
              className=" translate-z-[-1vw] absolute"
              xmlns="http://www.w3.org/2000/svg"
              id="visual"
              version="1.1"
              viewBox="0 0 900 600"
            >
                {path1}
                {path2}
              
              
            </svg>

            <div className="absolute bg-primary w-[1vw] h-full translate-z-[-0.5vw] rotate-y-90 translate-x-[-50%]"></div>
            <div className="absolute bg-primary w-[1vw] h-full translate-z-[-0.5vw] rotate-y-90  translate-x-[50%] right-0"></div>
            <div className="absolute bg-primary h-[1vw] w-full top-0 translate-z-[-0.5vw] rotate-x-90 translate-y-[-50%]"></div>
            <div className="absolute bg-primary h-[1vw] w-full bottom-0 translate-z-[-0.5vw] rotate-x-90 translate-y-[50%]"></div>

            <div className="absolute bg-white h-[100%] w-[20%] left-[30%] blur-[clamp(1px,5.5vw,800px)] -rotate-35"></div>


            <p className="text-[clamp(1px,5vw,500px)] absolute right-[5%] top-[0%] translate-z-[0vw] font-[Oswald] font-medium stroke-[100px] stroke-black">Crucks</p>

        </div>

    
    </div>
  )
}

export default CommunityCard