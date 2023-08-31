import { Carousel, IconButton } from "@material-tailwind/react";

export default function ImageCarousel() {
    return (
        <Carousel transition={{ duration: 2 }}
            autoplay={true}
            autoplayDelay={5000}
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </IconButton>
            )}

        >
            <img
                src="https://i.pinimg.com/736x/c6/6f/b7/c66fb7b279a660e3daf84e7d32efdf07--luxury-rooms-luxury-living.jpg"
                alt="home 2"
                className="h-full w-full object-cover"
            />
            <img
                src="https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg"
                alt="home 3"
                className="h-full w-full object-cover"
            />
            <img
                src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1529471066"
                alt="home 1"
                className="h-full w-full object-cover"
            />
            <img
                src="https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg"
                alt="home 322"
                className="h-full w-full object-cover"
            />
            <img
                src="https://www.essentialhome.eu/inspirations/wp-content/uploads/2022/07/INSPIRATIONS-Top-13-Luxury-Home-Decor-Ideas-for-a-High-End-Interior.png"
                alt="home 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}