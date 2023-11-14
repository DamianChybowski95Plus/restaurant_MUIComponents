import { Stack, Sheet, Typography, Accordion, AccordionDetails, AccordionSummary, AccordionGroup, Button, Input } from "@mui/joy";
import { Grid } from "@mui/material"
import { accordionSummaryClasses, } from '@mui/joy/AccordionSummary';
import { accordionDetailsClasses, } from '@mui/joy/AccordionDetails';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import { MobileTimePicker, DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import TablesCard from "components/TablesCard";
import { tableLayout } from "Data";
import { importAll } from "components/macros/importAll";


const tablesImages = importAll(require.context("../../assets/location", false))

const ReservationStack = {
    direction : "column",
    sx : {
        "&>*" : {
            width : "100%",
            border : 1
        }
    }
}

const ReservationRow = {
    direction : "row",
    sx : {
        width : "100%",
        display: "flex",
        justifyContent : "space-between",

        "&>*" : {
            width: "50%",
            textAlign : "center",
        }
    }
}

const DatePickerColumn = {}
const TableChoiceColumn = {}
const CustomizeServiceStack = {}

const SummaryStack = {
    direction : "row",
    sx : {
        width : "100%",
        "&>*" : {
            width : "50%",
            display : "flex",
            justifyContent : "center"
        }
    }
}


const validateEmail = ( email ) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
}

export default function ReservationSection(){
    const [ calendar, setCalendar ] = useState(null)
    const [ fromClock, setFromClock ] = useState(dayjs())
    const [ chosenTable, setChosenTable ] = useState(null)
    const [ email, setEmail ] = useState("")

    const [ emailValidation, setEmailValidation ] = useState(null)

    const [ accordion1, setAccordion1 ] = useState(null)
    const [ accordion2, setAccordion2 ] = useState(null)
    const [ accordion3, setAccordion3 ] = useState(null)

    return(
        <>
            <Sheet>          
                <AccordionGroup variant="outlined" transition="0.2s"
                    sx={{
                        width : "100%",
                        borderRadius: 'lg',
                            [`& .${accordionSummaryClasses.button}:hover`]: {
                                bgcolor: 'transparent',
                            },
                            [`& .${accordionDetailsClasses.content}`]: {
                                boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
                            [`&.${accordionDetailsClasses.expanded}`]: {
                                paddingBlock: '0.75rem',
                            },
                        },
                    }}>

                    <Accordion expanded={accordion1} onChange={()=>setAccordion1(!accordion1)} defaultExpanded>
                        <AccordionSummary sx={{ backgroundColor : calendar && fromClock && chosenTable ? "lightgreen" : "inherit" }}>
                            <Typography sx={{ p:2, borderBottom: 1 }} level="title-lg">1. Choose a date, time and table </Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails variant="soft">
                            <Grid container spacing={2} { ...ReservationRow}>
                                <Grid item xs={ 12 } sm={12} md={6}>
                                    <Typography level="title-md">Date</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>                            
                                        <DateCalendar value={calendar} onChange={(newValue) => setCalendar(newValue)} disablePast/>                                                              
                                        <Typography level="title-md">Choose Time</Typography>                                                            
                                        <Typography level="body-md">From: </Typography>                                    
                                        <MobileTimePicker value={fromClock} onChange={(newValue) => { setFromClock(newValue)}} />
                                    </LocalizationProvider>                                
                                </Grid>
                            
                                <Grid item xs={ 12 } sm={12} md={6}  sx={{ display: "flex", justifyContent:"center"}}>
                                    <Stack sx={{gap: 2, p: 2}}>
                                        { tableLayout.map((item, index)=>
                                            <TablesCard key={item.tableName} selectedTable={chosenTable} onClick={()=>setChosenTable(item.tableName)} tableName={item.tableName} seats={item.seats} count={item.count} img={tablesImages[item.tableName]} description={item.description}/>                                            
                                        )}
                                    </Stack>    
                                </Grid>
                                
                                <Grid item xs={12} sx={{display: "flex", justifyContent:"center"}}>
                                    <Stack direction="row" spacing={1}>
                                        <Typography level="title-md">Reservation for :</Typography>
                                        <Typography level="body-md">{ calendar ? "Date: " + dayjs(calendar["$d"]).format('YYYY-MM-DD') : " Choose a date "}</Typography>
                                        <Typography level="body-md">{ fromClock ? "Hour: " + dayjs(fromClock["$d"]).format('hh:mm') : "Choose hour "}</Typography>                                    
                                        <Typography level="body-md">{ chosenTable ? "Table: " + chosenTable : "Select a table " }</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button 
                                        variant="outlined" 
                                        sx={{ width: "100%", backgroundColor : calendar && fromClock && chosenTable ? "lightgreen" : "inherit" }}
                                        onClick = {()=>{setAccordion1(false); setAccordion2(true)}}
                                        >Next
                                    </Button>        
                                </Grid>
                            </Grid>                        
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={accordion2} onChange={()=>setAccordion2(!accordion2)} sx={{backgroundColor : emailValidation ? "lightgreen" : "inherit" }}>
                        <AccordionSummary><Typography sx={{ p:2, borderBottom: 1, }}level="title-lg">2. Reserve</Typography></AccordionSummary>
                        <AccordionDetails variant="soft">
                            <Stack direction="column" spacing={2}>
                                <Typography level="body-lg">Provide email: </Typography>
                                <Input placeholder="email" variant="outlined" type="email" value={email} color = { emailValidation===false ? "danger" : "neutral"} onChange={(event)=>setEmail(event.target.value)} onBlur={()=>{validateEmail(email)? setEmailValidation(true) : setEmailValidation(false)}}/>
                                { emailValidation === false && "Provide correct email"}
                                <Button 
                                    onClick = {()=>{ setAccordion2(false); setAccordion3(true)}}
                                    sx={{backgroundColor : emailValidation ? "lightgreen" : "inherit"}} variant="outlined">Next</Button>
                            </Stack>                                                     
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={accordion3} onChange={()=>setAccordion3(!accordion3)}>
                        <AccordionSummary sx={{ backgroundColor : calendar && fromClock && chosenTable && emailValidation ? "lightgreen" : "inherit" }}><Typography sx={{ p:2, borderBottom: 1 }}level="title-lg">3. Your Invitation</Typography></AccordionSummary>
                        <AccordionDetails variant="soft">                        
                            <Stack direction = "column" spacing={1} >
                                { ( calendar && fromClock && chosenTable && emailValidation ) ?
                                    <>
                                        <Typography level="title-lg">Your invitation has been sent </Typography>
                                        <Typography lyvel="body-lg" color="primary">Please do not foget to click a validation link provided to you email</Typography>
                                        <Typography level="body-lg">We're awaiting you on: { calendar && " " + dayjs(calendar["$d"]).format("DD/MM/YYYY")} { " " + fromClock && dayjs(fromClock["$d"]).format("hh:mm")} { chosenTable && chosenTable } </Typography>    
                                    </> : "Fill form to send an invitation"}                                
                            </Stack>                    
                        </AccordionDetails>
                    </Accordion>

                </AccordionGroup>
            </Sheet>
        </>
    )
}