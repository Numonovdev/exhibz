import pavel from "../img/pavel.png"

function Main(){
    return(
        <div className="p-5 text-white  pt-20  min-h-[100vh] ">
            <div className="w-full h-[900px] bg-blue-950 rounded-lg px-4">
                <div className="container mx-auto flex items-center h-full">
                    <div className="flex flex-col gap-10 w-[50%]">
                        <div className="flex flex-wrap gap-5 text-[14px]">
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-transparent border-8 border-blue-700"><span className="font-bold text-center">138<br />DAYS</span></div>
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-transparent border-8 border-blue-700"><span className="font-bold text-center">24<br />HPURS</span></div>
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-transparent border-8 border-blue-700"><span className="font-bold text-center">60<br />MINUTES</span></div>
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-transparent border-8 border-blue-700"><span className="font-bold text-center">60<br />SECONDS</span></div>
                        </div>
                        <h1 className="text-7xl font-bold xl:text-6xl md:text-4xl lg:text-5xl sm:text-xl">
                        Gives you all you need to know
                        </h1>
                        <p className="text-xl tracking-wider font-bold">
                        5 to 7 June 2025, Waterfront Conference, London, United Kingdom
                        </p>
                        <button className="btn btn-secondary w-36">BUY TICKET</button>
                    </div>
                    <div>
                        <img className="w-[700px]" src={pavel} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main