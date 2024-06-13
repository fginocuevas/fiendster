import { Box } from "@mui/material";
import LayoutContent from "./children/LayoutContent";
import LayoutDrawer from "./children/LayoutDrawer";
import LayoutHeader from "./children/LayoutHeader";

function Layout() {

    const drawerWidth = 240;

    return (
        <Box sx={{ display: 'flex' }}>
            <LayoutHeader drawerWidth={drawerWidth} />
            <LayoutDrawer drawerWidth={drawerWidth} />
            <LayoutContent />
        </Box>
    );
    
}

export default Layout;