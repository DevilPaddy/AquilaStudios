'use client'
import Image from 'next/image'
import './hero.css'
import { FaStarOfLife } from "react-icons/fa6";
import { motion } from "framer-motion"
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { GiMoebiusStar } from "react-icons/gi";

export default function () {

    const marqueeText = [
        <GiMoebiusStar />,
        "We turn just a business into a brand people brag about.",
        <LiaStarOfLifeSolid />,
        "Making digital makeovers that your competitors cry over.",
        <GiMoebiusStar />,
        "We don’t create websites. We create customer magnets.",
    ];

    return (
        <div className="hero-sec mb-22">
            <div className="cover-hero">
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

                <div className="marquee w-full flex flex-col justify-center items-center overflow-hidden">
                    <div className="marquee1 w-full flex overflow-hidden">
                        <motion.div
                            className="marquee-content flex shrink-0"
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {marqueeText.map((item, index) => (
                                <span key={index} className="uppercase tracking-tighter pr-8 pl-8 text-center leading-none">
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div
                            className="marquee-content flex shrink-0"
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {marqueeText.map((item, index) => (
                                <span key={index} className="uppercase tracking-tighter pr-8 pl-8 text-center leading-none">
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    <div className="marquee2 w-full flex mx-auto overflow-hidden">
                        <motion.div
                            className="marquee-content flex shrink-0"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {marqueeText.map((item, index) => (
                                <span key={index} className="uppercase tracking-tighter pr-8 pl-8 text-center leading-none">
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div
                            className="marquee-content flex shrink-0"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {marqueeText.map((item, index) => (
                                <span key={index} className="uppercase tracking-tighter pl-8 pr-8 text-center leading-none">
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    )
}