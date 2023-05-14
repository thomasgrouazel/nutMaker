import { Box } from "@mantine/core";

const Contain = (props) => {
    return (
        <Box maw="1080px" w="95%" mx={"auto"} {...props}>
            {props.children}
        </Box>
    );
};

export default Contain;
