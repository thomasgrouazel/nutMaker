import { Flex, Text, Button, Box } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import "./Navbar.css";
import Contain from "./Contain";

const Navbar = () => {
    const { ref, height } = useElementSize();
    return (
        <Contain>
            <Box h={height + 25}></Box>
            <Flex
                ref={ref}
                className="Nav"
                sx={{
                    position: "fixed",
                    zIndex: "10",
                    backgroundColor: "white",
                    top: "15px",
                }}
                px={"25px"}
                maw="1080px"
                w="95%"
            >
                <Flex justify="flex-start" align="center" sx={{ flex: 1 }}>
                    <img src="./assets/logo1.png" className="Logo" />
                    <Text fw={500} fz="xl">
                        Nut Maker
                    </Text>
                </Flex>
                <Flex justify="flex-end">
                    <Button variant="white" fw={700} color="indigo" fz="xl">
                        buy now &gt;
                    </Button>
                </Flex>
            </Flex>
        </Contain>
    );
};

export default Navbar;
