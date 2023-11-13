import { Button, Drawer, Sheet, Stack, Divider, Typography } from "@mui/joy"

import ThemeSwitch from "components/ThemeSwitch"
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderSection from "components/sections/HeaderSection";
import Home from "./MainLayout/Home";
import FooterSection from "components/sections/FooterSection";


const Wrapper = {
    variant : "soft",
    sx : {
        width : { "md" : "90%", "lg" : "80% "},
        margin : "0 auto",
        boxShadow : "xl",
        borderRadius: 2
    }
}

const Main = {
    component : "main",
    variant : "soft",
    spacing : 1,

    sx : {

    }
}

export default function MainLayout(){

    const AdminSession = false
    
    const [ adminDrawer, setAdminDrawer ] = useState(false)
    const [ selectedMainNav, setSelectedMainNav ] = useState("home")

    const location = useLocation()


    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener( "resize", ()=>setScreenWidth(window.innerWidth))

    return () => { 
        window.addEventListener( "resize", ()=>setScreenWidth(window.innerWidth))

    }
    },[screenWidth, setScreenWidth])

    return(
        <>
            <Typography>{ screenWidth }</Typography>

            <Sheet {...Wrapper}>
                <HeaderSection mainNavState={{ selectedMainNav, setSelectedMainNav }}/>

                <Divider variant="soft" sx={{margin : 1}}>Welcome</Divider>

                <Sheet variant="soft">
                    <Stack {...Main} >
                        {location.pathname === "/" && <Home/>}
                        <Outlet/>
                    </Stack>
                </Sheet>

                <Divider variant="soft" sx={{margin : 1}}>Contact Little Lemon</Divider>

                <FooterSection/>

                { AdminSession && <>
                    <Drawer open={adminDrawer} anchor="top" onClose={()=>setAdminDrawer(false)}>Admin</Drawer>
                    <ThemeSwitch/>
                    <Button onClick={()=>setAdminDrawer(true)}>Admin Drawer</Button>
                </>}

            </Sheet>
        </>
    )
}