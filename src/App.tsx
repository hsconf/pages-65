import NavBar from "./containers/NavBar/NavBar";
import {Container} from "@mui/material";
import NewPage from "./containers/NewPage/NewPage";
import {Route, Routes} from "react-router-dom";
import Page from "./containers/Page/Page";
import Admin from "./containers/Admin/Admin";

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
                 <Route path="/pages/admin" element={<Admin />} />
             </Routes>
            </Container>

        </>
    );
};

export default App
