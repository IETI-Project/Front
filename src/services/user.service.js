import axios from "axios";
import authHeader from "./auth-header";

var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return app.get(API_URL + "all", function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
};

const getUserBoard = () => {
  return app.get(API_URL + "user", function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;