import { Router } from "express";
import {
    getClients,
    getClient,
    postClient,
    putClient,
    patchClient,
    deleteClient,
} from "../controllers/clients.controllers.js";

const router = Router();

router.get("/clients", getClients);

router.get("/clients/:id", getClient);

router.post("/clients", postClient);

router.put("/clients/:id", putClient);

router.patch("/clients/:id", patchClient);

router.delete("/clients/:id", deleteClient);

export default router;
