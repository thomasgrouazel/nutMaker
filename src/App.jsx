import "./App.css";
import Navbar from "./components/Navbar";
import LandingBloc from "./components/LandingBloc";
import { MantineProvider } from "@mantine/core";
import PresBloc from "./components/PresBloc";
import Manege from "./components/Manege";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Navbar />
            <LandingBloc />
            <PresBloc />
            <Manege />
            <Form />
            <Footer />
        </MantineProvider>
    );
}

export default App;
