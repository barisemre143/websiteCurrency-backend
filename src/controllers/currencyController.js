import { fetchExchangeRates } from "../services/currencyService.js"; // Servis dosyanı içe aktar

export const getExchangeRates = async (req, res) => {
  try {
    const data = await fetchExchangeRates(); // API'den döviz verilerini al
    res.json(data);
  } catch (error) {
    console.error("Döviz kurları alınırken hata oluştu:", error.message);
    res.status(500).json({ message: "Döviz kurları alınırken hata oluştu" });
  }
};
