import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(`${process.env.EXCHANGE_API_URL}USD`, {
      headers: { "apikey": process.env.EXCHANGE_API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("API'den veri alınırken hata oluştu:", error);
    throw error;
  }
};
