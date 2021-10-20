import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _tm5ELPyEwY8_hoiQjAgc9lDAHtH4y3eTyc2ItalGbgCbtem8RV-GJrl0YDEmvxKFJfDcJ7Xy19d1ZOC5EvPNrSEs1loN9_g2sSVoz3ynqGNY5ZQz_FvViRnDNhpYXYx",
  },
});
