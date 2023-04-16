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
                <Grid key={JSON.stringify(event.id)} item xs={6} sm={8} md={10} lg={12}>
                    <EventCard data={event}/>
                </Grid>
            ))}
        </Grid>
    );
}