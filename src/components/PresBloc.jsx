import { BackgroundImage, Box, Center, Flex, Text } from "@mantine/core";
import Contain from "./Contain";

const PresBloc = () => {
    return (
        <Contain>
            <BackgroundImage
                src="./assets/Fold.png"
                radius="sm"
                h={"500px"}
                sx={{
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    opacity: "0.7",
                }}
            >
                <Center p="md" h={"100%"}>
                    <Flex direction={"column"} sx={{ rowGap: "30px" }}>
                        <Text
                            color="black"
                            fz={"40px"}
                            fw={700}
                            mt={"290px"}
                            sx={{ placeItems: "center", letterSpacing: "10px" }}
                        >
                            We build powerful nuts
                        </Text>
                        <Text fw={500} fz={"20px"} color="black">
                            Ut enim ad minima veniam, quis nostrum <br />
                            exercitationem ullam corporis suscipit laboriosam{" "}
                            <br />
                            nisi ut aliquid ex ea commodi consequatur?
                        </Text>
                    </Flex>
                </Center>
            </BackgroundImage>
        </Contain>
    );
};

export default PresBloc;
