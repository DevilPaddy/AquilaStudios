"use client";
import Image from "next/image";
import "./Services.css"
import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function () {

    const Services = [
        {
            index: "01",
            title: "Web Development",
            image: "/servicespic/webdev.png",
            sidePara: "High-performance websites engineered for growth.",
            description: "We don’t just write code; we build immersive digital experiences. Whether it’s a high-converting landing page or a complex e-commerce platform, we craft websites that are visually stunning, lightning-fast, and engineered to turn visitors into loyal customers."
        },
        {
            index: "02",
            title: "App Development",
            image: "/servicespic/appdev.png",
            sidePara: "Intuitive mobile experiences for users on the go.",
            description: "Your users are on the move, and your business needs to be right there with them. We design and develop intuitive, high-performance mobile applications that feel second nature to use. From the first tap to the final transaction, we ensure a seamless journey."
        },
        {
            index: "03",
            title: "Deployment",
            image: "/servicespic/dev.jpeg",
            sidePara: "Secure, scalable, and stress-free product launches.",
            description: "Building the product is only half the battle; getting it live is where the magic happens. We handle the complex infrastructure, server configurations, and CI/CD pipelines so your launch is smooth, secure, and stress-free. You focus on the hype; we ensure the uptime."
        },
        {
            index: "04",
            title: "Brand Identity",
            image: "/servicespic/brandidentity.jpg",
            sidePara: "Visual storytelling that makes your brand unforgettable.",
            description: "In a crowded market, blending in is the enemy. We forge distinct visual identities that resonate with your audience on an emotional level. From color psychology to typography and voice, we curate a cohesive brand persona that makes you impossible to ignore."
        },
        {
            index: "05",
            title: "Digital Marketing",
            image: "/servicespic/digitalmarketing.jpg",
            sidePara: "Data-driven strategies that turn clicks into clients.",
            description: "It’s not enough to exist; you need to be seen. Our data-driven marketing strategies cut through the clutter to put your brand in front of the right eyes. Through SEO, social campaigns, and targeted content, we drive traffic that actually converts."
        }
    ];

    const container = useRef(null);

    useGSAP(() => {
        const stickyCards = gsap.utils.toArray('.sticky-card') as HTMLElement[];;

        stickyCards.forEach((card, index) => {
            if (index === stickyCards.length - 1) return;
            const nextCard = stickyCards[index + 1];

            // const rotation = index % 2 === 0 ? 5 : -5;

            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top top",
                    endTrigger: nextCard,
                    end: "top top",
                    scrub: true,
                    onUpdate: (self) =>{
                        const progress = self.progress;
                        const scale = 1 - progress * 0.1;
                        const rotation = (index % 2 === 0 ? 5 : -5)*progress;
                        const opacity = 1 - (progress * 0.3);

                        gsap.set(card, {
                            scale: scale,
                            rotation: rotation,
                            opacity: opacity,
                            transformOrigin: "center bottom",
                        });
                    }
                },
                ease: "none",
            });
        });
    },
        { scope: container }
    );

    return (
        <div className="sticky-cards" ref={container}>
            {Services.map((service, index) => (
                <div key={index} className="sticky-card">
                    <div className="sticky-card-index">
                        <h5>({service.index})</h5>
                    </div>
                    <div className="sticky-card-content">
                        <div className="sticky-card-content-wrapper">
                            <h1 className="sticky-card-title">{service.title}</h1>

                            <div className="card-img">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={0}
                                    height={0}
                                    sizes="100vh"
                                    className="card-image w-full object-cover"
                                />
                            </div>

                            <div className="sticky-card-copy">
                                <div className="sticky-card-copy-title">
                                    <p>{service.sidePara}</p>
                                </div>

                                <div className="sticky-card-copy-description">
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}