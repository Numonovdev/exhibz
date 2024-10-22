import linklab1 from "../img/linklab1.png"
import linklab2 from "../img/linklab2.png"
import linklab3 from "../img/linklab3.png"
import linklab4 from "../img/linklab4.png"
import linklab5 from "../img/linklab5.png"

function Linklap(){
    return(
        <div className="w-full  py-20 ">
            <div className="container mx-auto flex flex-col gap-20">
                <div className="flex flex-wrap justify-center gap-10">
                    <img className="w-[15%]" src={linklab1} alt="" />
                    <img className="w-[15%]" src={linklab2} alt="" />
                    <img className="w-[15%]" src={linklab3} alt="" />
                    <img className="w-[15%]" src={linklab4} alt="" />
                    <img className="w-[15%]" src={linklab5} alt="" />
                </div>
                <div className="w-full border border-slate-500"></div>
            </div>

        </div>
    )
}

export default Linklap