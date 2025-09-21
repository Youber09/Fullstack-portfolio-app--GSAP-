import Loading2 from "../assets/svgs/Loading2"


const Loading = ({className,className2} : {className: string,className2: string}) => {
  return (
    <div className={`h-svh w-full bg-black fixed flex flex-col justify-center items-center z-30 overflow-hidden  ${className}`}>
        <Loading2 />
        <p className={`font-[Oswald] text-[2vw] font-bold text-[#e12afb] ${className2}`}>Loading..</p>
    </div>
  )
}

export default Loading