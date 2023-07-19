import { Carousel } from "@material-tailwind/react";

export default function ImageCarousel() {
    return (
        <Carousel transition={{ duration: 2 }} >
            <img
                src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1529471066"
                alt="home 1"
                className="h-full w-full object-cover"
            />
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