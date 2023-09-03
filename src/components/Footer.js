import React from 'react'
import { AiOutlineLinkedin, AiFillGithub, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className=' grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 text-white'>
                <div className='border-2'>
                    <div className='border-2 text-center p-5 rounded-full cursor-pointer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, totam quo impedit itaque labore cupiditate necessitatibus iusto velit nostrum accusantium.
                    </div>
                </div>
                <div className='border-2'>
                    <div className='border-2 text-center p-5 rounded-full cursor-pointer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, totam quo impedit itaque labore cupiditate necessitatibus iusto velit nostrum accusantium.
                    </div>
                </div>
                <div className='border-2'>
                    <div className='border-2 text-center p-5 rounded-full cursor-pointer'>
                        <div className='m-9 border-2'>
                            <div className='flex gap-8 text-2xl mb-2 justify-center'>
                                <AiOutlineLinkedin />
                                <AiFillGithub />
                                <AiOutlineInstagram />
                                <AiFillYoutube />
                            </div>
                            <p>&copy; Copyright All right reserved.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer