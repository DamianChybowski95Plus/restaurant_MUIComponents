// Wymaga przekazywania wartości %; Szerokość dla wszystkich elementów jest w procentach

import React from "react";
import { Stack, Box } from "@mui/joy";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";


// Styles, and props
const PaddingBox = ({ padding }) => {
    return {
        sx : {
            width : 100-padding*2 + "%",
            p : padding +"%", 
            overflow: "hidden",
            // border : 1
        }
    }
}

const ViewBox = {
    sx : {
        width : "100%",
        overflow : "hidden",
        border : "1",
        display : "flex",
        justifyContent : "center"
    }
}

const CarouselStack = ({ spacing }) => {
    return {
        direction : "row",
        sx : {
            gap : spacing + "%",
            p : 0,
            overflow : "scroll",
            position : "relative",

            scrollbarWidth : "none", // Działa w firefoxie
            "&::-webkit-scrollbar" : { display : "none" }, // Chrome, Safari

            width: "100%"
            
        }
    }
}


const CarouselItem = ({ cardPerPanelMUI, spacing }) => {
    return {
        sx : {
            //  Box size for cards so that they would lined up perfectly with view based on width %
            width : 100/cardPerPanelMUI - spacing * (cardPerPanelMUI - 1) / cardPerPanelMUI + "%",
            
            // Stops flex parent from managing item width
            flexGrow : 0,
            flexShrink : 0,
            flexBasis : "auto",

            display : "flex",
            justifyContent : "center"
        }
    }
}


// Hooks
const getCurrentBreakpoint = (theme) => {
    const breakpoints = [ ...theme.breakpoints.keys ]
    const breakpoint = breakpoints.filter((breakpoint_)=>{
        return useMediaQuery(theme.breakpoints.only(breakpoint_))        
    }) || "xs"
    return breakpoint
}

// Normalizacja by argument typu obiekt działał jak w MUI ( większe breakpointy odziedziczają wartości z największego podanego breakpointu )
const normalizedBreakpointArgument = ( theme, arg ) => {
    const breakpoints = [ ...theme.breakpoints.keys ]
    const MUIarg = {}
    
    breakpoints.forEach((themeBreakpoint, index)=>{
        MUIarg[ themeBreakpoint ] = arg[themeBreakpoint] ? arg[themeBreakpoint] : MUIarg[ breakpoints[index-1] ]
    })

    return MUIarg
}

export default function Carousel({ children, cardsPerPanel = 1, padding = "1", spacing = "1"}){
    const theme = useTheme()
    const currentBreakpoint = getCurrentBreakpoint(theme)    
    // Wydobycie przekazanej wartości dla danego breakpointu, jeżeli został podany
    const cardPerPanelMUI = typeof(cardsPerPanel) === "object" ? normalizedBreakpointArgument( theme, cardsPerPanel)[currentBreakpoint] : cardsPerPanel
    // Margines panelu gdy karty go idealnie nie wypełniają, zależny od ilości kart

    useEffect(()=>{
        // console.log(  "cardPerPanelMUI", cardPerPanelMUI )
    })

    return(        
        <Box {...PaddingBox({ "padding" : padding })}>            
            <Box {...ViewBox } >
                <Stack {...CarouselStack({ "spacing" : spacing })}  >
                    { React.Children.map(children, child=>                        
                        <Box {...CarouselItem({ "spacing" : spacing, "cardPerPanelMUI" : cardPerPanelMUI})}>
                            {child}
                        </Box>
                    )}
                    
                    {/* Dodać przyciski, opcje animacji, oraz mobile */}
                </Stack>
            </Box>
        </Box>
    )
}