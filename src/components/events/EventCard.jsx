import {useState} from "react";
import React from "react";
import { Flex, Card, Box, Text, Image } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import '../../styles/EventCard.css'

export function EventCard(props){
    const [event,setEvent] = useState(props.data)
    // var hash = require('object-hash')
    // console.log(event.id)
    // style={{ border: "1px solid gray" }}

    return (
        <Flex>
            <Card  border='1px solid' borderColor='gray.200' borderRadius = '50px' width = '100%' margin = '1%' padding = '1%'>
                <Flex direction="row" align="center" spacing="4">
                    <Box
                    h = '20vh'
                    minW ='40%'
                    borderRightWidth="1px"
                    borderRightStyle="solid"
                    borderColor="gray.200"
                    >
                        <Image src={event.photoURL} alt={event.name} maxW="100%" h = '100%' borderLeftRadius = '50px' />
                    </Box>
                    <Box className = 'Box' w= '50%' p="4" overflow='auto' maxH='20vh'>
                        <Text fontWeight="bold" fontSize="xl" mb="2">
                            {event.name}
                        </Text>
                        <Text fontSize="md" color="gray.500" mb="2">
                            {event.type}
                        </Text>
                        <Text fontSize="md" color="gray.500" mb="2">
                            Date: {event.date}
                        </Text>
                        <Text fontSize="md" color="gray.500" mb="2">
                            Rango de precios: {event.priceRange}
                        </Text>
                        <Text fontSize="md" color="gray.500" mb="2">
                            Ubicacion: {event.location}, {event.locality}
                        </Text>
                        <Text fontSize="md" color="gray.500" mb="2">
                            Aforo: {event.capacity}
                        </Text>
                        <Text fontSize="md" color="gray.500" mb="2">
                            Host: {event.host}
                        </Text>
                    </Box>
                        <Link  style={{ color: '#a60054' }} to={"/event/"+event.name} >Detalles<ExternalLinkIcon mx='2px' /></Link>
                </Flex>
            </Card>
        </Flex>
  );
}