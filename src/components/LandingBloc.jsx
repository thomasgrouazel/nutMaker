import { Button, Flex, Image, Text } from "@mantine/core";
import Contain from "./Contain";

const LandingBloc = () => {
    return (
        <Contain>
            <Flex pt={"30px"}>
                <Flex direction="column" sx={{ flex: 6 }}>
                    <Text fz="40px" fw={400}>
                        Nut to serve <br /> all{" "}
                        <Text span fw={700} c="indigo.9">
                            humans
                        </Text>
                    </Text>
                    <Text fz="25px">
                        sed quia consequuntur magni dolores <br /> eos qui
                        ratione voluptatem sequi nesciunt.
                    </Text>
                    <Flex direction={"row"} gap={"30px"} pt={"40px"}>
                        <Button
                            color="indigo"
                            size="md"
                            compact
                            w={"140px"}
                            h={"40px"}
                        >
                            buy now
                        </Button>
                        <Button
                            variant="white"
                            color="dark"
                            w={"140px"}
                            h={"40px"}
                            sx={{
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            kill later
                        </Button>
                    </Flex>
                </Flex>
                <Flex sx={{ flex: 4 }}>
                    <Image
                        fit={"contain"}
                        height="300px"
                        src="./assets/Computer.png"
                    />
                </Flex>
            </Flex>
        </Contain>
    );
};

export default LandingBloc;
