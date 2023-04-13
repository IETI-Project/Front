import {useState} from "react";
import {Link} from "react-router-dom";

export function EventCard(props){
    const [event,setEvent] = useState(props.data)

    return (
        <ul>
            <li>{event.name}</li>
            <li>{event.type}</li>
            <li>{event.description}</li>
            <li>{event.date}</li>
            <li>{event.priceRange}</li>
            <li>
                <Link to={"event/"+event.id}>Ir al evento</Link>
            </li>
        </ul>
    );

}