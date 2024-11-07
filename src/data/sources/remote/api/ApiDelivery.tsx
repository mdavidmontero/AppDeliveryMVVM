import axios from "axios";

const ApiDelivery = axios.create({
  baseURL: "http://192.168.0.12:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { ApiDelivery };
