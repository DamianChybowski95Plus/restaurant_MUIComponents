import { Grid } from "@mui/joy";
import MenuCard from "components/MenuCard";
import { Menu } from "Data";
import { importAll } from "components/macros/importAll"; // Formatowanie danych zwracanych przez import 
const images = importAll(require.context("assets/meals",false)); // Import kontekstu

export default function MenuSection(){

    return(
        <Grid container direction="row" spacing={2} justifyContent="space-evenly">
            { Menu.map((item)=>
                <Grid item >
                    <MenuCard key={item.name} name={item.name} description={item.description} image={images[item.name]} price={item.price} time={item.time} />
                </Grid>)}
        </Grid>
   )
}