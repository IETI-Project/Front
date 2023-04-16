import axios from "axios";
import authHeader from "./auth-header";





const API_URL = "http://localhost:8080/v1/events/";

const getEvents = () => {
  return axios.get(API_URL+"all");
};


const postEvent = (data) => {
  // console.log(data);
  return axios.post(API_URL + "addEvent", data);
};



const EventService = {
  getEvents,
  postEvent,
};

export default EventService;