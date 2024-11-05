import { ResponseApiDelivery } from "../../data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";

export interface AuthRepository {
  register(user: User): Promise<ResponseApiDelivery>;
}
