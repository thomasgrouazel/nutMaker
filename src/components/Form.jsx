import {
    Box,
    Button,
    Checkbox,
    Flex,
    Group,
    TextInput,
    Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Contain from "./Contain";
import pb from "../script/PocketBase";

const Form = () => {
    const form = useForm({
        initialValues: {
            nom: "",
            prenom: "",
            email: "",
            projectDesc: "",
            termsOfService: false,
        },

        /*validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },*/
    });

    const onSubmit = form.onSubmit(async (formValues) => {
        const record = await pb.collection("nutProject").create(formValues);
        form.reset();
    });

    return (
        <Contain>
            <form onSubmit={onSubmit}>
                <Flex mx="auto" align={"stretch"} justify={"center"} gap={"xs"}>
                    <Box sx={{ flex: 1 }}>
                        <TextInput
                            withAsterisk
                            labelProps={{ fw: 700 }}
                            size="lg"
                            required
                            label="First Name"
                            placeholder="First name BOI"
                            {...form.getInputProps("prenom")}
                        />
                        <TextInput
                            withAsterisk
                            labelProps={{ fw: 700 }}
                            size="lg"
                            required
                            label="Name"
                            placeholder="Your name"
                            {...form.getInputProps("nom")}
                        />
                        <TextInput
                            withAsterisk
                            labelProps={{ fw: 700 }}
                            size="lg"
                            required
                            label="Email"
                            placeholder="MailMan"
                            {...form.getInputProps("email")}
                        />
                    </Box>
                    <Textarea
                        sx={{
                            flex: 1,
                            ".mantine-Textarea-wrapper": {
                                height: "calc(100% - 1.75em)",
                            },
                            textarea: {
                                height: "100%",
                            },
                        }}
                        size="lg"
                        label="Your project"
                        labelProps={{ fw: 700 }}
                        required
                        placeholder="Describe your dream project"
                        withAsterisk
                        {...form.getInputProps("projectDesc")}
                    />
                </Flex>
                <Checkbox
                    mt="md"
                    size="lg"
                    label="I agree to bring gluten free food"
                    {...form.getInputProps("termsOfService", {
                        type: "checkbox",
                    })}
                />
                <Group position="center" mt="md">
                    <Button type="submit" fz={"xl"}>
                        Submit
                    </Button>
                </Group>
            </form>
        </Contain>
    );
};

export default Form;
