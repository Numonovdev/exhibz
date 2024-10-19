import Card from "./card"

function ListenToThe(){
    return(
        <div className="w-full bg-blue-900 ">
            <div className="flex font-bold flex-col items-center gap-16 container text-white mx-auto">
                <p className="font-bold text-xl">WHY JOIN US</p>
                <h1 className=" text-5xl">Event Outcomes</h1>
                <div className="flex flex-wrap justify-center gap-10">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </div>
        </div>
    )
}

export default ListenToThe