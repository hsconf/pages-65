import NavBar from "./containers/NavBar/NavBar";
import {Container} from "@mui/material";
import NewPage from "./containers/NewPage/NewPage";
import {Route, Routes} from "react-router-dom";
import Page from "./containers/Page/Page";

const App = () => {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <Container component="main">
             <Routes>
                 <Route path="/new-page" element={<NewPage />}/>
                 <Route path="/:id" element={<Page />} />
             </Routes>
            </Container>

        </>
    );
};

export default App
