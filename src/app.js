import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import currencyRoutes from "./routes/currencyRoutes.js"; // Rotaları içe aktar

dotenv.config(); // .env dosyasını yükle

const app = express();

// CORS configuration for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://moneyweb.vercel.app', 'https://your-domain.com'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json()); // JSON verileri işleyebilir

// API Rotaları
app.use("/api/currency", currencyRoutes);

export default app;
