import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080",
    baseURL:
      "https://cors-everywhere.herokuapp.com/http://springbootmysqlcrudshop-env.eba-n3f7imtv.us-west-2.elasticbeanstalk.com",
});
