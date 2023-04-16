import React, { useState, useEffect } from "react";

import EventService from "../services/event-service";

import {DEFAULT_EVENTS} from "../constants/constants.js";

import {Grid} from "@mui/material";
import {EventCard} from "./events/EventCard";

const BoardUser = () => {
  const [content, setContent] = useState([]);


  useEffect(() => {
    
    // EventService.getUserBoard().then(
    //   (response) => {
    //     //setContent(response.data);
    //     setContent(DEFAULT_EVENTS);
    //   },
    //   (error) => {
    //     const _content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     //setContent(_content);
    //     setContent(DEFAULT_EVENTS);
    //   }
    // );
    
    setContent(DEFAULT_EVENTS);
  }, []);
  console.log(content);
  return (
    <div className="container">
        <Grid container spacing={2}>
            {content.map((event) => (
                <Grid key={event.id} item xs={12} sm={6} md={4} lg={3}>
                    <EventCard data={event}/>
                </Grid>
            ))}
        </Grid>
    </div>
  );
};

export default BoardUser;