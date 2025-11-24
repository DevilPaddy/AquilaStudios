import Image from 'next/image'
import './hero.css'
import { FaStarOfLife } from "react-icons/fa6";

export default function () {

    return (
        <div className="hero-sec">
            <div className='hero'>
                <div className="hero-txt">
                    <h4 className='hero-title'>
                        <div className="spin">
                            <FaStarOfLife />
                        </div>
                        Beyond the
                        <div className="span span1">
                            <span className='span-txt'>Pixel.</span>
                            <Image
                                src={'/hero/herogirl.png'}
                                alt='herogirl'
                                width={0}
                                height={0}
                                sizes='100vh'
                                className='herogirl'
                            />
                        </div>
                        <br />
                        Beyond
                        <div className="span span2">
                            <span className='span-txt'>Expectation.</span>
                        </div>
                    </h4>
                </div>
            </div>
        </div>
    )
}