import { Divider, Sheet, Stack, Typography } from "@mui/joy";
import Carousel from "components/Carousel";
import TestimonialsCard from "components/TestimonialCard";

const TestimonialsStack = {
    direction : "row",
    justifyContent : "space-around",
    spacing : 1,
    p : 1,
    sx : {
        overflowX : "auto"
    }
}

export default function TestimonialsSection(){
    return(
        <Sheet variant="soft">
            <Stack direction="row" justifyContent="space-between" sx={{ p: 2}}>
                <Typography level="title-lg">Testimonias:</Typography>
            </Stack>
            
            <Carousel spacing={5} cardsPerPanel={{"xs" : 1, "sm" : 2, "md" : 3 }}>
                <TestimonialsCard tag="REVIEWER" author={"Josephine Blanton"} message={"Best meal since i was 6..."}/>
                <TestimonialsCard tag="REGULAR" author={"John Sakutaki"} message={"Well made salmon"}/>
                <TestimonialsCard tag="TOURIST" author={"Peter Jason"} message={"Desserts were amazing"}/>            
            </Carousel>

            <Stack {...TestimonialsStack} divider= { <Divider orientation="vertical"/>}>

            </Stack>
        </Sheet>
        
    )
}