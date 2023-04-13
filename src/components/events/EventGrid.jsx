import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {EventCard} from "./EventCard.jsx";
import {DEFAULT_EVENTS} from "../constants/constants.js";

export function EventGrid(){

    const [events,setEvents] = useState([])

    useEffect(() => {
        fetchEvents()
            .then(eventsData => setEvents(eventsData))
            .catch(error => {
                console.log("api not working"+error);
                setEvents(DEFAULT_EVENTS);
            });
    }, []);

    const fetchEvents = async () => {
        const response = await fetch('api/events');
        return await response.json();
    };

    return (
        <Grid container spacing={2}>
            {events.map((event) => (
                <Grid key={event.id} item xs={12} sm={6} md={4} lg={3}>
                    <EventCard data={event}/>
                </Grid>
            ))}
        </Grid>
    );
}