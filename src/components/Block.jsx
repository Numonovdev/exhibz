import { Link } from 'react-router-dom'

import Vlog from '../img/Blog.jpg'

function Block(){
    return(
        <div className="w-[350px] flex hover:group-last:last:text-pink-600 cursor-pointer bg-[#120f4e] flex-col shadow-2xl items-center">
            <img src={Vlog} alt="" />
            <div className='flex p-5 font-bold flex-col  gap-3'>
                <div className='flex justify-between'>
                    <span className='hover:text-pink-600 cursor-pointer'>EXHOBZ</span>
                    <span>March 10,2019</span>
                </div>
                <h1 className='xl:text-2xl'>New Digital Man</h1>
                <p className='text-base'>There’s such a thing as “too much information”, especially for</p>
                <Link className='hover:text-pink-600' to='/'>Continue {'->'}</Link>

            </div>

        </div>
    )
}

export default Block