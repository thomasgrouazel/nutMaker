import { Button, Flex } from "@mantine/core";
import Contain from "./Contain";

const Footer = () => {
    return (
        <Contain>
            <Flex
                direction={"row"}
                justify={"space-evenly"}
                gap={"80px"}
                maw="1080px"
                w="95%"
                mb={"25px"}
                mt={"100px"}
                py={"10px"}
                sx={{
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    borderRadius: "7px",
                }}
            >
                <Button variant="white" fw={700} fz="l">
                    Join us
                </Button>
                <Button variant="white" fw={700} fz="l">
                    Legals
                </Button>
                <Button variant="white" fw={700} fz="l">
                    Rules
                </Button>
                <Button variant="white" fw={700} fz="l">
                    Nuts
                </Button>
            </Flex>
        </Contain>
    );
};

export default Footer;
