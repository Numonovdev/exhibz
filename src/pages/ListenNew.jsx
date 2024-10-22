import Block from "../components/Block"

function ListenNew(){
    return(
        <div className="container mx-auto flex flex-col items-center mt-20 text-white">
            <p className="xl:text-xl font-bold lg:text-lg md:text-lg sm:text-base">INFO UPDATE</p>
            <h1 className="xl:text-4xl font-bold lg:text-3xl md:text-2xl sm:text-xl">Latest News</h1>
            <div className="w-full gap-10 mt-20 flex flex-wrap justify-between">
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>

            </div>
        </div>
    )
}

export default ListenNew