import { AccountCircle } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

interface HeaderProps {
    drawerWidth: number;
}

function LayoutHeader({ drawerWidth }: HeaderProps): JSX.Element {

    return (
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar>
                <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
                    fiendster
                </Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default LayoutHeader;