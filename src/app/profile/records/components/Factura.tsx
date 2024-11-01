export default function Factura(){
    return (
        <div className="select-none h-full w-full flex p-3 px-8 shadow-[0px_0px_5px_1px_#a7a7a7] rounded-xl">
            <div className="w-5/6 h-full flex flex-col">
                <div className="w-full"><h2 className="font-koulen text-2xl  text-[#424242]">Compra #121231</h2></div>
                <div className="w-full h-2/5 overflow-hidden pr-3"><h3 className="font-robotoMono text-[#727171]">Kirby Llavero</h3></div>
            </div>

            <div className="w-1/6 h-full flex flex-col justify-evenly pl-2">
            <div><h1 className="font-roboto text-3xl text-[#353535]">0000Lps</h1></div>
            <div><h3 className="font-roboto text-[#353535]">00/00/0000</h3></div>
            </div>
        </div>
    )
}