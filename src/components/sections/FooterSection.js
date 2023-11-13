import { useTheme } from "@emotion/react"
import { Sheet, Box, Stack, AspectRatio, Typography, Link } from "@mui/joy"
import { useMediaQuery } from "@mui/material"
import { findByLabelText } from "@testing-library/react"
import FooterImg from "assets/restauranfood.jpg"
import { Contacts, NavigationLinks, SocialMedia } from "Data"
import { Link as RouterLink } from "react-router-dom"

const FooterSheet = {
    variant : "soft",
    component : "footer",
    
    sx : {
        display : "flex",
        width : "100%",
    }
}

const FooterContainer = {
    direction : "row",
    spacing : 1,
    sx : {
        justifyContent : "space-evenly",
        width : "100%",
        p : 1,
    }
}

const FooterItem = {
    variant : "outlined",
    sx : {
        width : "100%",
        height : "100%"
    }
}

const TextBox = {
    sx : {
        width : "80%",
        margin: "10%"
    }
}

const FooterStack = {
    direction : "column",
    sx : {
        display: "flex",
        justifyContent : "center",
        width : "100%"
    }
}


export default function FooterSection(){
    const theme = useTheme()
    const isScreenXs = useMediaQuery(theme.breakpoints.down("sm"))
    // const isScreenSm = useMediaQuery(theme.breakpoints.down("md"))
    // const isScreenMd = useMediaQuery(theme.breakpoints.down("lg"))

    return (
        <Sheet {...FooterSheet}>
            <Stack {...FooterContainer} direction={ isScreenXs ? "column" : "row"}>
                
                <Sheet {...FooterItem } variant="soft"><Stack {...FooterStack}><AspectRatio sx={{height:"100%", width:"100%"}}><img src={FooterImg}/></AspectRatio></Stack></Sheet>
                
                <Sheet {...FooterItem}>
                    <Box {...TextBox} >
                        <Stack {...FooterStack}>
                            <Typography level="title-md">Navigation</Typography>
                            { NavigationLinks.map((item)=><Link component={RouterLink} to={item.path} key={item.name+"footer"}>{item.name}</Link>)}
                        </Stack>
                    </Box>    
                </Sheet>
                
                <Sheet {...FooterItem}>
                    <Box {...TextBox}>
                        <Stack {...FooterStack}>                        
                            <Typography level="title-md">Contacts:</Typography>
                            { Object.keys(Contacts).map((item)=><Typography level="body-md" key={item}>{item} : {Contacts[item]}</Typography>)}
                        </Stack>   
                    </Box>                                        
                </Sheet>
                
                <Sheet {...FooterItem}>
                    <Box {...TextBox}>
                    <Stack {...FooterStack}>
                        <Typography level="title-md">Social Media</Typography>
                        { SocialMedia.map((item)=><Typography level="body-md" key={item.platform}>{item.platform} : {item.link}</Typography>)}
                    </Stack>    
                    </Box>                    
                </Sheet>

            </Stack>
        </Sheet>
    )
}               