// import HeroSlider, { Slide } from "hero-slider";
import '../css/slideshow.css';

export default function (props) {
    const useWebp = 1 || props.webp;

    const folder = useWebp ? 'webps' : 'jpgs';
    const suffix = useWebp ? 'webp' : 'jpg';

    const slides = [];
    for (let i=1; i<7; i++) {
        slides.push(`../images/${folder}/${i}.${suffix}`);
    }

    let slideIterator = 0;
    let currentSlide = slides[slideIterator];

    setInterval(() => {
        currentSlide = slides[slideIterator];
        slideIterator++;
        if (slideIterator === slides.length) {
            slideIterator = 0;
        }
    }, 1000);

    return (
        <div
            className="slideshow-wrap"
            style={{
                backgroundImage: currentSlide
            }}
        >
            {/* <HeroSlider
                height={"40vh"}
                controller={{
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
            </HeroSlider> */}

        </div>
    );
};