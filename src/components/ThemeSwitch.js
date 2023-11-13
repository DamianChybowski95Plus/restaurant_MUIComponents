import React from "react";
import { Switch, Typography, useColorScheme } from "@mui/joy";
import { useState } from "react";


export default function ThemeSwitch(){
    const { mode, setMode } = useColorScheme();
    const [ themeSwitch, setSwitch ] = useState( mode !== "light");
    
    return(        
        <Switch 
            checked={themeSwitch}
            slotProps={{
                track: {
                    children : (
                        <React.Fragment>
                            <Typography component="span" level="inherit" sx={{ ml: '35px', display : themeSwitch ? "none" : "span" }}>
                            Light
                            </Typography>
                            <Typography component="span" level="inherit" sx={{ ml: '12px', display : themeSwitch ? "span" : "none" }}>
                            Dark  
                            </Typography>
                      </React.Fragment>
                    )
                }
            }}        
            onChange={(event)=>{
                setSwitch(event.target.checked); 
                setMode(mode === 'light' ? 'dark' : 'light');}}
            sx={{
                '--Switch-thumbSize': '27px',
                '--Switch-trackWidth': '80px',
                '--Switch-trackHeight': '31px'
            }}
        />
    )
}