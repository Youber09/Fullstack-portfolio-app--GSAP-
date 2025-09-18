import Badge from "../assets/svgs/Badge"
import Gift from "../assets/svgs/Gift"
import Pen from "../assets/svgs/Pen"
import PriceLabel from "./PriceLabel"


const Section4 = ({color} : {color: string}) => {
  return (
    <section className='h-[200svh] bg-black flex items-center flex-col relative grid-bg z-10'>
      <svg
        className='absolute top-0 translate-y-[-100%] scale-[101%] flex flex-col'
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        version="1.1"
        viewBox="0 0 900 600"
    >   
        <path
        fill="fff"
        strokeLinecap="round"
        d="m0 488 21.5-2.7c21.5-2.6 64.5-8 107.3.4 42.9 8.3 85.5 30.3 128.4 24.5 42.8-5.9 85.8-39.5 128.6-48.7 42.9-9.2 85.5 6.2 128.4 17.8C557 491 600 499 642.8 488.8c42.9-10.1 85.5-38.5 128.4-52.6C814 422 857 422 878.5 422H900v179H0Z"
        ></path>
      </svg>
      <h2 className="text-[clamp(1px,7vw,1000px)]/[clamp(1px,7vw,1000px)] font-semibold font-[Oswald] tracking-tight text-center mt-[5%]">Save time creating<br />3D Cards</h2>
      <p className=" text-[clamp(1px,1.5vw,1000px)] tracking-wider font-[Oswald] font-medium mt-[2%] text-white/80 relative flex w-full justify-center"><Gift/> Start <span className="text-green-400/80 ml-[0.5%]">free</span>, Upgrade Later</p>
        
      <div className="flex w-[90%] justify-around mt-[5%] relative">

        <div className="bg-stone-800 w-[25vw] p-[5vw] py-[4vw] rounded-[clamp(0.1px,1vw,1000px)] glowBG before:absolute after:absolute relative">
          <h2 className="text-[clamp(1px,2.5vw,1000px)] font-bold font-[Oswald] text-white/75">Starter</h2>
          <div className="flex items-end mb-[6%] mt-[-5%]">
            <p className="text-[clamp(1px,5vw,1000px)] font-bold font-[Oswald] text-green-500/90">$0</p>
            <h2 className="text-[clamp(1px,1.2vw,1000px)] font-bold font-[Oswald] text-white/45 translate-x-[20%] translate-y-[-60%]">USD</h2>
          </div>
          <hr className="text-white/10 mb-[5%] mt-[-4%]" />
          <div className="flex flex-col justify-between h-[35vw]">
            <PriceLabel text={`Infinite colors`} checked={true} />
            <PriceLabel text={`3D Models`} checked={true} />
            <PriceLabel text={`Native support`} checked={true} />
            <PriceLabel text={`Community design access`} checked={true} />
            <PriceLabel text={`Imported SVGs`} checked={true} />
            <PriceLabel text={`Posting designs`} checked={true} />
            <PriceLabel text={`Importing Images`} checked={true} />
            <PriceLabel text={`Templates access`} checked={true} />
            <PriceLabel text={`Limitless exports`} checked={false} />
            <PriceLabel text={`Official Credit Card`} checked={false} />
            <PriceLabel text={`Infinite Images`} checked={false} />
          </div>
          <button className="text-black/100 text-[clamp(1px,1.6vw,1000px)] font-[Oswald] font-medium w-full rounded-[clamp(0.1px,1vw,1000px)] mt-[15%] flex p-[5%] items-center justify-center relative cursor-pointer sweep before:absolute overflow-hidden hover:scale-105 transition-all duration-300" style={{backgroundColor: color}}><Pen /> Sign up</button>
          
        </div>


        <div className="bg-stone-800 w-[25vw] p-[5vw] py-[4vw] rounded-[clamp(0.1px,1vw,1000px)] glowBG before:absolute after:absolute relative">
          <h2 className="text-[clamp(1px,2.5vw,1000px)] font-bold font-[Oswald] text-white/75 ">Pro <span className="text-yellow-500 text-[clamp(1px,1.5vw,1000px)]">Monthly</span> <Badge style="z-5"/> <Badge style="blur-[clamp(1px,1vw,1000px)] z-0 scale-105" /></h2>
          <div className="flex items-end mb-[6%] mt-[-5%]">
            <p className="text-[clamp(1px,5vw,1000px)] font-bold font-[Oswald] text-green-500/90">$20</p>
            <h2 className="text-[clamp(1px,1.2vw,1000px)] font-bold font-[Oswald] text-white/45 translate-x-[20%] translate-y-[-60%]">USD/month</h2>
          </div>
          <hr className="text-white/10 mb-[5%] mt-[-4%]" />
          <div className="flex flex-col justify-between h-[35vw]">
            <PriceLabel text={`Infinite colors`} checked={true} />
            <PriceLabel text={`3D Models`} checked={true} />
            <PriceLabel text={`Native support`} checked={true} />
            <PriceLabel text={`Community design access`} checked={true} />
            <PriceLabel text={`Imported SVGs`} checked={true} />
            <PriceLabel text={`Posting designs`} checked={true} />
            <PriceLabel text={`Importing Images`} checked={true} />
            <PriceLabel text={`Templates access`} checked={true} />
            <PriceLabel text={`Limitless exports`} checked={true} />
            <PriceLabel text={`Official Credit Card`} checked={true} />
            <PriceLabel text={`Infinite Images`} checked={true} />
          </div>
          <button className="text-black/100 text-[clamp(1px,1.6vw,1000px)] font-[Oswald] font-medium w-full rounded-[clamp(0.1px,1vw,1000px)] mt-[12%] flex p-[5%] items-center justify-center relative cursor-pointer sweep before:absolute overflow-hidden hover:scale-105 transition-all duration-300" style={{backgroundColor: color}}><Pen />Get Pro</button>
          
        </div>

        <div className="bg-stone-800 w-[25vw] p-[5vw] py-[4vw] rounded-[clamp(0.1px,1vw,1000px)] glowBG before:absolute after:absolute relative">
          <h2 className="text-[clamp(1px,2.5vw,1000px)] font-bold font-[Oswald] text-white/75">Super <span className="text-yellow-500 text-[clamp(1px,1.5vw,1000px)]">Yearly</span></h2>
          <div className="flex items-end mb-[6%] mt-[-5%]">
            <p className="text-[clamp(1px,5vw,1000px)] font-bold font-[Oswald] text-green-500/90">$199</p>
            <h2 className="text-[clamp(1px,1.2vw,1000px)] font-bold font-[Oswald] text-white/45 translate-x-[20%] translate-y-[-60%]">USD/year</h2>
          </div>
          <hr className="text-white/10 mb-[5%] mt-[-4%]" />
          <div className="flex flex-col justify-between h-[35vw]">
            <PriceLabel text={`Infinite colors`} checked={true} />
            <PriceLabel text={`3D Models`} checked={true} />
            <PriceLabel text={`Native support`} checked={true} />
            <PriceLabel text={`Community design access`} checked={true} />
            <PriceLabel text={`Imported SVGs`} checked={true} />
            <PriceLabel text={`Posting designs`} checked={true} />
            <PriceLabel text={`Importing Images`} checked={true} />
            <PriceLabel text={`Templates access`} checked={true} />
            <PriceLabel text={`Limitless exports`} checked={true} />
            <PriceLabel text={`Official Credit Card`} checked={true} />
            <PriceLabel text={`Infinite Images`} checked={true} />
          </div>
          <button className="text-black/100 text-[clamp(1px,1.6vw,1000px)] font-[Oswald] font-medium w-full rounded-[clamp(0.1px,1vw,1000px)] mt-[12%] flex p-[5%] items-center justify-center relative cursor-pointer sweep before:absolute overflow-hidden hover:scale-105 transition-all duration-300" style={{backgroundColor: color}}><Pen />Get Pro <span className="text-black text-[clamp(1px,1vw,1000px)] translate-y-[10%]">(%17 OFF)</span></button>
          
        </div>
        
      </div>
    </section>
  )
}

export default Section4