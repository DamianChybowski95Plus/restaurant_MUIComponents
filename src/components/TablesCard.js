import { Card,Typography, AspectRatio, CardContent, Link, Chip, Checkbox } from "@mui/joy"

export default function TablesCard({ tableName, img, seats, count, description, price, selectedTable, ...props}){

    return(
        <Card {...props} variant="outlined" orientation="horizontal"
            sx={{
                width: 320,
                border : tableName === selectedTable ? 2 : 0,
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}>

            { img && <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img src={img} />
            </AspectRatio>}
            
            <CardContent sx={{ display: "flex", justifyContent:"center" }}>

                { tableName && <Typography level="title-lg" id="card-description">
                    {tableName}  { price && <Typography level="body-md">{price}</Typography>}
                </Typography>}

                { seats && count && <Typography level="body-sm" aria-describedby="card-description" mb={1}>                
                    <Link overlay underline="none" href="#interactive-card" sx={{ color: 'text.tertiary' }}>
                        Seats - {seats}, Available tables - {count}
                    </Link>
                </Typography>}

                { description && <Chip
                    variant="outlined"
                    color="primary"
                    size="sm"
                    sx={{ pointerEvents: 'none'}}>
                    {description}
                </Chip>}

            </CardContent>
      </Card>
    )
}