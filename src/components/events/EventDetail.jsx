import { Flex, Heading, Box, Spacer,ListItem, UnorderedList, Text, Button, ListIcon} from "@chakra-ui/react";
import React from "react";
import EventService from "../../services/event-service.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export function EventDetail(){
  const [event, setEvent] = useState({});
  const { name } = useParams();
  const [photo, setPhoto] = useState("");
    
    const deleteEvent = () => {
      console.log(event);
      EventService.deleteEvent(event).then(
        (response) => {
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            console.log(error.toString())
              
        }
      );
      
    }

    useEffect(() => {
        EventService.getEventByName(name).then(
            (response) => {
              var ph = response.data.photoURL;
              setEvent(response.data);
            },
            (error) => {
              const _content =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
                console.log(error.toString())
                  
            }
          );
          
    }, []);


    return (
      <Flex direction="column" width="100%" >
        <Flex margin mb="20px" backgroundColor="#3a5060" backgroundRepeat="no-repeat" bgPosition="center"  width="100%" height="50vh" bgGradient={"url(" + {event}.event.photoURL + ")"}>
        </Flex>
        <Flex pl="50px" direction="row">
          <Flex alignContent="center" direction="column">
            <Heading textDecoration="underline" fontSize="50px" fontWeight="bold" >{event.name}</Heading>
            <Flex pt="20px">
            </Flex >
            <Flex direction="column" pl="20px" >           
            <UnorderedList>
                 <ListItem p="10px" fontSize="130%" color="gray.500" mb="2">
                     Tipo de eveto: {event.type}
                 </ListItem>
                 <ListItem p="10px" fontSize="130%"  color="gray.500" mb="2">
                     Date: {event.date}
                 </ListItem>
                 <ListItem p="10px" fontSize="130%"  color="gray.500" mb="2">
                     Rango de precios: {event.priceRange}
                 </ListItem>
                 <ListItem p="10px" fontSize="130%"  color="gray.500" mb="2">
                     Ubicacion: {event.location}, {event.locality}
                 </ListItem>
                 <ListItem p="10px" fontSize="130%"  color="gray.500" mb="2">
                     Aforo: {event.capacity}
                 </ListItem>
                 <ListItem p="10px" fontSize="130%"  color="gray.500" mb="2">
                     Host: {event.host}
                 </ListItem>
            </UnorderedList>
            </Flex>
          </Flex>
          <Spacer />
          <Flex pr="50px" position="relative" top="100px" width="60%" direction="column" alignItems="end" >
          <Heading >Descripcion del evento </Heading>
            <Box fontWeight="400" fontSize="130%" textAlign="justify" >{event.description}</Box>
            <Button m="80px" bgColor="#b20000" color="white" fontWeight="bold" onClick={deleteEvent}>X Borrar Este evento X</Button>
          </Flex>
        </Flex>
        
        
      </Flex>

    )
}