import { Sheet, Drawer, Stack, Modal, Box, Button, Link, Grid, Tabs, Tab, TabList, Typography } from "@mui/joy"
import { Link as RouterLink, useLocation } from "react-router-dom"
import LittleLemon1 from "assets/Logo.svg"
import styled from "@emotion/styled"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import LoginBox from "components/LoginBox"

const HeaderSheet = {
    variant : "soft",
    component : "header",
    sx : {
        overflow : "hidden"
    },
}

const NavGrid = {
    direction : "row",
    spacing : 1,
    sx : {
        justifyContent: "center"
    }
}

    const LogoGrid = {
        xs : 12,
        md : 3,

        sx : {
            p: 2,
            boxShadow : "md",
        }
    }

        // Ustawienie sx na zwykłym zdjęciu; bez aspekt ratio.
        const Logo = styled('img')(({theme}) => 
            theme.unstable_sx({
                maxHeight : {  xs : "60px", sm : "80px", md : "100px", lg : "120px", xl: "100vh" } ,
                width: { xs : "100%", sm : "100%" },
                borderRadius : "md",
            }),
        )

    const NavigationGridItem = {
        sm : 10,   
        md : 8,
        sx : {
            display : { xs : "none", sm : "block", md : "block", lg : "block", xl : "block"},
        }
    }

    const NavigationTabs = {
        variant : "soft",
        sx : {
            height : "100%",
            
            "&>*" : { // Lista przycisków
                height : "100%",

            }
        }
    }

    const OrderButtonGrid = {
        xs : 10,
        sm : 2,
        md : 1,

        sx : {
        
        }
    }

        const OderButton = {
            sx : {
                width : { xs : "100%"},
                height : "100%",
            }
        }

    const MenuIconGrid = {
        xs : 2,
        sx : {
            display : { sm : "none"}
        }
    }

        const MenuButton = {
            variant : "outlined",
            sx : {
                width : "100%",
            }
        }

export default function HeaderSection( props ){
    const [ ordersDrawer, setOrdersDrawer ] = useState(false)
    const [ navigationDrawer, setNavigationDrawer ] = useState(false)
    const [ loginModal, setLoginModal ] = useState(true)

    return(
        <>  
            {/* OrdersDrawer - hidden by default */}
            <Drawer open={ordersDrawer}  anchor="right" onClose={()=>setOrdersDrawer(false)}>                            
                <Stack>
                    <Typography variant="solid" level="title-lg" sx={{textAlign: "center", p : 2}}>Order Processing</Typography>
                </Stack>
            </Drawer>

            {/* NavigationDrawer - hidden by default */}
            <Drawer open={navigationDrawer} anchor="right" onClose={()=>setNavigationDrawer(false)}>                
                <Stack gap={0.2} direction="column">
                    <Link sx={{p:2}} variant="solid" component={RouterLink} onClick={()=>setNavigationDrawer(false)} to="/">Home</Link>
                    <Link sx={{p:2}} variant="solid" component={RouterLink} onClick={()=>setNavigationDrawer(false)} to="/about" >About</Link>
                    <Link sx={{p:2}} variant="solid" component={RouterLink} onClick={()=>setNavigationDrawer(false)} to="/menu">Menu</Link>
                    <Link sx={{p:2}} variant="solid" component={RouterLink} onClick={()=>setNavigationDrawer(false)} to="/reservations">Reservations</Link>
                    <Link sx={{p:2}} variant="solid" component={RouterLink} onClick={()=>setNavigationDrawer(false)} to="/login">Login</Link>
                </Stack>                    
            </Drawer>

            <Sheet {...HeaderSheet}>
                <Grid container { ...NavGrid }>

                    <Grid item { ...LogoGrid }>
                        <Logo src={LittleLemon1}/>
                    </Grid>

                    <Grid item { ...NavigationGridItem }>
                        <Tabs {...NavigationTabs} >
                            <TabList tabFlex="auto" defaultValue={0}>                        
                                <Tab value={0} component={RouterLink} to="/">Home</Tab>
                                <Tab value={1} component={RouterLink} to="/menu">Menu</Tab>
                                <Tab value={2} component={RouterLink} to="/about">About</Tab>
                                <Tab value={3} component={RouterLink} to="/reservations">Reservations</Tab>
                                <Tab value={4} component={RouterLink} to="/login">Login</Tab>
                            </TabList>
                        </Tabs>
                    </Grid>
                    <Grid {...OrderButtonGrid} item>
                        <Button {...OderButton } onClick={()=>setOrdersDrawer(true)}>Order Online</Button>
                    </Grid>
                    <Grid item { ...MenuIconGrid } >
                        <Button {...MenuButton} onClick={()=>setNavigationDrawer(true)}><MenuIcon /></Button>
                    </Grid>
                </Grid>                            
            </Sheet>            
        </>
    )
}