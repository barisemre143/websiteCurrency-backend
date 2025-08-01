import express from "express";
import { getExchangeRates } from "../controllers/currencyController.js"; // Controller'ı içe aktar

const router = express.Router();

router.get("/rates", getExchangeRates); // Döviz kurları için endpoint

export default router;
