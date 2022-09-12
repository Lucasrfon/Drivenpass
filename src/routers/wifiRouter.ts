import {Router} from "express";
import { createNewWifi, deleteWifi, getWifi, getWifis } from "../controllers/wifiController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import wifiSchema from "../schemas/wifiSchema";

const wifisRouter = Router();

wifisRouter.post('/wifis', validateToken(), validateSchema(wifiSchema), createNewWifi);
wifisRouter.get('/wifis', validateToken(), getWifis);
wifisRouter.get('/wifis/:id', validateToken(), getWifi);
wifisRouter.delete('/wifis/:id', validateToken(), deleteWifi);

export default wifisRouter;