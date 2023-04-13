import axios from "axios";
import authHeader from "./auth-header";




const API_URL = "http://localhost:8080/v1/events/";

const getPublicContent = () => {
  return axios.get(API_URL+"all")
};


const getUserBoard = () => {
  return app.get(API_URL + "user", function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
};

const getModeratorBoard = () => {
  return app.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return app.get(API_URL + "admin", { headers: authHeader() });
}; 


const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;