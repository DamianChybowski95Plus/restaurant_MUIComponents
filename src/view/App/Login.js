import { Sheet } from "@mui/joy";
import LoginBox from "components/LoginBox";

export default function Login(){
    return(
        <Sheet sx={{ display: "flex", justifyContent : "center", p : 4}}>
            <LoginBox/>
        </Sheet>                
    )
}