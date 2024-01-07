import HeroSlider, { Slide } from "hero-slider";
import '../css/slideshow.css';

export default function (props) {
    const useWebp = props.webpSupport;

    const suffix = useWebp ? 'webp' : 'jpg';
    const slides = [];

    for (let i=1; i<7; i++)
        slides.push(
            <Slide background={{ backgroundImageSrc: `https://kfd-imgs.s3.us-east-2.amazonaws.com/${suffix}/${i}.${suffix}` }} />
        );

    return <div>
        <HeroSlider
            height={"40vh"}
            controller={{
                slidingDuration: 500,
                slidingDelay: 0
            }}
            autoplay
        >
            { slides }
        </HeroSlider>
    </div>

}