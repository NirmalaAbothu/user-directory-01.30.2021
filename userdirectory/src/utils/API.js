import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200";

export default {
     search: function () {
          return axios.get(BASEURL);
     },
};

// const APIKEY = "&apikey=trilogy";

// function UserProfile() {
//      return axios.get("https://randomuser.me/api/?results=100");
// }

// export default UserProfile;
