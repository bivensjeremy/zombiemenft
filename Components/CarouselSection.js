import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // loader required

const CarouselBox = ({ text }) => {
    return(
        <Box sx={{ marginY: 5 }}>
            <Typography variant="h4" fontStyle="italic" fontSize={32}>
                {text}
            </Typography>
        </Box>
    )
}

const CarouselSection = () => {
    return (
        <>
        <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            showStatus={false}
            showArrows={false}
            showThumbs={false}
        >
            <CarouselBox
                text='"Haven&apos;t you always wanted to own an NFT?"'
            />
            
            <CarouselBox
                text='"Are NFTs still a thing? Who Cares!"'
            />

            <CarouselBox
                text='"Probably worth nothing! But It&apos;s Yours!"'
            />
        </Carousel>
        </>
    );
}

export default CarouselSection;