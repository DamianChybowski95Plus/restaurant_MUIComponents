import { Grid } from "@mui/material";
import MenuCard from "components/MenuCard";
import { Menu } from "Data";
import { importAll } from "components/macros/importAll"; // Formatowanie danych zwracanych przez import 
const images = importAll(require.context("assets/meals",false)); // Import kontekstu

export default function MenuSection(){

    return(
        <Grid container direction="row" spacing={2} justifyContent="space-evenly">
            { Menu.map((element,index)=>
                <Grid item key={element.name}>              
                    <MenuCard name={element.name} description={element.description} image={images[element.name]} price={element.price} time={element.time} />
                </Grid>
                )}
        </Grid>
   )
}