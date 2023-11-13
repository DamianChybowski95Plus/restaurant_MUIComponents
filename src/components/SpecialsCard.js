import { PropaneRounded } from "@mui/icons-material"
import { Card, Typography, AspectRatio, CardContent, Button } from "@mui/joy"


export default function SpecialCard(props){
    return(
        <Card sx={{ flexGrow : 1, flexShrink : 0, flexBasis : "auto" }}>
            <div> 
                <Typography level="title-lg">{ props.name }</Typography>
                <Typography level="body-sm">{ props.description }</Typography>
            </div>
            
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img src={props.img} />
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                    { props.price }
                </Typography>
                </div>
                <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                Explore
                </Button>
            </CardContent>
        </Card>
    )
}

