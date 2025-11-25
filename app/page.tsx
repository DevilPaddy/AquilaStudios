
import HeroSec from "@/components/home/hero/HeroSec"
import ScrollTextReveal from "@/components/Textscroll";
import Typewriter from "@/components/Typewritter";

export default function () {

  const paraTxt = `We bridge the gap between creative vision and technical reality. As a full-service digital agency, we specialize in building scalable web solutions, crafting distinct brand identities, and deploying data-driven strategies that drive growth. From the first line of code to the final pixel, we partner with ambitious brands to transform their digital presence into their most powerful asset.`;

  return (
    <section className="home-sec1">
      <HeroSec />

      <div className="breaker w-screen h-px bg-zinc-400"></div>
      <section className="section2">
        <div className="text-sec2">
          <h6 className="title-txt-sec2">
            <Typewriter
              text="What We Do?"
              speed={0.08}
              waitBeforeDelete={2000}
            /></h6>

          <div className="para-sec2">
            <ScrollTextReveal value={paraTxt} />
          </div>
        </div>
      </section>

      <div className="breaker w-screen h-px bg-zinc-400 mt-[-2em]"></div>

    </section>
  )
}