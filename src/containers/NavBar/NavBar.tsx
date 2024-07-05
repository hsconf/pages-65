import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Static</NavLink>
                </Typography>
                <Button component={NavLink} to="/posts" sx={{color:'inherit'}}>Home</Button>
                <Button component={NavLink} to="posts/new-post" sx={{color:'inherit'}}>Mars</Button>
                <Button component={NavLink} to="/about" sx={{color:'inherit'}}>About</Button>
                <Button component={NavLink} to="/contacts" sx={{color:'inherit'}}>Contacts</Button>
                <Button component={NavLink} to="/contacts" sx={{color:'inherit'}}>Admin</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;