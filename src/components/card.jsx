import spreaker from "../img/speaker1.jpg"

function Card(){
    return(
        <div className="flex flex-col w-[250px] font-bold items-center hover:opacity-70 gap-5">
            <div className="rounded-full overflow-auto">
               <img className="w-[430px]" src={spreaker} alt="" />
            </div>
            <h1 className="text-2xl">Henri Robert</h1>
            <h2 className="text-base">Founder, Cards</h2>
        </div>
    )
}

export default Card