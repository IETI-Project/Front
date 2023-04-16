import React, { useState, useEffect } from "react";

import EventService from "../services/event-service";

import {DEFAULT_EVENTS} from "../constants/constants.js";

import {Grid} from "@mui/material";
import {EventCard} from "./events/EventCard";
import { EventGrid } from "./events/EventGrid";
import { Flex, Button } from "@chakra-ui/react";
import { AddEvent } from "./events/AddEvent";

const BoardUser = () => {
  const [content, setContent] = useState([]);
  const [showAdd, setShowAdd] = useState(false);


  const toggleAdd = () => {
    let val = !showAdd

    console.log(val);
    setShowAdd(val);
  }

  return (
    <Flex direction="column" className="container">
        <Flex width = '100%' direction='column'>
            <EventGrid />
        </Flex>
        <Button borderRadius="5px" onClick={toggleAdd} >+</Button>
        <Flex>
          {showAdd && (<AddEvent></AddEvent>)}
        </Flex>
    </Flex>
  );
};

export default BoardUser;