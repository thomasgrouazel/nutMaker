import { Carousel } from "@mantine/carousel";
import { Box, Image } from "@mantine/core";

const Manege = () => {
    return (
        <Box py={"50px"}>
            <Carousel slideSize="50%" slideGap="xl" loop withIndicators sx={{}}>
                <Carousel.Slide>
                    <Image src="./assets/ImageC.png" />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src="./assets/ImageC.png" />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src="./assets/ImageC.png" />
                </Carousel.Slide>
            </Carousel>
        </Box>
    );
};

export default Manege;
