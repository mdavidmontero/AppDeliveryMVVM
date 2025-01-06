import axios from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { User } from "../../../../domain/entities/User";

const ApiDelivery = axios.create({
  baseURL: "http://192.168.1.51:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiDeliveryFormImage = axios.create({
  baseURL: "http://192.168.1.51:3000/api",
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

ApiDelivery.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data as any);
    config.headers.Authorization = `${user.session_token}`;
  }
  return config;
});

ApiDeliveryFormImage.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data as any);
    config.headers!["Authorization"] = user?.session_token!;
  }
  return config;
});

export { ApiDelivery, ApiDeliveryFormImage };
