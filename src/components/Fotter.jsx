function Fotter(){
    return(
        <div className="w-full py-40 container flex justify-between flex-wrap mx-auto">
            <div className="flex flex-col gap-5">
                  <ul className="flex gap-5 font-bold items-center text-base text-gray-400">
                    <li className=" hover:text-pink-600 cursor-pointer">About Eventime</li>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <li className=" hover:text-pink-600 cursor-pointer">Blog</li>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <li className=" hover:text-pink-600 cursor-pointer">Contact</li>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <li className=" hover:text-pink-600 cursor-pointer">Event</li>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <li className=" hover:text-pink-600 cursor-pointer">Venue</li>
                  </ul>
                  <div className="flex gap-5 text-white">
                    <div className="w-10 flex items-center cursor-pointer hover:bg-pink-500 justify-center  h-10  rounded-full border border-stone-500">f</div>
                    <div className="w-10 flex items-center cursor-pointer hover:bg-pink-500 justify-center  h-10  rounded-full border border-stone-500">x</div>
                    <div className="w-10 flex items-center cursor-pointer hover:bg-pink-500 justify-center  h-10  rounded-full border border-stone-500">in</div>
                    <div className="w-10 flex items-center cursor-pointer hover:bg-pink-500 justify-center  h-10  rounded-full border border-stone-500">p</div>
                  </div>
            </div>
            <div className="text-white w-[700px] flex flex-col items-end">
                <div className="w-[70%] flex">
                    <input type="email" className="input rounded border-b border-gray-400 w-full bg-transparent" placeholder="Your Email ..."/>
                    <button className="btn btn-active btn-secondary hover:bg-transparent rounded">SUBSCRIBE</button>
                </div>
                <span >© 2024  Exhibz. All rights reserved</span>
            </div>

        </div>
    )
}

export default Fotter