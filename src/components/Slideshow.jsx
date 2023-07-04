import HeroSlider, { Slide } from "hero-slider";

export default function () {
    return (
        <div>
            <HeroSlider
                height={"40vh"}
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100
                }}
                autoplay
            >
                <Slide
                    background={{
                        backgroundImageSrc: '"https://res.cloudinary.com/akisiel/image/upload/v1617587698/Office/ext_webp_e0i9yt.webp"'
                    }}
                />
            </HeroSlider>
        </div>
    );
};