import { Favorite } from "@mui/icons-material"
import { Typography, Divider, CardContent, CardOverflow, Link, Card, AspectRatio, IconButton } from "@mui/joy"


const IconStyle = {
    "aria-label" : "Like minimal photography",
    size : "md",
    variant : "solid",
    color : "danger",
    sx: {
        position: 'absolute',
        zIndex: 2,
        borderRadius: '50%',
        right: '1rem',
        bottom: 0,
        transform: 'translateY(50%)',
    }
}


export default function MenuCard({ name, description, price, time, image}){
    return (

        <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
            <AspectRatio ratio="2">
                <img src={image} />
            </AspectRatio>
            <IconButton {...IconStyle}>
              <Favorite />
            </IconButton>
        </CardOverflow>
        <CardContent>
            <Typography level="title-md">
                {name}
            </Typography>
            <Typography level="body-sm">
                {description}
            </Typography>
        </CardContent>
        <CardOverflow variant="soft">
            <Divider inset="context" />
            <CardContent orientation="horizontal">
            <Typography level="body-xs">{ price }</Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs">{ time }</Typography>
            </CardContent>
        </CardOverflow>
        </Card>

    )
}

