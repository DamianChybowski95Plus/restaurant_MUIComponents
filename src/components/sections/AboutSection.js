import { Sheet, Box, AspectRatio, Typography, Stack } from "@mui/joy";
import LemonDessertImg from "assets/meals/Lemon Dessert.jpg"
import GreekSaladImg from "assets/meals/Greek Salad.jpg"

import { loremIpsum } from "lorem-ipsum";

const AboutSheet = {
    variant : "soft",
    sx : {
  
        p: 2
    }
}

const GridContainer = {
    sx : {
        display : "grid",
        height: "100%",

        gridTemplateColumns : "repeat( 12, 1fr )",
        gridTemplateRows : "repeat( 12, 1fr )",

        gap : 1,
    }
}

const AboutDescription = {
    sx : {
        gridRow : " 1 / 13",
        gridColumn : "1 / 7",

        display: "flex",
        p : 1,
        justifyContent: "center",
        alignItems: "center",
    }
}

const AspectRatioImg1 = {
    objectFit : "cover",
    flex : true,
    sx : {
        gridRow : "4 / 12",
        gridColumn : "7/10",
        boxShadow : "lg"
    }
}

const AspectRatioImg2 = {
    objectFit : "cover",
    flex : true,
    sx : {
        gridRow : "2 / 10",
        gridColumn : "9/12",
        zIndex : 2,
        boxShadow : "lg"
    }
}


export default function AboutSection(){
    return(
        <Sheet {...AboutSheet}>
            <Box {...GridContainer} >
                <Box {...AboutDescription}>
                    <Stack>
                        <Typography level="h4">Little Lemon</Typography>
                        <Typography level="title-md">Chicago</Typography>
                        <Typography level="body-md">{loremIpsum() }</Typography>    
                    </Stack>                    
                </Box>
                <AspectRatio {...AspectRatioImg1}><img src={LemonDessertImg}/></AspectRatio>
                <AspectRatio {...AspectRatioImg2}><img src={GreekSaladImg}/></AspectRatio>
            </Box>
        </Sheet>
    )
}