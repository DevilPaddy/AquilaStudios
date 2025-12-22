'use client';
import './horizontalScroll.css';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


export default function () {

    const container = useRef(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: container.current,
            start: "top top",
            end: "+=900vh",
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
                gsap.to(".horizontal-scroll-container", {
                    x: `${-700 * self.progress}vw`,
                    duration: 2,
                    ease: "none",
                });
            },
        });
    },{scope: container});

    return (
        <section ref={container} className="horizontal-scroll-container">
            <div className="containt-scroll">
                <h4 className='scroll-text'>Elevating digital presence through precision, craft, and timeless design.</h4>
            </div>
        </section>
    )
}