import { AspectRatio, Sheet, Stack, Typography, Box, Link, Card, CardCover, IconButton, Grid } from "@mui/joy";
import { loremIpsum } from "lorem-ipsum";
import restaurant from "assets/location/restaurant.jpg"
import { CreateNewFolder, Favorite } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const HeroSectionSheet = {
    variant : "soft",
    sx : {
        width: "100%"
    }
}

const descriptionStack = {
    direction : "column",
    spacing : 0.5,
    sx : {
        p: 1,
    }
}

export default function HeroSection(){

    return(
        <Sheet {...HeroSectionSheet}>

            <Grid direction="row" container>
            
                <Grid md={6} sx={{ display : { xs: "none", sm: "none", md : "flex"}, alignItems : "center"}}>                    
                    <Stack {...descriptionStack}>
                        <Typography level="h2">Little Lemon</Typography>
                        <Typography level="title-lg">Chicago</Typography>
                        <Typography level="body-md">{loremIpsum() + " " + loremIpsum() + " " + loremIpsum()}</Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>

                    <Card variant="plain" sx={{ width: "100%", bgcolor: 'initial', p: 0, }}>
                    <Box sx={{ position: 'relative' }}>
                        <AspectRatio ratio="3/2">
                            <figure><img src={restaurant} alt="Little Lemon Restaurant" /></figure>
                        </AspectRatio>
                        
                        <CardCover className="gradient-cover" 
                            sx={{
                                '&:hover, &:focus-within': {
                                opacity: 1,
                                },
                                opacity: 0,
                                transition: '0.1s ease-in',
                                background: 'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                            }}>
                        
                            {/* The first box acts as a container that inherits style from the CardCover */}
                            <div>
                                <Box
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        flexGrow: 1,
                                        alignSelf: 'flex-end',
                                    }}>

                                    <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                        <Link href="#dribbble-shot" overlay underline="none"
                                            sx={{
                                                color: '#fff',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                display: 'block',
                                            }}>
                                        Little Lemon - Chicago
                                        </Link>
                                    </Typography>
                                    <IconButton size="sm" variant="solid" color="neutral" sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}>
                                        <CreateNewFolder />
                                    </IconButton>

                                    <IconButton size="sm" variant="solid" color="neutral" sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}>
                                        <Favorite />
                                    </IconButton>

                                </Box>
                            </div>
                        </CardCover>
                    </Box>
                    </Card>

                </Grid>
                <Grid xs={12} sm={12} sx={{ display : { md : "none"}}}>                    
                    <Stack {...descriptionStack}>
                        <Typography level="h2">Little Lemon</Typography>
                        <Typography level="title-lg">Chicago</Typography>
                        <Typography level="body-md">{loremIpsum()}</Typography>
                    </Stack>
                </Grid>
            </Grid>
            
        </Sheet>
    )
}