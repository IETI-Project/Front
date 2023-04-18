import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {EventCard} from "./EventCard.jsx";
import {DEFAULT_EVENTS} from "../constants/constants.js";
import EventService from "../../services/event-service.js";

export function EventGrid(){
    const [content, setContent] = useState([]);
    const [events,setEvents] = useState([])

    useEffect(() => {
        EventService.getEvents().then(
            (response) => {
              setContent(response.data);
            },
            (error) => {
              const _content =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
      
              setContent(response.data);
            }
          );
          
    }, []);

    return (
        <Grid container spacing={2}>
            {content.map((event) => (
                <Grid key={JSON.stringify(event.id)} item xs={12} sm={12} md={6} lg={6}>
                    <EventCard data={event}/>
                </Grid>
            ))}
        </Grid>
    );
}