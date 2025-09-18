

const PriceLabel = ({text,checked}: {text: string, checked: boolean}) => {
  return (
    <div className="flex">
        {checked ? 
        <svg
            className="w-[1.4vw] h-[1.4vw] translate-y-[20%] mr-[5%]"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="Capa_1"
            width="800"
            height="800"
            fill="#fff7"
            version="1.1"
            viewBox="0 0 335.765 335.765"
            strokeWidth=""
        >
            <path d="M311.757 41.803 107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z"></path>
        </svg> : 
    <svg
        className="w-[1.4vw] h-[1.4vw] translate-y-[25%] mr-[5%]"
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        width="800"
        height="800"
        fill="#fff5"
        data-name="Layer 1"
        viewBox="0 0 200 200"
    >
        <path d="m114 100 49-49a9.9 9.9 0 0 0-14-14l-49 49-49-49a9.9 9.9 0 0 0-14 14l49 49-49 49a9.9 9.9 0 0 0 14 14l49-49 49 49a9.9 9.9 0 0 0 14-14Z"></path>
    </svg>
  }
        <p className={`text-[clamp(1px,1.3vw,1000px)]/[clamp(1px,2vw,1000px)] font-[Oswald] font-medium  ${checked ? `text-white/70`: `text-white/40`}`}>
            {text}
        </p>
    </div>
  )
}

export default PriceLabel