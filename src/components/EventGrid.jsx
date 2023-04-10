import {useEffect, useState} from "react";

export function EventGrid(){

    const [events,setEvents] = useState([])

    useEffect(() => {
        fetchEvents()
            .then(eventsData => setEvents(eventsData))
            .catch(error => console.log("Can't load events"));
    }, []);

    const fetchEvents = () => {
        return fetch('api/events')
            .then(response => response.json());
    };

    return (
      <div className="event-grid">
          {events.map((event) => (
              <Event data={event}/>
          ))}
      </div>
    );
}