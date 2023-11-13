import { Link, Sheet, Stack, Typography } from "@mui/joy";
import meal1 from "assets/meals/Mango Salad.jpg"
import { Link as RouterLink } from "react-router-dom";
import SpecialCard from "components/SpecialsCard";
import Carousel from "components/Carousel";

export default function SpecialsSection(){
    return(
        <Sheet variant="soft">
            <Stack direction="row" justifyContent="space-between" sx={{ p: 2}}>
                <Typography level="title-lg">Our specials:</Typography>
                <Link component={RouterLink} to="/menu"><Typography level="title-sm">Menu</Typography></Link>
            </Stack>
            
            <Carousel cardsPerPanel={{"xs" : 1, "sm" : 2, "md" : 3, "lg" : 4}} >
                <SpecialCard name="Salad" description="Olives, Fresh Cheese and Salmon" img={meal1} price={50} />
                <SpecialCard name="Salad" description="Olives, Fresh Cheese and Salmon" img={meal1} price={50} />
                <SpecialCard name="Salad" description="Olives, Fresh Cheese and Salmon" img={meal1} price={50} />
                <SpecialCard name="Salad" description="Olives, Fresh Cheese and Salmon" img={meal1} price={50} />
                <SpecialCard name="Salad" description="Olives, Fresh Cheese and Salmon" img={meal1} price={50} />
            </Carousel>

        </Sheet>   
    )
}