import { Element, Link as ScrollLink } from 'react-scroll';
import Button from '../components/Button';
import HeroImage from './../assets/images/hero.png';
import Zap from './../assets/images/zap.svg';

const Hero = () => {
    return (
        <section className="relative pb-40 pt-60 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <Element name="hero">
                <div className="container">
                    <div className="relative max-w-512 z-2 max-lg:max-w-388">
                        <div className="uppercase caption small-2 text-p3">
                            Video Editing
                        </div>

                        <h1 className="mb-6 uppercase h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                            Amazingly Simple
                        </h1>

                        <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                            We designed Nova Ai Video Editor to be an easy to use, quick to learn, and surprisingly powerful.
                        </p>

                        <ScrollLink to="features" offset={-100} smooth spy>
                            <Button icon={Zap}>
                                Try it now
                            </Button>
                        </ScrollLink>
                    </div>

                    <div className="absolute -top-32 w-[1230px] left-[calc(50%-340px)] pointer-events-none hero-img_res">
                        <img src={HeroImage} alt="HeroImage" className="size-1230 max-lg:h-auto" />
                    </div>
                </div>
            </Element>
        </section>
    )
};

export default Hero;
