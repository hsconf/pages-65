import NavBar from "./containers/NavBar/NavBar";
import {Container} from "@mui/material";
import Page from "./containers/Page/Page";

const App = () => {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <Container component="main">
                <Page />
            </Container>

        </>
    );
};

export default App
