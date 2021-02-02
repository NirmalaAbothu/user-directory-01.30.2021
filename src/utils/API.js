import axios from "axios";

// API url to make a call to get random users
const BASEURL = "https://randomuser.me/api/?results=200";

// serch function to get random users
export default {
     search: function () {
          return axios.get(BASEURL);
     },
};
