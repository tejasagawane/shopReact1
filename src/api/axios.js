import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080",
    baseURL:
      "https://cors-everywhere.herokuapp.com/http://shopspringbootshreenathshoes-env.eba-g9yapqmv.us-west-2.elasticbeanstalk.com/",
});
